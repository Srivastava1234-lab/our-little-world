"use client";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const start = async () => {
    try {
      await audioRef.current?.play();
      setPlaying(true);
    } catch (e) {
      console.error("Audio failed:", e);
    }
  };

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) start();
    else { a.pause(); setPlaying(false); }
  };

  // Start the music automatically when the candle is blown out
  useEffect(() => {
    window.addEventListener("cake-blown", start);
    return () => window.removeEventListener("cake-blown", start);
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/music/song.mp3" loop preload="auto" />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        style={{ position: "fixed", bottom: 16, right: 16, zIndex: 50 }}
      >
        {playing ? "🔊" : "🔇"}
      </button>
    </>
  );
}