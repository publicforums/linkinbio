import LocationIcon from "@/icons/LocationIcon";

export default function InfoSection() {
  return (
    <div className="mt-6 flex items-center justify-center gap-5 animate-fade-up delay-500">
      <div className="flex items-center gap-1.5">
        <LocationIcon className="h-3.5 w-3.5 text-text-muted" />
        <span className="text-xs text-text-muted tracking-wide">
          Connecticut, USA
        </span>
      </div>
      <div className="h-3 w-px bg-white/10" />
      <span className="text-xs text-text-muted tracking-wide">Male</span>
    </div>
  );
}
