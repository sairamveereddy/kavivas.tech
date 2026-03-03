import Link from "next/link";
import Image from "next/image";

const WORK = [
  {
    title: "JobNinjas.ai",
    desc: "AI-powered job application toolkit — tailored resumes, cover letters, and tracking to apply smarter.",
    url: "https://jobninjas.ai",
    tag: "Live",
    bg: "var(--ustwo-mint)",
    image: "/work-jobninjas.png",
  },
  {
    title: "NovaMaker.com",
    desc: "Builder-focused platform for creating and launching products faster with automation and AI workflows.",
    url: "https://novamaker.com",
    tag: "In Development",
    bg: "var(--ustwo-purple)",
    image: "/work-novamaker.png",
  },
  {
    title: "VSRInsurancePlus.com",
    desc: "Insurance solutions platform — information, onboarding, and service workflows designed for clarity and speed.",
    url: "https://vsrinsuranceplus.com",
    tag: "Live",
    bg: "var(--ustwo-orange)",
    image: "/work-vsrinsurance.png",
  },
];

const PILLARS = [
  { title: "Discover", desc: "Validate new products, experiences, or business models" },
  { title: "Shape", desc: "Make it real and try it out in the real world" },
  { title: "0 to 1", desc: "Pick the highest value features and iterate towards a category giant" },
  { title: "Boost", desc: "Supercharge your team's potential with new capabilities and deep experience" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Hero wrapper — match ustwo hero layout */}
      <header className="relative isolate overflow-hidden bg-[var(--ustwo-mint)]">
        {/* Big diagonal color blocks */}
        <div className="pointer-events-none absolute inset-0">
          <div className="-left-[22%] top-[6%] h-[150%] w-[40%] -rotate-12 bg-[var(--ustwo-coral)]" />
          <div className="left-[20%] top-[0%] h-[165%] w-[55%] -rotate-12 bg-[var(--ustwo-mint)]" />
          <div className="right-[-18%] top-[-8%] h-[135%] w-[40%] -rotate-6 bg-[var(--ustwo-sky)]" />
        </div>
        <div className="grain" aria-hidden />

        {/* Nav over hero */}
        <nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-10">
          <Link href="/" className="flex items-center">
            <div className="flex items-center rounded-full bg-white/95 px-5 py-3 shadow-md shadow-black/15 ring-1 ring-black/5">
              <Image
                src="/kavivas-logo.png"
                alt="Kavivas.Tech"
                width={320}
                height={96}
                className="h-16 w-auto object-contain md:h-20"
                priority
              />
            </div>
          </Link>
          <div className="flex items-center gap-8 text-xs font-medium uppercase tracking-wide md:text-sm">
            <Link href="/#about" className="text-white/80 hover:text-white">
              What we do
            </Link>
            <Link href="/#work" className="text-white/80 hover:text-white">
              Work
            </Link>
            <Link href="/#contact" className="text-white/80 hover:text-white">
              Contact us
            </Link>
          </div>
        </nav>

        {/* Hero copy */}
        <section className="relative z-20 px-6 pb-20 pt-6 md:px-10 md:pb-28 md:pt-10">
          <div className="mx-auto flex min-h-[60vh] max-w-6xl items-end">
            <div className="max-w-3xl">
              <h1 className="text-[clamp(2.8rem,8vw,5.5rem)] font-semibold uppercase leading-[0.88] tracking-tight text-white">
                Focused AI products
                <br />
                people stick with
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                We design and build digital experiences that drive measurable outcomes by combining discovery, strategy, engineering, and delivery with human-centred design and deep technical expertise.
              </p>
              <p className="mt-3 max-w-xl text-sm text-white/80">
                Kavivas is an AI-first product studio creating software across multiple domains — built for clarity, speed, and real-world outcomes.
              </p>
            </div>
          </div>
        </section>
      </header>

      {/* Our work — colored cards + preview images (ustwo style) */}
      <section id="work" className="border-t border-neutral-200">
        <div className="px-6 py-10 md:px-10 md:py-12">
          <h2 className="mx-auto max-w-6xl text-2xl font-semibold md:text-3xl">Our work</h2>
        </div>
        <div className="grid md:grid-cols-3">
          {WORK.map((item) => (
            <div
              key={item.title}
              className="flex flex-col px-6 pb-16 pt-4 md:px-8 md:pb-24 md:pt-8"
              style={{ backgroundColor: item.bg }}
            >
              <div className="mx-auto w-full max-w-sm">
                <div className="relative overflow-hidden rounded-2xl bg-white/80 shadow-lg ring-1 ring-black/5">
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={600}
                        className="aspect-[2/3] w-full object-cover"
                      />
                    </a>
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={600}
                      className="aspect-[2/3] w-full object-cover"
                    />
                  )}
                </div>
                <p className="mt-6 text-xs font-medium uppercase tracking-wider text-[var(--ustwo-charcoal)]/70">
                  {item.tag}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-[var(--ustwo-charcoal)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ustwo-charcoal)]/85">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-neutral-200 bg-white px-6 py-8 md:px-10">
          <div className="mx-auto max-w-6xl flex justify-center">
            <Link
              href="/#work"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:no-underline"
            >
              View more work
            </Link>
          </div>
        </div>
      </section>

      {/* We're building people-first AI — gradient + circular CTA (ustwo style) */}
      <section
        className="relative overflow-hidden border-t border-neutral-200 px-6 py-16 md:px-10 md:py-24"
        style={{
          background: "linear-gradient(160deg, var(--ustwo-peach) 0%, var(--ustwo-magenta) 60%, var(--ustwo-pink) 100%)",
        }}
      >
        <div className="grain" aria-hidden />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
          <h2 className="max-w-xl text-3xl font-semibold uppercase leading-tight tracking-tight text-[var(--ustwo-charcoal)] md:text-4xl lg:text-5xl">
            We're building people-first AI
          </h2>
          <div className="flex flex-col items-start gap-6 md:max-w-md">
            <p className="text-lg leading-relaxed text-[var(--ustwo-charcoal)]/90">
              We're designing AI-enabled experiences, whilst leveraging AI in our toolkit and processes, for the benefit of both users and project teams alike.
            </p>
            <Link
              href="/#about"
              className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--ustwo-charcoal)] text-[var(--ustwo-charcoal)] transition hover:bg-[var(--ustwo-charcoal)] hover:text-white"
              aria-label="About us"
            >
              <span className="text-xl" aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* What we do — pillars */}
      <section id="about" className="border-t border-neutral-200 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold md:text-3xl">What we do</h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="border-t border-neutral-200 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold md:text-3xl">
            We're focused on clarity, speed, and real outcomes
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            Kavivas Tech Pvt Ltd is an AI-first product studio. We build across multiple domains — no AI theatre, only features users actually need.
          </p>
          <Link
            href="/#about"
            className="mt-6 inline-block text-sm font-medium text-neutral-900 underline underline-offset-4 hover:no-underline"
          >
            Read our story
          </Link>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="border-t border-neutral-200 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                Locations
              </p>
              <p className="mt-2 text-neutral-900">Hyderabad</p>
              <p className="text-neutral-600">India</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                Contact
              </p>
              <a
                href="mailto:veereddy@kavivas.tech"
                className="mt-2 block font-medium text-neutral-900 hover:underline"
              >
                veereddy@kavivas.tech
              </a>
              <a
                href="tel:+919912664800"
                className="mt-1 block text-neutral-600 hover:underline"
              >
                +91 99126 64800
              </a>
              <p className="mt-3 max-w-xs text-sm text-neutral-500">
                H. No. 7-2-31/sv/44/104, 1st Floor, Sv Colony, Rangareddy, Telangana, Hyderabad 500079, India
              </p>
              <p className="mt-2 text-xs text-neutral-400">CIN: U63122TS2026PTC210753</p>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-neutral-200 pt-10">
            <div className="flex gap-8 text-sm">
              <Link href="/#about" className="text-neutral-600 hover:text-neutral-900">
                What we do
              </Link>
              <Link href="/#work" className="text-neutral-600 hover:text-neutral-900">
                Work
              </Link>
              <Link href="/#contact" className="text-neutral-600 hover:text-neutral-900">
                Contact us
              </Link>
            </div>
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Kavivas Tech Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
