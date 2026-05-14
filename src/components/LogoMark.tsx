interface Props {
  height?: number;
  className?: string;
}

export default function LogoMark({ height = 40, className }: Props) {
  const width = Math.round(height * 0.34);
  const id = "logo-fish";

  return (
    <svg
      viewBox="0 0 40 100"
      width={width}
      height={height}
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        {/* Gold gradient — champagne at top, deep gold at base */}
        <linearGradient id={`${id}-gold`} x1="8" y1="2" x2="32" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FFE680" />
          <stop offset="35%"  stopColor="#F5C518" />
          <stop offset="70%"  stopColor="#D4940A" />
          <stop offset="100%" stopColor="#8B5E00" />
        </linearGradient>
      </defs>

      {/* Slimmer swallowtail fish outline */}
      <path
        d="M20 1
           C28 8, 34 24, 34 42
           C34 64, 30 80, 28 96
           L20 86
           L12 96
           C10 80, 6 64, 6 42
           C6 24, 12 8, 20 1 Z"
        stroke={`url(#${id}-gold)`}
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Stringer — center line from nose to swallowtail apex */}
      <line
        x1="20" y1="5"
        x2="20" y2="83"
        stroke={`url(#${id}-gold)`}
        strokeWidth="0.8"
        strokeOpacity="0.6"
      />
    </svg>
  );
}
