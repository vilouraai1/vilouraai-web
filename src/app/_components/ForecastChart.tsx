/**
 * Editorial SVG forecast chart for the hero.
 * Illustrative 12-week demand curve with an 80% probability band,
 * a capacity line, and the over-capacity weeks called out.
 * Crisp vector rendering in the paper/ink/pine system — no raster assets.
 */

const W = 560;
const H = 400;
const PAD_L = 46;
const PAD_R = 18;
const PAD_T = 30;
const PAD_B = 46;

const PLOT_W = W - PAD_L - PAD_R;
const PLOT_H = H - PAD_T - PAD_B;

// Illustrative weekly bookings. Labeled illustrative everywhere it appears.
const DEMAND = [42, 45, 47, 52, 56, 60, 64, 69, 75, 82, 88, 85];
const BAND = 0.11;
const CAPACITY = 70;
const MAX_V = 100;

const PINE = "#17603c";
const INK = "#1c1813";
const RUST = "#b23c17";

type Pt = { x: number; y: number };

const x = (i: number) => PAD_L + (i / (DEMAND.length - 1)) * PLOT_W;
const y = (v: number) => PAD_T + PLOT_H - (v / MAX_V) * PLOT_H;

function smoothPath(pts: Pt[]): string {
  if (pts.length < 2) return "";
  const first = pts[0];
  if (!first) return "";
  let d = `M ${first.x.toFixed(1)},${first.y.toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)] ?? first;
    const p1 = pts[i] ?? first;
    const p2 = pts[i + 1] ?? first;
    const p3 = pts[Math.min(pts.length - 1, i + 2)] ?? first;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
  }
  return d;
}

export function ForecastChart() {
  const demandPts: Pt[] = DEMAND.map((v, i) => ({ x: x(i), y: y(v) }));
  const upperPts: Pt[] = DEMAND.map((v, i) => ({
    x: x(i),
    y: y(Math.min(MAX_V, v * (1 + BAND))),
  }));
  const lowerPts: Pt[] = DEMAND.map((v, i) => ({
    x: x(i),
    y: y(Math.max(0, v * (1 - BAND))),
  }));

  const bandPath =
    smoothPath(upperPts) +
    ` L ${[...lowerPts].reverse().map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" L ")} Z`;

  const capY = y(CAPACITY);
  const crunchStart = x(7.5);
  const crunchEnd = Math.min(x(11) + (x(1) - x(0)) / 2, W - PAD_R);

  const gridVals = [0, 25, 50, 75, 100];

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="Illustrative 12-week booking forecast: demand climbs past the business's weekly capacity in weeks 9 through 12"
      className="w-full"
    >
      {/* crunch wash */}
      <rect
        x={crunchStart}
        y={PAD_T}
        width={crunchEnd - crunchStart}
        height={PLOT_H}
        fill={RUST}
        opacity={0.08}
      />

      {/* gridlines */}
      {gridVals.map((v) => (
        <g key={v}>
          <line
            x1={PAD_L}
            x2={W - PAD_R}
            y1={y(v)}
            y2={y(v)}
            stroke={INK}
            strokeOpacity={v === 0 ? 0.35 : 0.1}
            strokeWidth={1}
          />
          <text
            x={PAD_L - 10}
            y={y(v) + 4}
            textAnchor="end"
            fontSize={11}
            fill={INK}
            opacity={0.55}
            fontFamily="Archivo, sans-serif"
          >
            {v}
          </text>
        </g>
      ))}

      {/* probability band */}
      <path d={bandPath} fill={PINE} opacity={0.13} />

      {/* capacity line */}
      <line
        x1={PAD_L}
        x2={W - PAD_R}
        y1={capY}
        y2={capY}
        stroke={INK}
        strokeWidth={1.5}
        strokeDasharray="7 5"
        opacity={0.7}
      />
      <text
        x={PAD_L + 4}
        y={capY - 8}
        textAnchor="start"
        fontSize={12}
        fontWeight={700}
        fill={INK}
        opacity={0.75}
        fontFamily="Archivo, sans-serif"
      >
        Your capacity · {CAPACITY}/wk
      </text>

      {/* demand curve */}
      <path
        d={smoothPath(demandPts)}
        fill="none"
        stroke={PINE}
        strokeWidth={3}
        strokeLinecap="round"
      />
      {demandPts.map((p, i) => {
        const over = DEMAND[i]! > CAPACITY;
        return (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={over ? 4.5 : 3}
            fill={over ? RUST : PINE}
            stroke="#fff"
            strokeWidth={1.5}
          />
        );
      })}

      {/* crunch callout */}
      <text
        x={(crunchStart + crunchEnd) / 2}
        y={PAD_T + 18}
        textAnchor="middle"
        fontSize={12.5}
        fontWeight={800}
        fill={RUST}
        fontFamily="Archivo, sans-serif"
        letterSpacing={0.4}
      >
        4 WEEKS OVER CAPACITY
      </text>
      <text
        x={(crunchStart + crunchEnd) / 2}
        y={PAD_T + PLOT_H - 14}
        textAnchor="middle"
        fontSize={11.5}
        fill={INK}
        opacity={0.65}
        fontFamily="Archivo, sans-serif"
      >
        bookings your competitors take
      </text>

      {/* band label */}
      <text
        x={x(0.2)}
        y={y(DEMAND[0]! * (1 - BAND)) + 24}
        fontSize={11.5}
        fill={PINE}
        opacity={0.9}
        fontFamily="Archivo, sans-serif"
        fontStyle="italic"
      >
        80% probability band
      </text>

      {/* x labels */}
      {DEMAND.map((_, i) => (
        <text
          key={i}
          x={x(i)}
          y={H - PAD_B + 22}
          textAnchor="middle"
          fontSize={11}
          fill={INK}
          opacity={0.55}
          fontFamily="Archivo, sans-serif"
        >
          W{i + 1}
        </text>
      ))}
      <text
        x={PAD_L + PLOT_W / 2}
        y={H - 10}
        textAnchor="middle"
        fontSize={11}
        fill={INK}
        opacity={0.55}
        fontFamily="Archivo, sans-serif"
        letterSpacing={1.5}
      >
        NEXT 12 WEEKS
      </text>
    </svg>
  );
}
