interface Props {
  height?: number;
  className?: string;
}

export default function LogoMark({ height = 40, className }: Props) {
  const width = Math.round(height * 0.38);
  const id = "logo-gold";

  return (
    <svg
      viewBox="0 0 40 116"
      width={width}
      height={height}
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        {/* Main gold gradient — top bright, bottom rich */}
        <linearGradient id={`${id}-main`} x1="8" y1="0" x2="32" y2="116" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FFF3A3" />
          <stop offset="25%"  stopColor="#F5C518" />
          <stop offset="60%"  stopColor="#D4940A" />
          <stop offset="100%" stopColor="#8B5E00" />
        </linearGradient>

        {/* Left-rail highlight — simulates light from upper-left */}
        <linearGradient id={`${id}-shine`} x1="0" y1="0" x2="40" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"  stopColor="#fff" stopOpacity="0.35" />
          <stop offset="45%" stopColor="#fff" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.12" />
        </linearGradient>

        {/* Fin gradient */}
        <linearGradient id={`${id}-fin`} x1="14" y1="94" x2="26" y2="114" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#D4940A" />
          <stop offset="100%" stopColor="#6B4400" />
        </linearGradient>

        {/* Stringer glow */}
        <filter id={`${id}-glow`} x="-50%" y="-5%" width="200%" height="110%">
          <feGaussianBlur stdDeviation="0.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Board body ── */}
      <path
        d="M20 1
           C32 8, 39 24, 39 40
           C39 64, 33 80, 28 94
           L12 94
           C7 80, 1 64, 1 40
           C1 24, 8 8, 20 1Z"
        fill={`url(#${id}-main)`}
      />

      {/* Metallic sheen overlay */}
      <path
        d="M20 1
           C32 8, 39 24, 39 40
           C39 64, 33 80, 28 94
           L12 94
           C7 80, 1 64, 1 40
           C1 24, 8 8, 20 1Z"
        fill={`url(#${id}-shine)`}
      />

      {/* Board outline — dark gold rim */}
      <path
        d="M20 1
           C32 8, 39 24, 39 40
           C39 64, 33 80, 28 94
           L12 94
           C7 80, 1 64, 1 40
           C1 24, 8 8, 20 1Z"
        stroke="#7A4D00"
        strokeWidth="0.75"
        strokeOpacity="0.6"
        fill="none"
      />

      {/* Stringer */}
      <line
        x1="20" y1="4"
        x2="20" y2="91"
        stroke="#FFF8C0"
        strokeWidth="0.7"
        strokeOpacity="0.55"
        filter={`url(#${id}-glow)`}
      />

      {/* ── Fin ── */}
      <path
        d="M20 94
           C19.5 99, 16 106, 14 113
           C17 110, 23 110, 26 113
           C24 106, 20.5 99, 20 94Z"
        fill={`url(#${id}-fin)`}
      />
      <path
        d="M20 94
           C19.5 99, 16 106, 14 113
           C17 110, 23 110, 26 113
           C24 106, 20.5 99, 20 94Z"
        stroke="#7A4D00"
        strokeWidth="0.5"
        strokeOpacity="0.5"
        fill="none"
      />

      {/* Nose tip glint */}
      <ellipse
        cx="20" cy="5"
        rx="2.5" ry="1.5"
        fill="#fff"
        opacity="0.4"
        transform="rotate(-10 20 5)"
      />
    </svg>
  );
}
