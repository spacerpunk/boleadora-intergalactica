import { useId } from "react";
import { CLONE_PRODUCT } from "../../data/clone.js";

// Geometry of the can, in viewBox units: a cylinder of radius 50 seen almost
// head-on, so its top and bottom are ellipses with a short radius of 9.
const BODY =
  "M20,14 C13,20 10,27 10,36 L10,222 A50,9 0 0 0 110,222 L110,36 C110,27 107,20 100,14 Z";
const SHOULDER =
  "M20,14 C13,20 10,27 10,36 A50,9 0 0 0 110,36 C110,27 107,20 100,14 Z";
const BASE = "M10,214 A50,9 0 0 0 110,214 L110,222 A50,9 0 0 1 10,222 Z";
// Condensation drops, kept clear of the lettering.
const DROPS = [
  [24, 70, 1.8],
  [33, 94, 1.3],
  [28, 150, 2.1],
  [44, 186, 1.4],
  [86, 56, 1.5],
  [97, 90, 2],
  [88, 138, 1.2],
  [97, 172, 1.8],
  [72, 204, 1.3],
  [38, 46, 1.1],
  [84, 164, 1.1],
  [20, 196, 1.5],
];

// The demo product as a "digital clone": the same SVG in every scene.
export default function ProductClone({
  flavor,
  rim = "#ffffff",
  shadow = "#00000070",
  droplets = false,
}) {
  const uid = useId().replace(/:/g, "");
  const id = (name) => `${name}-${uid}`;
  return (
    <svg className="product-clone" viewBox="-12 0 144 246" aria-hidden="true">
      <defs>
        <linearGradient id={id("shade")} x1="0" x2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0.5" />
          <stop offset="0.16" stopColor="#000" stopOpacity="0.05" />
          <stop offset="0.27" stopColor="#fff" stopOpacity="0.36" />
          <stop offset="0.36" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.74" stopColor="#000" stopOpacity="0.04" />
          <stop offset="1" stopColor="#000" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id={id("metal")} x1="0" x2="1">
          <stop offset="0" stopColor="#6f7276" />
          <stop offset="0.3" stopColor="#dcdddb" />
          <stop offset="0.55" stopColor="#a4a7aa" />
          <stop offset="1" stopColor="#55585c" />
        </linearGradient>
        <clipPath id={id("body")}>
          <path d={BODY} />
        </clipPath>
        <filter id={id("blur")} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
        <filter id={id("soft")} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      <ellipse
        cx="60"
        cy="229"
        rx="56"
        ry="8"
        fill={shadow}
        filter={`url(#${id("soft")})`}
      />
      <path d={BODY} fill={flavor.body} />
      <g clipPath={`url(#${id("body")})`}>
        <g stroke={flavor.accent} strokeWidth="1.3">
          <line x1="46" y1="64" x2="60" y2="74" />
          <line x1="74" y1="64" x2="60" y2="74" />
          <line x1="60" y1="87" x2="60" y2="74" />
        </g>
        <g fill={flavor.accent}>
          <circle cx="46" cy="64" r="5" />
          <circle cx="74" cy="64" r="5" />
          <circle cx="60" cy="87" r="5" />
        </g>
        <text
          x="60"
          y="118"
          textAnchor="middle"
          fill={flavor.ink}
          fontFamily="'Barlow Condensed', 'Arial Narrow', sans-serif"
          fontWeight="700"
          fontSize="19"
          letterSpacing="0.4"
        >
          {CLONE_PRODUCT.brand}
        </text>
        <text
          x="60"
          y="131"
          textAnchor="middle"
          fill={flavor.ink}
          fontFamily="'IBM Plex Mono', monospace"
          fontSize="6.2"
          letterSpacing="0.5"
        >
          {CLONE_PRODUCT.line}
        </text>
        <line
          x1="32"
          y1="141"
          x2="88"
          y2="141"
          stroke={flavor.accent}
          strokeWidth="0.7"
        />
        <text
          x="60"
          y="155"
          textAnchor="middle"
          fill={flavor.accent}
          fontFamily="'IBM Plex Mono', monospace"
          fontSize="6.4"
          letterSpacing="0.8"
        >
          {flavor.name.toUpperCase()}
        </text>
        <rect x="0" y="176" width="120" height="20" fill={flavor.accent} />
        <text
          x="60"
          y="189"
          textAnchor="middle"
          fill={flavor.body}
          fontFamily="'IBM Plex Mono', monospace"
          fontSize="6"
          letterSpacing="0.6"
        >
          {CLONE_PRODUCT.size}
        </text>
        <rect
          x="0"
          y="0"
          width="120"
          height="240"
          fill={`url(#${id("shade")})`}
        />
        <rect
          x="101"
          y="30"
          width="5"
          height="200"
          fill={rim}
          opacity="0.55"
          filter={`url(#${id("blur")})`}
        />
        <rect
          x="25"
          y="30"
          width="6"
          height="200"
          fill="#fff"
          opacity="0.22"
          filter={`url(#${id("blur")})`}
        />
        {droplets &&
          DROPS.map(([x, y, r]) => (
            <g key={`${x}-${y}`}>
              <ellipse cx={x} cy={y} rx={r} ry={r * 1.25} fill="#ffffff55" />
              <circle
                cx={x - r * 0.35}
                cy={y - r * 0.45}
                r={r * 0.32}
                fill="#fff"
              />
            </g>
          ))}
      </g>
      <path d={SHOULDER} fill={`url(#${id("metal")})`} />
      <path d={BASE} fill={`url(#${id("metal")})`} />
      <ellipse cx="60" cy="14" rx="40" ry="7" fill="#c9cbcc" />
      <ellipse
        cx="60"
        cy="14.4"
        rx="34"
        ry="5.4"
        fill="none"
        stroke="#0000002e"
        strokeWidth="0.8"
      />
      <ellipse
        cx="60"
        cy="13.2"
        rx="9"
        ry="2.8"
        fill="none"
        stroke="#00000045"
        strokeWidth="0.8"
      />
      <ellipse cx="60" cy="11.6" rx="3.6" ry="1.2" fill="#00000030" />
    </svg>
  );
}
