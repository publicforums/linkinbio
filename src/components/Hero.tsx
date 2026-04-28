import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Banner */}
      <div className="relative h-[240px] sm:h-[280px] w-full animate-fade-in">
        <Image
          src="/banner.png"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="banner-overlay absolute inset-0" />
      </div>

      {/* Profile section */}
      <div className="relative -mt-16 flex flex-col items-center px-6">
        {/* Profile picture */}
        <div className="animate-scale-in delay-200">
          <div className="relative h-[120px] w-[120px] rounded-full border-[3px] border-accent/40 pfp-glow">
            <Image
              src="/pfp.png"
              alt="Profile"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="mt-5 text-2xl font-semibold tracking-tight animate-fade-up delay-300">
          Knoxelle
        </h1>

        {/* Tagline */}
        <p className="mt-2 text-sm text-text-muted font-light tracking-wide animate-fade-up delay-400">
          building things that matter
        </p>
      </div>
    </section>
  );
}
