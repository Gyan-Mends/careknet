import type { ReactNode } from "react";
import type { IconName } from "~/content/site";

type Name =
  | IconName
  | "mail"
  | "phone"
  | "whatsapp"
  | "pin"
  | "globe"
  | "check"
  | "heart"
  | "left"
  | "right"
  | "up"
  | "menu"
  | "close"
  | "chevron";

const paths: Record<Name, ReactNode> = {
  clinic: <><path d="M4 21V8l8-5 8 5v13" /><path d="M9 21v-6h6v6" /><path d="M12 7.5v5M9.5 10h5" /></>,
  coordinate: <><circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="18" r="2.5" /><circle cx="19" cy="18" r="2.5" /><path d="M10.8 7.2 6.2 15.8M13.2 7.2l4.6 8.6M7.5 18h9" /></>,
  navigate: <><path d="M12 21.5s-7-6.2-7-11.5a7 7 0 0 1 14 0c0 5.3-7 11.5-7 11.5Z" /><circle cx="12" cy="10" r="4" /><path d="M12 8v4M10 10h4" /></>,
  health: <><path d="M6 3v5a4 4 0 0 0 8 0V3" /><path d="M10 12v3a5 5 0 0 0 10 0v-1" /><circle cx="20" cy="12" r="2" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  partner: <><path d="m3 8 4-3 5 3 5-3 4 3v7l-9 6-9-6Z" /><path d="m12 8-3 3a1.5 1.5 0 0 0 2 2l2-1 4 4M8 15l2 2" /></>,
  demo: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /><path d="m10 8 5 2.5-5 2.5Z" /></>,
  services: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8.5 7V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2M3 13h18" /></>,
  process: <><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /><path d="M9 6h6a3 3 0 0 1 3 3v6M15 18H9a3 3 0 0 1-3-3V9" /></>,
  redesign: <><path d="M4 12a8 8 0 0 1 13.7-5.7L20 8.5M20 12a8 8 0 0 1-13.7 5.7L4 15.5" /><path d="M20 4v4.5h-4.5M4 20v-4.5h4.5" /></>,
  requirements: <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" /><path d="M14 3v6h6M8 13h8M8 17h6" /></>,
  change: <><path d="m3 17 6-6 4 4 8-8" /><path d="M15 7h6v6" /></>,
  context: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.5a6.5 6.5 0 0 1 3.5 5.5" /></>,
  define: <><circle cx="11" cy="11" r="7" /><path d="m20.5 20.5-4.5-4.5M11 8v3l2 2" /></>,
  validate: <><path d="M12 3 4 6v6c0 4.5 3.3 7.8 8 9 4.7-1.2 8-4.5 8-9V6Z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>,
  improve: <><path d="M12 20V10M7 15l5-5 5 5" /><path d="M5 4h14" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  phone: <path d="M21 16.5v3a2 2 0 0 1-2.2 2A19 19 0 0 1 2.5 5.2 2 2 0 0 1 4.5 3h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8l-1.3 1.3a15 15 0 0 0 6.1 6.1l1.3-1.3a2 2 0 0 1 1.8-.6l3 .5a2 2 0 0 1 1.7 2Z" />,
  whatsapp: <><path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.1Z" /><path d="M9 8.5c0 3.5 2.9 6.5 6.5 6.5l1-1.8-2.2-1.2-1 .9a5 5 0 0 1-2.2-2.2l.9-1-1.2-2.2Z" /></>,
  pin: <><path d="M12 21.5s-7-6.2-7-11.5a7 7 0 0 1 14 0c0 5.3-7 11.5-7 11.5Z" /><circle cx="12" cy="10" r="2.5" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  heart: <path d="M12 20.5S3 15 3 8.8a4.8 4.8 0 0 1 9-2.3 4.8 4.8 0 0 1 9 2.3c0 6.2-9 11.7-9 11.7Z" />,
  left: <path d="M21 12H3m6-6-6 6 6 6" />,
  right: <path d="M3 12h18m-6-6 6 6-6 6" />,
  up: <path d="M12 20V4M7 9l5-5 5 5" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="m5 5 14 14M19 5 5 19" />,
  chevron: <path d="m6 9 6 6 6-6" />,
};

export function Icon({
  name,
  size = 24,
  className,
}: {
  name: Name;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
