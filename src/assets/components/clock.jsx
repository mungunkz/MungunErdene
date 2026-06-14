import React, { useState, useEffect, useRef } from "react";
import { Clock2 } from "@/components/animate-ui/icons/clock-2";


function Clock() {
  const [time, setTime] = useState(new Date());
  const [muted, setMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");

  return (
    <div className="flex items-center gap-3">
      {/* Цаг */}
      <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
        <Clock2 className="text-amber-400 w-4 h-4" animateOnHover />
        <span className="text-white text-sm font-mono">
          {hours}:{minutes}
        </span>
      </div>

      
    </div>
  );
}

export default Clock;