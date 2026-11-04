"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Phase = "waiting" | "blown" | "done";

type Piece = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rot: number;
  vr: number;
  color: string;
};

const COLORS = ["#ff6b8b", "#ffd166", "#6ee7b7", "#7cc4ff", "#c4a1ff", "#ffffff"];

/**
 * Wrap your whole site with this. Visitors see a cake first; clicking the
 * candle blows it out, fires confetti, then reveals {children}.
 */
export default function CakeIntro({
  children,
  rememberVisit = false,
}: {
  children: React.ReactNode;
  /** If true, the intro only plays once per browser tab session. */
  rememberVisit?: boolean;
}) {
  const [phase, setPhase] = useState<Phase>("waiting");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  // Skip the intro if it was already seen this session.
  useEffect(() => {
    if (!rememberVisit) return;
    try {
      if (sessionStorage.getItem("cake-intro-seen")) {
        setPhase("done");
      }
    } catch {}
  }, [rememberVisit]);

  // Lock scroll while the intro is showing.
  useEffect(() => {
    document.body.style.overflow = phase === "done" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  const fireConfetti = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const pieces: Piece[] = [];
    const burst = (originX: number, count: number) => {
      for (let i = 0; i < count; i++) {
        const angle = (-Math.PI / 2) + (Math.random() - 0.5) * 1.6;
        const speed = 9 + Math.random() * 11;
        pieces.push({
          x: originX,
          y: h * 0.75,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 6 + Math.random() * 7,
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.4,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    };
    burst(w * 0.2, 110);
    burst(w * 0.5, 140);
    burst(w * 0.8, 110);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      let alive = 0;
      for (const p of pieces) {
        p.vy += 0.28; // gravity
        p.vx *= 0.992; // air drag
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        if (p.y < h + 40) alive++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        ctx.restore();
      }
      if (alive > 0) rafRef.current = requestAnimationFrame(tick);
      else ctx.clearRect(0, 0, w, h);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const blowOut = () => {
    if (phase !== "waiting") return;
    setPhase("blown");
    window.dispatchEvent(new Event("cake-blown"));
    fireConfetti();
    window.setTimeout(() => {
      setPhase("done");
      try {
        sessionStorage.setItem("cake-intro-seen", "1");
      } catch {}
    }, 3200);
  };

  const showIntro = phase !== "done";

  return (
    <>
      {children}

      {showIntro && (
        <div className={`cake-intro ${phase === "blown" ? "cake-intro--leaving" : ""}`}>
          <div className="cake-intro__stage">
            <p className="cake-intro__hint" aria-live="polite">
              {phase === "waiting" ? "Make a wish, then tap the candle" : "Your wish is on its way ✨"}
            </p>

            <svg viewBox="0 0 320 300" className="cake-intro__cake" role="img" aria-label="A cake with one candle">
              {/* plate */}
              <ellipse cx="160" cy="268" rx="140" ry="14" fill="#e9dfd6" />
              {/* bottom tier */}
              <rect x="40" y="188" width="240" height="76" rx="14" fill="#f7c6d0" />
              <path d="M40 206 q20 18 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 v-18 h-240z" fill="#fff6ef" />
              {/* top tier */}
              <rect x="80" y="130" width="160" height="62" rx="12" fill="#ffd9a8" />
              <path d="M80 146 q16 16 32 0 t32 0 t32 0 t32 0 t32 0 v-16 h-160z" fill="#fff6ef" />
              {/* decorations */}
              <circle cx="82" cy="236" r="6" fill="#ff6b8b" />
              <circle cx="130" cy="244" r="6" fill="#ffd166" />
              <circle cx="190" cy="236" r="6" fill="#7cc4ff" />
              <circle cx="238" cy="244" r="6" fill="#c4a1ff" />
              <circle cx="120" cy="168" r="5" fill="#ff6b8b" />
              <circle cx="200" cy="170" r="5" fill="#6ee7b7" />
              {/* candle */}
              <rect x="152" y="86" width="16" height="48" rx="3" fill="#8ecae6" />
              <path d="M152 100 l16 -8 M152 112 l16 -8 M152 124 l16 -8" stroke="#fff" strokeWidth="3" opacity=".7" />
              <rect x="158.5" y="78" width="3" height="10" rx="1.5" fill="#4a3b36" />

              {/* flame (hidden once blown out) */}
              {phase === "waiting" && (
                <g className="cake-intro__flame">
                  <ellipse cx="160" cy="62" rx="22" ry="30" fill="#ffd16644" />
                  <path d="M160 44 C150 58 148 68 160 78 C172 68 170 58 160 44Z" fill="#ffb703" />
                  <path d="M160 58 C155 66 155 72 160 77 C165 72 165 66 160 58Z" fill="#fff3b0" />
                </g>
              )}

              {/* smoke after blowing out */}
              {phase === "blown" && (
                <g className="cake-intro__smoke" fill="none" stroke="#b9b2ac" strokeWidth="3" strokeLinecap="round">
                  <path d="M160 74 q-8 -10 0 -18 t0 -18" />
                  <path d="M164 74 q8 -10 0 -16 t2 -16" opacity=".6" />
                </g>
              )}

              {/* big invisible tap target around the flame */}
              {phase === "waiting" && (
                <circle
                  cx="160"
                  cy="62"
                  r="44"
                  fill="transparent"
                  style={{ cursor: "pointer" }}
                  onClick={blowOut}
                />
              )}
            </svg>

            {phase === "waiting" && (
              <button type="button" className="cake-intro__button" onClick={blowOut}>
                Blow out the candle
              </button>
            )}
          </div>
        </div>
      )}

      {/* confetti sits above everything, never blocks clicks */}
      <canvas ref={canvasRef} className="cake-intro__confetti" aria-hidden="true" />

      <style>{`
        .cake-intro {
          position: fixed; inset: 0; z-index: 9998;
          display: grid; place-items: center;
          background: radial-gradient(circle at 50% 35%, #2b2140 0%, #14101f 70%);
          color: #fdf4ec;
          transition: opacity .8s ease .6s, visibility 0s linear 1.4s;
        }
        .cake-intro--leaving { opacity: 0; visibility: hidden; pointer-events: none; }
        .cake-intro__stage {
          display: flex; flex-direction: column; align-items: center; gap: 1.25rem;
          padding: 1.5rem; text-align: center;
        }
        .cake-intro__hint { font-size: 1.15rem; margin: 0; min-height: 1.6em; }
        .cake-intro__cake { width: min(78vw, 340px); height: auto; overflow: visible; }
        .cake-intro__flame {
          transform-origin: 160px 78px;
          animation: cake-flicker 0.7s ease-in-out infinite alternate;
        }
        .cake-intro__smoke { animation: cake-smoke 2.2s ease-out forwards; }
        .cake-intro__button {
          font: inherit; font-size: 1rem; cursor: pointer;
          padding: .8rem 1.6rem; border-radius: 999px; border: 0;
          background: #ffd166; color: #2b2140; font-weight: 600;
        }
        .cake-intro__button:hover { background: #ffdf8f; }
        .cake-intro__button:focus-visible,
        .cake-intro__cake:focus-visible { outline: 3px solid #fff; outline-offset: 3px; }
        .cake-intro__confetti {
          position: fixed; inset: 0; width: 100vw; height: 100vh;
          z-index: 9999; pointer-events: none;
        }
        @keyframes cake-flicker {
          from { transform: scale(1) rotate(-2deg); }
          to   { transform: scale(1.06, 1.12) rotate(2deg); }
        }
        @keyframes cake-smoke {
          from { opacity: .9; transform: translateY(0); }
          to   { opacity: 0;  transform: translateY(-26px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .cake-intro__flame, .cake-intro__smoke { animation: none; }
          .cake-intro { transition-duration: .01s; }
        }
      `}</style>
    </>
  );
}
