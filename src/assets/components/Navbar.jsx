import { useState, useRef } from "react";
import Clock from "./clock";
import { Volume2 } from "@/components/animate-ui/icons/volume-2";

function Navbar({ title = "ABOUT" }) {
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);

  const toggleSound = () => {
    if (muted) {
      audioRef.current.play();
      setMuted(false);
    } else {
      audioRef.current.pause();
      setMuted(true);
    }
  };

  return (
    <nav className="w-full overflow-hidden rounded-lg border border-white/10 bg-zinc-950/70 shadow-2xl shadow-black/30 backdrop-blur">
      <div className="flex h-12 min-w-0 items-center justify-between gap-3 px-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex shrink-0 items-center gap-2" aria-hidden="true">
            <span className="size-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="truncate font-mono text-xs font-semibold uppercase tracking-widest text-white sm:text-sm">
            {title}
          </span>
        </div>

        <span className="hidden min-w-0 truncate font-mono text-xs font-semibold tracking-widest text-blue-300 sm:block">
          MUNGUN-ERDENE @ PORTFOLIO
        </span>

        <div className="flex items-center gap-2">
          <Clock />
          <audio ref={audioRef} src="/audio/cover.mp3" loop autoPlay />
          <button
            onClick={toggleSound}
            className="bg-white/10 hover:bg-white/20 rounded-full px-3 py-1 transition-all"
          >
            <Volume2
              className={`w-4 h-4 ${muted ? "text-white/30" : "text-amber-400"}`}
              animateOnHover
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;