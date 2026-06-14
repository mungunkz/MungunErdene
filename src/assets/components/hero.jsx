import Navbar from "./Navbar";
import { useState } from "react";
import { User } from "@/components/animate-ui/icons/user";
import { Route } from "@/components/animate-ui/icons/route";
import { Terminal } from "@/components/animate-ui/icons/terminal";
import { PhoneCall } from "@/components/animate-ui/icons/phone-call";
import About from "./about";
import Links from "./links";
import Work from "./work";
import Contact from "./contact";

const menuItems = [
  { label: "ABOUT", value: "01", href: "#about", icon: User },
  { label: "LINKS", value: "02", href: "#links", icon: Route },
  { label: "WORK", value: "03", href: "#work", icon: Terminal },
  {
    label: "CONTACT",
    value: "04",
    href: "mailto:mungnuu@example.com",
    icon: PhoneCall,
  },
];

function Hero() {
  const [active, setActive] = useState(null);

  return (
    <>
      <section className="flex h-screen w-full flex-col justify-center px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col gap-6 rounded-lg border border-white/10 bg-zinc-950/55 backdrop-blur">
          <Navbar title="HOME" />

          <div className="flex flex-col items-center justify-center px-5 md:px-8 lg:px-10">
            <h1 className="max-w-3xl text-center text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              <span className="flex justify-center gap-2 text-green-600">
                <span>Hi</span>
                <span className="text-white">, I am</span>
              </span>

              <span className="block mt-2 text-amber-300">Mungun-Erdene.</span>
            </h1>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-emerald-300 pt-5">
              Developer · Ulaanbaatar, MN · New graduate
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Have a <span className="text-amber-200">Coffee</span> and check
              out my portfolio.
            </p>
          </div>

          <div className="grid grid-cols-2  gap-3 px-5 pb-5 md:grid-cols-4 md:px-8 md:pb-8 lg:px-10 lg:pb-10">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(item.label);
                  }}
                  className="group flex min-h- flex-col justify-between rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-0.5 hover:border-amber-300/50 hover:bg-white/[0.08]"
                >
                  <Icon
                    className="w-5 h-5 text-white/40 group-hover:text-amber-300 transition"
                    animateOnHover
                  />
                  <span className="font-mono text-sm font-semibold tracking-widest text-white/80 group-hover:text-amber-200">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {active === "ABOUT" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <About />
          </div>
        </div>
      )}
      {active === "LINKS" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Links />
          </div>
        </div>
      )}

      {active === "WORK" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Work />
          </div>
        </div>
      )}

      {active === "CONTACT" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Contact />
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
