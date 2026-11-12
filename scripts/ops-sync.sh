#!/usr/bin/env bash
#
# Sync the Growth Dashboard artifact state to the /ops phone page.
#
# Usage:
#   OPS_SYNC_SECRET=xxx scripts/ops-sync.sh <dashboard.json> [ack_ids.json]
#
# - POSTs the dashboard JSON as {state} to https://vilouraai.com/api/ops/sync
# - marks the ids in ack_ids.json (default []) as processed
# - prints the endpoint response, which includes unprocessed phone commands:
#     {"ok":true,"actions":[{"id":..,"action":"approve_item","list":"website","itemId":"w3","patch":null,"createdAt":".."}]}
#
# The cron workers call this after every dashboard update. The secret must be
# set as OPS_SYNC_SECRET in the Vercel project (never committed).
set -euo pipefail

DASH_JSON="${1:?usage: ops-sync.sh <dashboard.json> [ack_ids.json]}"
ACK_FILE="${2:-}"
: "${OPS_SYNC_SECRET:?OPS_SYNC_SECRET must be set}"

ACK_IDS="[]"
if [[ -n "$ACK_FILE" && -f "$ACK_FILE" ]]; then
  ACK_IDS="$(cat "$ACK_FILE")"
fi

jq -n \
  --slurpfile state "$DASH_JSON" \
  --argjson ack "$ACK_IDS" \
  '{state: $state[0], ack_ids: $ack}' \
  | curl -sS -X POST https://vilouraai.com/api/ops/sync \
      -H "Authorization: Bearer ${OPS_SYNC_SECRET}" \
      -H "Content-Type: application/json" \
      --data @-
echo
