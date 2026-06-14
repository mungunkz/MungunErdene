import Clock from "./clock";

const skills = [
  {
    label: "HTML",
    color: "text-orange-400 border-orange-400/30 bg-orange-400/10",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
        <path d="M6 2l2.6 28L16 32l7.4-2L26 2H6zm17.4 8H11.8l.3 3.5h10.9l-1 11.2L16 26.8l-6-1.9-.4-4.6h3.4l.2 2.4 2.8.8 2.8-.8.3-3.5H9.4L8.5 10z"/>
      </svg>
    ),
  },
  {
    label: "CSS",
    color: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
        <path d="M6 2l2.6 28L16 32l7.4-2L26 2H6zm17.4 8H11.8l.3 3.5h10.9l-1 11.2L16 26.8l-6-1.9-.4-4.6h3.4l.2 2.4 2.8.8 2.8-.8.3-3.5H9.4L8.5 10z"/>
      </svg>
    ),
  },
  {
    label: "JavaScript",
    color: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
        <path d="M2 2h28v28H2V2zm15.6 22.4c.5.9 1.2 1.5 2.4 1.5 1 0 1.7-.5 1.7-1.2 0-.8-.7-1.1-1.8-1.6l-.6-.3c-1.8-.8-3-1.7-3-3.8 0-1.9 1.4-3.3 3.6-3.3 1.6 0 2.7.5 3.5 1.9l-1.9 1.2c-.4-.7-.9-1-1.6-1-.7 0-1.2.4-1.2 1 0 .7.4 1 1.5 1.5l.6.3c2.1.9 3.3 1.8 3.3 3.9 0 2.2-1.7 3.5-4 3.5-2.3 0-3.7-1.1-4.4-2.5l2-.8zm-8.3.2c.4.6.7 1.2 1.5 1.2.8 0 1.2-.3 1.2-1.4v-7.6h2.4v7.7c0 2.3-1.4 3.4-3.4 3.4-1.8 0-2.9-.9-3.4-2.1l1.7-1.2z"/>
      </svg>
    ),
  },
  {
    label: "React",
    color: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
    href: "https://react.dev",
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
        <path d="M16 13.1c-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9-1.3-2.9-2.9-2.9zm0-11.1c-2.1 0-3.8 2.4-4.8 6C8.7 9 7 10.4 7 12c0 1.6 1.7 3 4.2 4-1 3.6.3 6 2.8 6 .7 0 1.4-.2 2-.7.6.5 1.3.7 2 .7 2.5 0 3.8-2.4 2.8-6 2.5-1 4.2-2.4 4.2-4 0-1.6-1.7-3-4.2-4C19.8 4.4 18.1 2 16 2zm0 2c1.1 0 2.2 1.6 2.9 4.1-.9.1-1.9.2-2.9.2s-2-.1-2.9-.2C13.8 5.6 14.9 4 16 4zm-7 8c.4-.4 1.1-.8 1.9-1.2-.1.8-.1 1.6-.1 2.4 0 .6 0 1.2.1 1.7C9.9 14.4 9 13.7 9 12zm14 0c0 1.7-.9 2.4-1.9 2.9.1-.5.1-1.1.1-1.7 0-.8 0-1.6-.1-2.4.8.4 1.5.8 1.9 1.2zM16 8.3c1.1 0 2.1.1 3 .2.1.8.2 1.6.2 2.5 0 .9-.1 1.7-.2 2.5-.9.1-1.9.2-3 .2s-2.1-.1-3-.2c-.1-.8-.2-1.6-.2-2.5 0-.9.1-1.7.2-2.5.9-.1 1.9-.2 3-.2z"/>
      </svg>
    ),
  },
  {
    label: "Tailwind",
    color: "text-teal-400 border-teal-400/30 bg-teal-400/10",
    href: "https://tailwindcss.com",
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
        <path d="M16 6c-3.6 0-5.8 1.8-6.7 5.3.9-1.2 2-1.6 3.3-1.3.7.2 1.2.7 1.8 1.3.9 1 2 2.1 4.3 2.1 3.6 0 5.8-1.8 6.7-5.3-.9 1.2-2 1.6-3.3 1.3-.7-.2-1.2-.7-1.8-1.3C19.4 7.1 18.3 6 16 6zm-6.7 8c-3.6 0-5.8 1.8-6.7 5.3.9-1.2 2-1.6 3.3-1.3.7.2 1.2.7 1.8 1.3.9 1 2 2.1 4.3 2.1 3.6 0 5.8-1.8 6.7-5.3-.9 1.2-2 1.6-3.3 1.3-.7-.2-1.2-.7-1.8-1.3C12.7 15.1 11.6 14 9.3 14z"/>
      </svg>
    ),
  },
  {
    label: "Git",
    color: "text-red-400 border-red-400/30 bg-red-400/10",
    href: "https://git-scm.com",
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
        <path d="M30.1 14.6L17.4 1.9c-.8-.8-2.1-.8-2.9 0l-2.9 2.9 3.7 3.7c.8-.3 1.8-.1 2.5.6.7.7.9 1.7.6 2.5l3.5 3.5c.8-.3 1.8-.1 2.5.6 1 1 1 2.5 0 3.5s-2.5 1-3.5 0c-.7-.7-.9-1.8-.5-2.6l-3.3-3.3v8.7c.2.1.5.3.7.5 1 1 1 2.5 0 3.5s-2.5 1-3.5 0-1-2.5 0-3.5c.2-.2.5-.4.8-.5v-8.8c-.3-.1-.6-.3-.8-.5-.7-.7-.9-1.8-.5-2.6L10 7.3 1.9 15.4c-.8.8-.8 2.1 0 2.9l12.7 12.7c.8.8 2.1.8 2.9 0l12.6-12.6c.8-.7.8-2 0-2.8z"/>
      </svg>
    ),
  },
  {
    label: "Vite",
    color: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    href: "https://vitejs.dev",
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
        <path d="M29.9 6.6L16.8 29.5c-.3.5-1 .5-1.3 0L2.1 6.6c-.3-.6.1-1.3.7-1.2l13.2 2.3c.1 0 .2 0 .3 0l12.9-2.3c.6-.1 1 .6.7 1.2z"/>
      </svg>
    ),
  },
];

function Work() {
  return (
    <section className="overflow-hidden rounded-lg border border-white/10 bg-zinc-950/60 backdrop-blur">
      <div className="flex h-12 min-w-0 items-center justify-between gap-3 px-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-white">WORK</span>
        </div>
        <span className="hidden font-mono text-xs font-semibold tracking-widest text-blue-300 sm:block">
          MUNGUN-ERDENE @ PORTFOLIO
        </span>
        <Clock />
      </div>

      <div className="p-5 sm:p-6">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-white/40">
          Эзэмшсэн технологиуд
        </p>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
          {skills.map((skill) => (
            <a
              key={skill.label}
              href={skill.href}
              target="_blank"
              rel="noreferrer"
              className={`flex flex-col items-center gap-2 rounded-xl border p-4 transition hover:-translate-y-0.5 cursor-pointer ${skill.color}`}
            >
              {skill.svg}
              <span className="font-mono text-xs font-semibold">{skill.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;