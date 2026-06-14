import Clock from "./clock";

function About() {
  return (
    <section
      id="about"
      className="overflow-hidden rounded-lg border border-white/10 bg-zinc-950/60 backdrop-blur"
    >
      <nav className="w-full overflow-hidden rounded-lg border border-white/10 bg-zinc-950/70 shadow-2xl shadow-black/30 backdrop-blur">
        <div className="flex h-12 min-w-0 items-center justify-between gap-3 px-4">
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="flex shrink-0 items-center gap-2"
              aria-hidden="true"
            >
              <span className="size-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="truncate font-mono text-xs font-semibold uppercase tracking-widest text-white sm:text-sm">
              ABOUT
            </span>
          </div>
          <span className="hidden min-w-0 truncate font-mono text-xs font-semibold tracking-widest text-blue-300 sm:block">
            MUNGUN-ERDENE @ PORTFOLIO
          </span>
          <div className="flex items-center gap-2">
            <Clock />
          </div>
        </div>
      </nav>

      <div className="space-y-5 p-5 sm:p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-emerald-300">
          Жуниор frontend ажлын байранд боломжтой
        </p>

        <h2 className="text-2xl font-bold text-white">Миний тухай</h2>

        <p className="max-w-3xl leading-7 text-white/70">
          Намайг Мөнгөн-Эрдэнэ гэдэг одоо 21 тэй. 2026 оны шинэ төгсөгч байна аа. Fullstack
          хөгжүүлэгчээр төгссөн. Вэб сайт, frontend хөгжүүлэх, UI талдаа илүү
          сонирхолтой. Ажлын байрны туршлага бага тул сургаад зөвлөөд явбал
          цаашаа илүү хөгжөөд явах болно оо. Одоогийн эзэмшсэн технологи: React, Vite,
          Tailwind CSS болон орчин үеийн JavaScript бага зэрэг.
        </p>

        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-white/40">
            Боловсрол
          </p>
          <p className="text-white/70">
            М Смарт Академи - 2026, Хүмүүн Цогцолбор ахлах сургууль - 2021-2024
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-white/40">
            Хобби
          </p>
          <p className="text-white/70">
            Дуртай зүйлсээ хийж цагийг өнгөрүүлэх, дуу сонсох гэх мэт.
          </p>
        </div>

        
      </div>
    </section>
  );
}

export default About;
