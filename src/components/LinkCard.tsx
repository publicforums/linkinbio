import { type ReactNode } from "react";

interface LinkCardProps {
  href: string;
  icon: ReactNode;
  label: string;
  handle: string;
}

export default function LinkCard({ href, icon, label, handle }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-card group flex items-center gap-4 rounded-xl border border-card-border bg-card-bg px-5 py-4 backdrop-blur-sm"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent/10">
        {icon}
      </div>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-sm font-medium tracking-tight text-white/90 transition-colors duration-300 group-hover:text-white">
          {label}
        </span>
        <span className="text-xs text-text-muted truncate">
          {handle}
        </span>
      </div>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="ml-auto h-4 w-4 shrink-0 text-white/20 transition-all duration-300 group-hover:text-white/50 group-hover:translate-x-0.5"
      >
        <path
          d="M9 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
