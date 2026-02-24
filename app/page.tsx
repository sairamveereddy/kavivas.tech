import Link from "next/link";
import Image from "next/image";

const PRODUCTS = [
  {
    icon: "📋",
    badge: "Live",
    title: "JobNinjas.ai",
    desc: "AI-powered job application toolkit — tailored resumes, cover letters, and tracking to apply smarter.",
    url: "https://jobninjas.ai",
    metric: "AI SaaS",
  },
  {
    icon: "🚀",
    badge: "In Development",
    title: "NovaMaker.com",
    desc: "Builder-focused platform for creating and launching products faster with automation and AI workflows.",
    url: "https://novamaker.com",
    metric: "Builder Tools",
  },
  {
    icon: "🛡️",
    badge: "Live",
    title: "VSRInsurancePlus.com",
    desc: "Insurance solutions platform — information, onboarding, and service workflows designed for clarity and speed.",
    url: "https://vsrinsuranceplus.com",
    metric: "Services",
  },
  {
    icon: "✨",
    badge: "Coming Soon",
    title: "More products",
    desc: "We're building across multiple domains. New launches will appear here as they go live.",
    metric: "Portfolio",
  },
];

const STATS = [
  { value: "3+", label: "Live Products" },
  { value: "Multiple", label: "Domains" },
  { value: "AI-first", label: "Focus" },
  { value: "India", label: "HQ" },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none fixed inset-0 gradient-mesh" />
      <div className="pointer-events-none fixed inset-0 grid-overlay" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-500/15 blur-[100px]" />
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute right-1/4 top-2/3 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-5 backdrop-blur-xl bg-background/70">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/kavivas-logo.png"
            alt="Kavivas.Tech — fixing problems with ai"
            width={240}
            height={72}
            className="h-14 w-auto object-contain sm:h-16 md:h-[4.5rem]"
            priority
          />
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/#products" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Products
          </Link>
          <Link href="/#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="/#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pb-20 pt-20 text-center sm:pt-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Kavivas Tech Pvt Ltd · AI-first product studio
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          We build focused AI products.{" "}
          <span className="inline-block animate-gradient-text">
            Fixing real problems.
          </span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Kavivas is a product studio creating software across multiple domains — built for clarity, speed, and real-world outcomes.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/#products"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="relative">Explore Products</span>
            <span className="relative">→</span>
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
          >
            Contact
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 border-y border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center">
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Products</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A growing portfolio. Only real products — no dead links.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => {
            const Wrapper = product.url ? "a" : "div";
            const wrapperProps = product.url
              ? { href: product.url, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper
                key={product.title}
                {...wrapperProps}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 hover:bg-white/10 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-2xl">{product.icon}</span>
                  <span className="rounded-md bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
                    {product.badge}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{product.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{product.desc}</p>
                <div className="text-xs text-primary">{product.metric}</div>
                {product.url && (
                  <span className="mt-2 inline-block text-sm font-medium text-muted-foreground group-hover:text-foreground">
                    Visit →
                  </span>
                )}
              </Wrapper>
            );
          })}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Kavivas</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We focus on practical AI and automation — tools that reduce time wasted and improve outcomes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: "⚡", title: "Build fast", desc: "Ship small, iterate fast, keep quality high.", tags: ["Speed"] },
            { icon: "🎯", title: "Stay practical", desc: "No AI theater. Only features users actually need.", tags: ["Outcomes"] },
            { icon: "📦", title: "Portfolio mindset", desc: "Multiple bets, clean execution, consistent branding.", tags: ["Scale"] },
            { icon: "🤝", title: "Trust-first", desc: "Clear policies, real contact info, transparency.", tags: ["Trust"] },
          ].map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-primary/30 hover:bg-white/10 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 text-3xl">{feature.icon}</div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-white/10 px-2 py-0.5 text-xs text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Building practical AI products.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Partnerships, support, or business inquiries — reach out.
          </p>
          <div className="mt-10 flex flex-col gap-4 text-sm">
            <a href="mailto:veereddy@kavivas.tech" className="font-semibold text-primary hover:underline">
              veereddy@kavivas.tech
            </a>
            <a href="tel:+919912664800" className="text-muted-foreground hover:text-foreground">
              +91 99126 64800
            </a>
            <p className="mt-2 max-w-md mx-auto text-muted-foreground leading-relaxed">
              H. No. 7-2-31/sv/44/104, 1st Floor, Sv Colony, Rangareddy, Telangana, Hyderabad 500079, India
            </p>
            <p className="text-xs text-muted-foreground">CIN: U63122TS2026PTC210753</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 backdrop-blur-xl bg-background/50">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kavivas Tech Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/#products" className="hover:text-foreground">Products</Link>
            <Link href="/#about" className="hover:text-foreground">About</Link>
            <Link href="/#contact" className="hover:text-foreground">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
