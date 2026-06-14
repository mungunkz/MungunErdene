import { useState } from "react";
import Clock from "./clock";

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("nwstarpgoodship@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="overflow-hidden rounded-lg border border-white/10 bg-zinc-950/60 backdrop-blur"
    >
      <div className="flex h-12 min-w-0 items-center justify-between gap-3 px-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-white">
            CONTACT
          </span>
        </div>
        <span className="hidden font-mono text-xs font-semibold tracking-widest text-blue-300 sm:block">
          MUNGUN-ERDENE @ PORTFOLIO
        </span>
        <Clock />
      </div>

      <div className="p-5 sm:p-6 space-y-4">
        <p className="font-mono text-xs uppercase tracking-widest text-white/40">
          Холбоо барих
        </p>

        <p className="text-white/70 leading-7">
          Ажлын санал, аль эсвэл асуух зүйл байвал доорх хаягаар холбоо барина
          уу.
        </p>

        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:border-amber-300/30">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-white/40">EMAIL</span>
            <span className="font-mono text-sm text-white/80">
              nwstarpgoodship@gmail.com
            </span>
          </div>
          <div className="flex gap-2">
            <a
              href="mailto:nwstarpgoodship@gmail.com"
              className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              Илгээх
            </a>
            <button
              onClick={copyEmail}
              className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              {copied ? "✓ Хуулсан" : "Хуулах"}
            </button>
          </div>
        </div>

        <a
          href="https://wa.me/97695297999"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:border-sky-500/30 hover:bg-sky-500/10"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-white/40">WHATSAPP</span>
            <span className="font-mono text-sm text-white/80">
              +976 9529 7999
            </span>
          </div>
          <span className="font-mono text-xs text-white/40">↗</span>
        </a>

        <a
          href="tel:+97695297999"
          className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:border-sky-500/30 hover:bg-sky-500/10"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-white/40">PHONE</span>
            <span className="font-mono text-sm text-white/80">
              +976 9529 7999
            </span>
          </div>
          <span className="font-mono text-xs text-white/40">↗</span>
        </a>

        {/* Мэдэгдэл */}
        <div className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] py-3">
          <span className="font-mono text-xs text-white/40">
            Цаг гаргаж үзсэнд баярлалаа.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
