// =============================================================
//  ArtNouveauDivider.tsx
//  Place at: quartz/components/ArtNouveauDivider.tsx
//
//  Quartz uses Preact (not React). Rules that differ from React:
//  - Use `class` not `className` for HTML elements
//  - SVG presentation attributes stay kebab-case (stroke-width,
//    fill-opacity, etc.) — Preact passes them through as-is
//  - No self-closing tags on HTML elements (SVG is fine)
// =============================================================

import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function ArtNouveauDivider(_props: QuartzComponentProps) {
    return (
      <div class="an-divider-wrap" aria-hidden="true">
        <svg
          class="an-divider-svg"
          viewBox="0 0 640 36"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height="36"
        >
          {/* Left vine wave */}
          <path
            d="M20 18 Q60 6 100 18 Q140 30 180 18 Q220 6 260 18"
            stroke="var(--an-patina)"
            stroke-width="1.2"
            fill="none"
            stroke-linecap="round"
          />

          {/* Right vine wave */}
          <path
            d="M380 18 Q420 6 460 18 Q500 30 540 18 Q580 6 620 18"
            stroke="var(--an-patina)"
            stroke-width="1.2"
            fill="none"
            stroke-linecap="round"
          />

          {/* Left leaves */}
          <ellipse cx="100" cy="10" rx="6" ry="3" fill="var(--an-sage)" fill-opacity="0.75" transform="rotate(-20 100 10)" />
          <ellipse cx="140" cy="26" rx="6" ry="3" fill="var(--an-sage)" fill-opacity="0.65" transform="rotate(20 140 26)" />
          <ellipse cx="180" cy="10" rx="6" ry="3" fill="var(--an-sage)" fill-opacity="0.75" transform="rotate(-20 180 10)" />
          <ellipse cx="220" cy="26" rx="6" ry="3" fill="var(--an-sage)" fill-opacity="0.65" transform="rotate(20 220 26)" />

          {/* Right leaves */}
          <ellipse cx="420" cy="10" rx="6" ry="3" fill="var(--an-sage)" fill-opacity="0.75" transform="rotate(-20 420 10)" />
          <ellipse cx="460" cy="26" rx="6" ry="3" fill="var(--an-sage)" fill-opacity="0.65" transform="rotate(20 460 26)" />
          <ellipse cx="500" cy="10" rx="6" ry="3" fill="var(--an-sage)" fill-opacity="0.75" transform="rotate(-20 500 10)" />
          <ellipse cx="540" cy="26" rx="6" ry="3" fill="var(--an-sage)" fill-opacity="0.65" transform="rotate(20 540 26)" />

          {/* Central ornament — outer ring */}
          <circle cx="320" cy="18" r="9" fill="none" stroke="var(--an-patina)" stroke-width="0.8" />
          {/* Central dot */}
          <circle cx="320" cy="18" r="3.5" fill="var(--an-terracotta)" />
          {/* Four petal dots */}
          <circle cx="320" cy="7"  r="2" fill="var(--an-ochre)" />
          <circle cx="320" cy="29" r="2" fill="var(--an-ochre)" />
          <circle cx="309" cy="18" r="2" fill="var(--an-ochre)" />
          <circle cx="331" cy="18" r="2" fill="var(--an-ochre)" />

          {/* Dashed connector stems */}
          <line x1="260" y1="18" x2="311" y2="18" stroke="var(--an-patina)" stroke-width="0.8" stroke-dasharray="3 3" />
          <line x1="329" y1="18" x2="380" y2="18" stroke="var(--an-patina)" stroke-width="0.8" stroke-dasharray="3 3" />
        </svg>
      </div>
    )
  }

  ArtNouveauDivider.css = `
    .an-divider-wrap {
      width: 100%;
      padding: 0.25rem 0 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      --an-patina:     #4E7268;
      --an-terracotta: #C0714A;
      --an-ochre:      #C9A84C;
      --an-sage:       #7A9E7E;
    }

    :root[saved-theme="dark"] .an-divider-wrap {
      --an-patina:     #7A9E7E;
      --an-terracotta: #d4845d;
      --an-ochre:      #d4af62;
      --an-sage:       #9abfa0;
    }

    .an-divider-svg {
      max-width: 640px;
      height: auto;
      overflow: visible;
    }
  `

  return ArtNouveauDivider
}) satisfies QuartzComponentConstructor
