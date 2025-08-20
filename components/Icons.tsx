
import React from 'react';

const iconProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const FrameworkIcon = ({ className }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <rect width="7" height="7" x="3" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="14" rx="1" />
    <rect width="7" height="7" x="3" y="14" rx="1" />
  </svg>
);

export const StylingIcon = ({ className }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a10 10 0 00-10 10c0 4.42 2.87 8.17 6.84 9.5.6.11.82-.26.82-.57v-2.07c-2.78.6-3.37-1.34-3.37-1.34-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3 0.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.82 1.1.82 2.22v3.29c0 .31.22.69.83.57A10 10 0 0012 2z" />
  </svg>
);

export const ComponentIcon = ({ className }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    <path d="M3.27 6.96L12 12.01l8.73-5.05" />
    <path d="M12 22.08V12" />
  </svg>
);

export const ThemeIcon = ({ className }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <path d="M12 2.69l.34.26a12 12 0 0010.37 10.37l.26.34-.34-.26A12 12 0 011.93 2.95l-.26-.34z" />
    <path d="M21.74 12.26l-.34.26a12 12 0 01-10.37 10.37l-.26.34.34-.26a12 12 0 0010.37-10.37l.26-.34z" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

export const ScaleIcon = ({ className }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <path d="M12 3v18" />
    <path d="M3 12h18" />
    <path d="M19.07 4.93l-14.14 14.14" />
    <path d="M19.07 19.07L4.93 4.93" />
  </svg>
);

export const CICDIcon = ({ className }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <path d="M20 12h-4" />
    <path d="M4 12h4" />
    <path d="M12 20v-4" />
    <path d="M12 4v4" />
    <path d="M12 12l3-3-3-3" />
    <path d="M12 12l-3 3 3 3" />
    <path d="M12 12l3 3-3 3" />
    <path d="M12 12l-3-3 3-3" />
    <circle cx="12" cy="12" r="8" />
  </svg>
);
