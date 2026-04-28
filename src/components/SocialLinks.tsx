import InstagramIcon from "@/icons/InstagramIcon";
import TikTokIcon from "@/icons/TikTokIcon";
import DiscordIcon from "@/icons/DiscordIcon";
import LinkCard from "./LinkCard";

const links = [
  {
    href: "https://instagram.com/",
    icon: <InstagramIcon className="h-5 w-5 text-white/70 transition-colors duration-300 group-hover:text-white" />,
    label: "Instagram",
    handle: "@knoxelle",
    delay: "delay-600",
  },
  {
    href: "https://tiktok.com/",
    icon: <TikTokIcon className="h-5 w-5 text-white/70 transition-colors duration-300 group-hover:text-white" />,
    label: "TikTok",
    handle: "@knoxelle",
    delay: "delay-700",
  },
  {
    href: "https://discord.gg/",
    icon: <DiscordIcon className="h-5 w-5 text-white/70 transition-colors duration-300 group-hover:text-white" />,
    label: "Discord",
    handle: "Join Server",
    delay: "delay-800",
  },
];

export default function SocialLinks() {
  return (
    <div className="mt-10 w-full max-w-sm mx-auto flex flex-col gap-3 px-6">
      {links.map((link) => (
        <div
          key={link.label}
          className={`animate-fade-up ${link.delay}`}
        >
          <LinkCard
            href={link.href}
            icon={link.icon}
            label={link.label}
            handle={link.handle}
          />
        </div>
      ))}
    </div>
  );
}
