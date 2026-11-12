"use client";

import { useMemo, useState } from "react";

/**
 * Interactive forecast demo (w2).
 * The visitor enters their own past 12 weekly numbers and gets a labeled
 * chart: 12 weeks of actuals + a 4-week straight-line trend projection.
 * Everything runs in the browser — no numbers leave the page.
 * The projection is explicitly labeled a simple sketch, not the
 * VilouraAI forecast (which fits seasonality and shows probability bands).
 */

const SAMPLE = [38, 41, 39, 44, 47, 45, 50, 53, 52, 58, 61, 64];
const FORECAST_WEEKS = 4;

const PINE = "#17603c";
const INK = "#1c1813";
const RUST = "#b23c17";

type Field = { raw: string; touched: boolean };

const emptyFields = (): Field[] =>
  Array.from({ length: 12 }, () => ({ raw: "", touched: false }));

/** Returns a finite number >= 0, or null when the field is not usable yet. */
function parseValue(raw: string): number | null {
  const trimmed = raw.trim();
  if (trimmed === "") return null;
  const n = Number(trimmed);
  if (!Number.isFinite(n) || n < 0) return null;
  return n;
}

function formatNum(n: number): string {
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}

function fmtSigned(n: number): string {
  const sign = n > 0 ? "+" : n < 0 ? "−" : "";
  return `${sign}${Math.abs(n).toFixed(1)}`;
}

