import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pb-16">
      <Hero />
      <InfoSection />
      <SocialLinks />

      {/* Footer accent line */}
      <div className="mt-auto pt-16 animate-fade-in delay-800">
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>
    </main>
  );
}
