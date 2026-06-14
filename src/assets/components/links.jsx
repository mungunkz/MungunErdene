import Clock from "./clock";

const links = [
  {
  label: "facebook",
  handle: "Mungun-erdene",
  href: "https://www.facebook.com/mungnrdne?mibextid=wwXIfr&rdid=ognWjvv1OhIPWCI0&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18nV2n72SY%2F%3Fmibextid%3DwwXIfr",
  color: "hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10",
  iconBg: "bg-white/10 group-hover:bg-[#1877F2]/20 group-hover:text-[#1877F2]",
  svg: (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
},
  {
    label: "github",
    handle: "@mungunerdene",
    href: "https://github.com/mungunkz",
    color: "hover:border-white/30 hover:bg-white/10",
    iconBg: "bg-white/10 group-hover:bg-white/20 group-hover:text-white",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    label: "telegram",
    handle: "@mungunkz",
    href: "https://t.me/mungunkz",
    color: "hover:border-sky-500/50 hover:bg-sky-500/10",
    iconBg: "bg-white/10 group-hover:bg-sky-500/20 group-hover:text-sky-400",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.820 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
  label: "instagram",
  handle: "@mungnuu",
  href: "https://www.instagram.com/_mungqn_erdene?igsh=MW1oYWpteHFyNHc3MA%3D%3D&utm_source=qr",
  hoverColor: "#E1306C",
  svg: (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="url(#ig-gradient)">
      <defs>
        <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F58529"/>
          <stop offset="50%" stopColor="#DD2A7B"/>
          <stop offset="100%" stopColor="#8134AF"/>
        </linearGradient>
      </defs>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  ),
}
];

function Links() {
  return (
    <section id="links" className="overflow-hidden rounded-lg border border-white/10 bg-zinc-950/60 backdrop-blur">
      <div className="flex h-12 min-w-0 items-center justify-between gap-3 px-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-white">LINKS</span>
        </div>
        <span className="hidden font-mono text-xs font-semibold tracking-widest text-blue-300 sm:block">
          MUNGUN-ERDENE @ PORTFOLIO
        </span>
        <Clock />
      </div>

      <div className="p-5 sm:p-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 ${link.color}`}
            >
              <div className={`rounded-2xl p-3 text-white transition-all duration-300 ${link.iconBg}`}>
                {link.svg}
              </div>
              <span className="font-mono text-sm font-bold text-white">{link.label}</span>
              <span className="font-mono text-xs text-white/40">{link.handle}</span>
            </a>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] py-3">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
          <span className="font-mono text-xs text-white/40">Each link opens in a new tab.</span>
        </div>
      </div>
    </section>
  );
}

export default Links;