export function DemoForecast() {
  const [fields, setFields] = useState<Field[]>(emptyFields);
  const [paste, setPaste] = useState("");
  const [pasteError, setPasteError] = useState<string | null>(null);
  const [pasteOk, setPasteOk] = useState(false);

  const values = useMemo(
    () => fields.map((f) => parseValue(f.raw)),
    [fields],
  );
  const invalidIdx = useMemo(
    () =>
      values
        .map((v, i) => (v === null ? i : -1))
        .filter((i) => i >= 0),
    [values],
  );
  const allValid = invalidIdx.length === 0;

  const result = useMemo(() => {
    if (!allValid) return null;
    const ys = values as number[];
    const n = ys.length;
    const xs = ys.map((_, i) => i);
    const sumX = xs.reduce((a, b) => a + b, 0);
    const sumY = ys.reduce((a, b) => a + b, 0);
    const sumXY = xs.reduce((a, x, i) => a + x * (ys[i] ?? 0), 0);
    const sumX2 = xs.reduce((a, x) => a + x * x, 0);
    const denom = n * sumX2 - sumX * sumX;
    const slope = denom === 0 ? 0 : (n * sumXY - sumX * sumY) / denom;
    const intercept = (sumY - slope * sumX) / n;
    const forecast = Array.from({ length: FORECAST_WEEKS }, (_, j) =>
      Math.max(0, intercept + slope * (n + j)),
    );
    const pastAvg = sumY / n;
    const nextTotal = forecast.reduce((a, b) => a + b, 0);
    return { ys, slope, intercept, forecast, pastAvg, nextTotal };
  }, [values, allValid]);

  const chart = useMemo(() => {
    if (!result) return null;
    const W = 640;
    const H = 360;
    const PAD_L = 46;
    const PAD_R = 18;
    const PAD_T = 26;
    const PAD_B = 44;
    const PLOT_W = W - PAD_L - PAD_R;
    const PLOT_H = H - PAD_T - PAD_B;
    const all = [...result.ys, ...result.forecast];
    const rawMax = Math.max(...all, 0);
    const top = rawMax <= 0 ? 1 : Math.ceil(rawMax * 1.1);
    const total = result.ys.length + result.forecast.length;
    const x = (i: number) => PAD_L + (i / (total - 1)) * PLOT_W;
    const y = (v: number) => PAD_T + PLOT_H - (v / top) * PLOT_H;
    const actualPts = result.ys.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
    const forecastPts = [
      `${x(11).toFixed(1)},${y(result.ys[11] ?? 0).toFixed(1)}`,
      ...result.forecast.map((v, j) => `${x(12 + j).toFixed(1)},${y(v).toFixed(1)}`),
    ].join(" ");
    const gridVals = [0, top / 4, top / 2, (3 * top) / 4, top];
    return {
      W,
      H,
      PAD_L,
      PAD_R,
      PAD_T,
      PAD_B,
      PLOT_W,
      PLOT_H,
      top,
      x,
      y,
      actualPts,
      forecastPts,
      gridVals,
    };
  }, [result]);

  const setField = (i: number, raw: string) => {
    setFields((prev) =>
      prev.map((f, j) => (j === i ? { raw, touched: true } : f)),
    );
  };

  const fillSample = () => {
    setPasteError(null);
    setPasteOk(false);
    setFields(SAMPLE.map((v) => ({ raw: String(v), touched: false })));
  };

  const clearAll = () => {
    setPaste("");
    setPasteError(null);
    setPasteOk(false);
    setFields(emptyFields());
  };

  const fillFromPaste = () => {
    setPasteOk(false);
    const parts = paste.split(/[\s,;]+/).filter((p) => p !== "");
    const nums = parts.map((p) => Number(p));
    if (parts.length !== 12) {
      setPasteError(
        `Found ${parts.length} number${parts.length === 1 ? "" : "s"} — paste exactly 12, one per week.`,
      );
      return;
    }
    if (nums.some((n) => !Number.isFinite(n) || n < 0)) {
      setPasteError(
        "Every pasted value must be a number 0 or higher — no negatives, no text.",
      );
      return;
    }
    setPasteError(null);
    setPasteOk(true);
    setFields(nums.map((n) => ({ raw: String(n), touched: false })));
  };

  return (
    <div>
      {/* Paste box */}
      <div className="rounded-xl border border-ink/15 bg-paper p-5">
        <label
          htmlFor="demo-paste"
          className="block text-sm font-bold"
        >
          Paste 12 weeks of numbers
        </label>
        <p className="mt-1 text-sm text-ink/60">
          Copy a column from your spreadsheet — comma, space, or one per
          line — and drop it in.
        </p>
        <textarea
          id="demo-paste"
          value={paste}
          onChange={(e) => {
            setPaste(e.target.value);
            setPasteError(null);
            setPasteOk(false);
          }}
          rows={3}
          placeholder={"Example:\n38, 41, 39, 44, 47, 45, 50, 53, 52, 58, 61, 64"}
          className="mt-3 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-ink placeholder:text-ink/40 transition-colors focus:border-pine focus:outline-none"
        />
        <div className="mt-3 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={fillFromPaste}
            className="rounded-full bg-pine px-6 py-3 font-display text-sm font-bold text-paper transition-colors hover:bg-pine-deep"
          >
            Fill the 12 weeks
          </button>
          <button
            type="button"
            onClick={fillSample}
            className="rounded-full border border-ink/25 px-6 py-3 font-display text-sm font-bold transition-colors hover:border-pine hover:text-pine"
          >
            Try sample data
          </button>
          <button
            type="button"
            onClick={clearAll}
            className="rounded-full border border-ink/25 px-6 py-3 font-display text-sm font-bold transition-colors hover:border-pine hover:text-pine"
          >
            Clear all
          </button>
        </div>
        {pasteError && (
          <p role="alert" className="mt-3 text-sm font-medium text-red-700">
            {pasteError}
          </p>
        )}
        {pasteOk && (
          <p role="status" className="mt-3 text-sm font-medium text-pine">
            Pasted — 12 weeks filled. Check them below, then see the chart.
          </p>
        )}
      </div>

      {/* 12 inputs */}
      <div className="mt-8">
        <p className="text-sm font-bold">
          Your past 12 weeks{" "}
          <span className="font-normal text-ink/60">
            — bookings, jobs, orders, or clients per week
          </span>
        </p>
        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {fields.map((f, i) => {
            const invalid = f.touched && parseValue(f.raw) === null;
            return (
              <div key={i}>
                <label
                  htmlFor={`demo-week-${i + 1}`}
                  className="mb-1.5 block text-xs font-bold"
                >
                  Week {i + 1}
                </label>
                <input
                  id={`demo-week-${i + 1}`}
                  inputMode="decimal"
                  autoComplete="off"
                  value={f.raw}
                  aria-invalid={invalid}
                  onChange={(e) => setField(i, e.target.value)}
                  onBlur={() =>
                    setFields((prev) =>
                      prev.map((fld, j) =>
                        j === i ? { ...fld, touched: true } : fld,
                      ),
                    )
                  }
                  placeholder="0"
                  className={`w-full rounded-xl border bg-paper px-3 py-3 text-ink placeholder:text-ink/40 transition-colors focus:outline-none ${
                    invalid
                      ? "border-red-600 focus:border-red-600"
                      : "border-ink/15 focus:border-pine"
                  }`}
                />
                {invalid && (
                  <p className="mt-1 text-xs font-medium text-red-700">
                    0 or higher
                  </p>
                )}
              </div>
            );
          })}
        </div>
        {!allValid && (
          <p role="alert" className="mt-4 text-sm font-medium text-red-700">
            {invalidIdx.length === 12
              ? "Enter a number 0 or higher in all 12 weeks to see the chart."
              : `Still need a valid number (0 or higher) for week${invalidIdx.length === 1 ? "" : "s"} ${invalidIdx.map((i) => i + 1).join(", ")}.`}
          </p>
        )}
      </div>

      {/* Chart + summary */}
      {result && chart && (
        <div className="mt-10">
          <div className="rounded-xl border border-ink/15 bg-paper p-4 sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-2xl font-black tracking-tight">
                Your 12 weeks + next 4, projected
              </h3>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-pine">
                Trend projection · illustrative
              </p>
            </div>
            <svg
              viewBox={`0 0 ${chart.W} ${chart.H}`}
              role="img"
              aria-label="Chart: your past 12 weekly values in green, and a 4-week straight-line trend projection in rust"
              className="mt-4 w-full"
            >
              {/* projection zone */}
              <rect
                x={chart.x(11.5)}
                y={chart.PAD_T}
                width={chart.PAD_L + chart.PLOT_W + chart.PAD_R - chart.x(11.5)}
                height={chart.PLOT_H}
                fill={RUST}
                opacity={0.06}
              />
              {/* gridlines */}
              {chart.gridVals.map((v, gi) => (
                <g key={gi}>
                  <line
                    x1={chart.PAD_L}
                    x2={chart.W - chart.PAD_R}
                    y1={chart.y(v)}
                    y2={chart.y(v)}
                    stroke={INK}
                    strokeOpacity={v === 0 ? 0.35 : 0.1}
                    strokeWidth={1}
                  />
                  <text
                    x={chart.PAD_L - 8}
                    y={chart.y(v) + 4}
                    textAnchor="end"
                    fontSize={11}
                    fill={INK}
                    opacity={0.55}
                    fontFamily="Archivo, sans-serif"
                  >
                    {Math.round(v)}
                  </text>
                </g>
              ))}
              {/* actuals */}
              <polyline
                points={chart.actualPts}
                fill="none"
                stroke={PINE}
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {result.ys.map((v, i) => (
                <circle
                  key={i}
                  cx={chart.x(i)}
                  cy={chart.y(v)}
                  r={3.5}
                  fill={PINE}
                  stroke="#fff"
                  strokeWidth={1.5}
                />
              ))}
              {/* forecast */}
              <polyline
                points={chart.forecastPts}
                fill="none"
                stroke={RUST}
                strokeWidth={3}
                strokeDasharray="7 5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {result.forecast.map((v, j) => (
                <circle
                  key={j}
                  cx={chart.x(12 + j)}
                  cy={chart.y(v)}
                  r={4}
                  fill={RUST}
                  stroke="#fff"
                  strokeWidth={1.5}
                />
              ))}
              {/* x labels */}
              {result.ys.map((_, i) => (
                <text
                  key={i}
                  x={chart.x(i)}
                  y={chart.H - chart.PAD_B + 22}
                  textAnchor="middle"
                  fontSize={11}
                  fill={INK}
                  opacity={0.55}
                  fontFamily="Archivo, sans-serif"
                >
                  W{i + 1}
                </text>
              ))}
              {result.forecast.map((_, j) => (
                <text
                  key={`f${j}`}
                  x={chart.x(12 + j)}
                  y={chart.H - chart.PAD_B + 22}
                  textAnchor="middle"
                  fontSize={11}
                  fontWeight={700}
                  fill={RUST}
                  fontFamily="Archivo, sans-serif"
                >
                  +{j + 1}
                </text>
              ))}
              <text
                x={chart.PAD_L + chart.PLOT_W / 2}
                y={chart.H - 8}
                textAnchor="middle"
                fontSize={11}
                fill={INK}
                opacity={0.55}
                fontFamily="Archivo, sans-serif"
                letterSpacing={1.5}
              >
                PAST 12 WEEKS → NEXT 4 WEEKS (PROJECTION)
              </text>
            </svg>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm">
              <span className="flex items-center gap-2">
                <span className="inline-block h-0.5 w-6 bg-pine" aria-hidden="true" />
                Your numbers (weeks 1–12)
              </span>
              <span className="flex items-center gap-2">
                <span
                  className="inline-block h-0.5 w-6"
                  style={{ backgroundColor: RUST }}
                  aria-hidden="true"
                />
                Trend projection (next 4 weeks)
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              Method: a straight line fitted to your 12 weeks (least squares),
              extended 4 weeks. It shows direction, not destiny — it ignores
              seasonality, holidays, and capacity. The $495 Forecast Sprint
              fits your real pattern and shows probability bands, so you see
              the crunch weeks before they happen.
            </p>
          </div>

          {/* Summary */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-ink/15 bg-paper p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
                Trend
              </p>
              <p className="mt-2 font-display text-3xl font-black tracking-tight">
                {fmtSigned(result.slope)}
                <span className="text-base font-bold text-ink/60"> / week</span>
              </p>
              <p className="mt-1 text-sm text-ink/60">
                Past 12-week average: {formatNum(result.pastAvg)}
              </p>
            </div>
            <div className="rounded-xl border border-ink/15 bg-paper p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
                Next 4 weeks (projected)
              </p>
              <p className="mt-2 font-display text-3xl font-black tracking-tight">
                {formatNum(result.nextTotal)}
              </p>
              <p className="mt-1 text-sm text-ink/60">
                Total across the 4 projected weeks
              </p>
            </div>
            <div className="rounded-xl border border-ink/15 bg-paper p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
                Projected week 16
              </p>
              <p className="mt-2 font-display text-3xl font-black tracking-tight">
                {formatNum(result.forecast[3] ?? 0)}
              </p>
              <p className="mt-1 text-sm text-ink/60">
                4th projected week, same trend
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-pine/30 bg-paper p-5 text-center">
            <p className="font-display text-xl font-bold tracking-tight">
              Want the real forecast — with seasonality and probability bands?
            </p>
            <a
              href="/#contact"
              className="mt-4 inline-block rounded-full bg-pine px-8 py-4 font-display text-base font-bold text-paper transition-colors hover:bg-pine-deep"
            >
              Get my free forecast
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
