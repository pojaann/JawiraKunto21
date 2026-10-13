export default function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-8 border-t border-border bg-background px-6 py-16 md:px-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-foreground/50">
            Contact
          </p>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Mari kolaborasi
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/70">
            Terbuka untuk proyek web, desain, dan kerja magang. Hubungi lewat
            Instagram, LinkedIn, atau lihat portofolio lengkap.
          </p>
        </div>
        <nav className="flex flex-col gap-3 text-sm font-medium">
          <a
            className="underline-offset-4 hover:underline"
            href="https://www.instagram.com/pojaann/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="underline-offset-4 hover:underline"
            href="https://www.linkedin.com/in/muhammad-fauzan-474207365"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="underline-offset-4 hover:underline"
            href="https://muhammad-fauzan.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portofolio
          </a>
        </nav>
      </div>
      <p className="mx-auto mt-12 max-w-5xl text-xs text-foreground/40">
        © {new Date().getFullYear()} Muhammad Fauzan
      </p>
    </footer>
  );
}
