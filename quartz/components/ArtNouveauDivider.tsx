// =============================================================
//  ArtNouveauDivider.tsx
//  Place at: quartz/components/ArtNouveauDivider.tsx
// =============================================================

import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function ArtNouveauDivider(_props: QuartzComponentProps) {
    return (
      <div class="an-divider-wrap" aria-hidden="true">
        <svg
          class="an-divider-svg"
          viewBox="0 0 640 48"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height="48"
        >
          {/* Central Ornament - Three Dots */}
          <circle cx="320" cy="24" r="7.5" fill="var(--an-patina)" />
          <circle cx="298" cy="24" r="4.5" fill="var(--an-terracotta)" />
          <circle cx="342" cy="24" r="4.5" fill="var(--an-terracotta)" />

          {/* Left Vine - Organic "S" Wave */}
          <path
            d="M 60 28 Q 120 4 180 24 T 280 24"
            stroke="var(--an-patina)"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
          />
          
          {/* Left Side Leaves */}
          {/* Leaf on top of the first crest */}
          <ellipse cx="125" cy="12" rx="13" ry="6.5" fill="var(--an-sage)" transform="rotate(-10 125 12)" />
          {/* Leaf on bottom of the trough */}
          <ellipse cx="230" cy="36" rx="13" ry="6.5" fill="var(--an-sage)" transform="rotate(10 230 36)" />

          {/* Right Vine - Mirrored Organic "S" Wave */}
          <path
            d="M 580 28 Q 520 4 460 24 T 360 24"
            stroke="var(--an-patina)"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
          />

          {/* Right Side Leaves */}
          {/* Leaf on top of the first crest */}
          <ellipse cx="515" cy="12" rx="13" ry="6.5" fill="var(--an-sage)" transform="rotate(10 515 12)" />
          {/* Leaf on bottom of the trough */}
          <ellipse cx="410" cy="36" rx="13" ry="6.5" fill="var(--an-sage)" transform="rotate(-10 410 36)" />
        </svg>
      </div>
    )
  }

  ArtNouveauDivider.css = `
    .an-divider-wrap {
      width: 100%;
      padding: 1.5rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      /* Color palette extracted from image_b2fb7e.png */
      --an-patina:     #536D64;
      --an-terracotta: #C27A56;
      --an-sage:       #A3B5A1;
    }

    :root[saved-theme="dark"] .an-divider-wrap {
      /* Adjusted for readability on dark backgrounds */
      --an-patina:     #7A9E7E;
      --an-terracotta: #D4845D;
      --an-sage:       #BCCAB9;
    }

    .an-divider-svg {
      max-width: 500px;
      height: auto;
      overflow: visible;
    }
  `

  return ArtNouveauDivider
}) satisfies QuartzComponentConstructor