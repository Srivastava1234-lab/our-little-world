"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** Path relative to the /public folder, e.g. "/music/song.mp3" */
  src?: string;
  className?: string;
};

export default function MusicPlayer({
  src = "/music/song.mp3",
  className = "music-button",
}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  const start = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      audio.volume = 0.6;
      await audio.play();
    } catch (e) {
      // Usually NotAllowedError (autoplay blocked) or a missing file
      console.error("Audio failed to play:", e);
    }
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) start();
    else audio.pause();
  };

  // Start the music automatically when the candle is blown out.
  // CakeIntro dispatches this event inside the click handler, so the
  // browser still counts it as a user gesture and allows playback.
  useEffect(() => {
    const onCakeBlown = () => {
      start();
    };
    window.addEventListener("cake-blown", onCakeBlown);
    return () => window.removeEventListener("cake-blown", onCakeBlown);
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        loop
        preload="auto"
        // Keep the button in sync with the real audio state
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => {
          setError(true);
          console.error(
            `Could not load "${src}". Make sure the file is inside the /public folder.`
          );
        }}
      />
      <button
        type="button"
        className={className}
        onClick={toggle}
        disabled={error}
        aria-label={playing ? "Pause music" : "Play music"}
        aria-pressed={playing}
      >
        {playing ? "♫" : "♪"}{" "}
        <span>{error ? "Song missing" : playing ? "Music on" : "Our song"}</span>
      </button>
    </>
  );
}