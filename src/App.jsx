import Hero from "./assets/components/hero";
import { useState, useRef } from "react";

function App() {
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">
      <video
        className="fixed inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>

      <div className="fixed inset-0 bg-black/65" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
        <audio ref={audioRef} src="/audio/cover.mp3" loop autoPlay />
        <Hero muted={muted} setMuted={setMuted} audioRef={audioRef} />
        {/* <div className="grid gap-4 pb-8 lg:grid-cols-[1.4fr_1fr]">
          <About />
          <Links />
        </div> */}
      </div>
    </main>
  );
}

export default App;
