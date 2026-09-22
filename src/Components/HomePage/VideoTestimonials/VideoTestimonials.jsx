import React, { useState, useEffect, useRef, useCallback } from "react";

import client01 from "../../../assets/videoimage/01.jpeg";
import client02 from "../../../assets/videoimage/02.jpeg";
import client03 from "../../../assets/videoimage/03.jpeg";
import client04 from "../../../assets/videoimage/04.jpeg";
import client05 from "../../../assets/videoimage/05.jpeg";
import client06 from "../../../assets/videoimage/06.jpeg";

const REELS = [
  {
    url: "https://www.instagram.com/reel/DXMuYP4jYnY/",
    name: "Client story 1",
    thumb: client01,
  },
  {
    url: "https://www.instagram.com/reel/DXRv9v-jzln/",
    name: "Client story 2",
    thumb: client02,
  },
  {
    url: "https://www.instagram.com/reel/DXeYjJvj_g1/?stkn=MXNrYWszbHM5Zjk0cQ==",
    name: "Client story 3",
    thumb: client03,
  },
  {
    url: "https://www.instagram.com/reel/DXmduWrDfHM/?stkn=bWxjZ2liMnN1czY5",
    name: "Client story 4",
    thumb: client04,
  },
  {
    url: "https://www.instagram.com/reel/DXwp5NBz-9D/?stkn=MWVxd2EybnE2ZjZjZA==",
    name: "Client story 5",
    thumb: client05,
  },
  {
    url: "https://www.instagram.com/reel/DZsEGNsPWZP/?stkn=OWJ3bG5lM3J4dTQx",
    name: "Client story 6",
    thumb: client06,
  },
];

// Duplicate the list so the marquee can loop seamlessly (2x is enough for a smooth infinite scroll)
const LOOP_REELS = [...REELS, ...REELS];

const CSS = `
  * { box-sizing: border-box; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 0px rgba(255,255,255,0.35); }
    50%       { box-shadow: 0 0 0 12px rgba(255,255,255,0.08); }
  }


  .lc-section { background: #ffffff; padding: 0 0 80px; position: relative; overflow: hidden; }
  @media (max-width: 600px) { .lc-section { padding: 0 0 40px; } }

  .lc-header { text-align: center; max-width: 560px; margin: 0 auto 48px; padding: 56px 28px 0; animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
  @media (max-width: 600px) { .lc-header { margin-bottom: 24px; padding: 40px 20px 0; } }

  /* ---- Continuous slider ---- */
  .lc-slider-outer { position: relative; width: 100%; }

  .lc-slider-viewport {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }
  .lc-slider-viewport::-webkit-scrollbar { display: none; }
  .lc-slider-track {
    display: flex;
    width: max-content;
    gap: 22px;
    padding: 4px 48px 16px;
  }
  @media (max-width: 600px) { .lc-slider-track { padding: 4px 40px 16px; } }

  .lc-nav-btn {
    position: absolute; top: 50%; transform: translateY(-50%);
    z-index: 5; width: 44px; height: 44px; border-radius: 50%;
    border: 1px solid rgba(139,105,20,0.25);
    background: rgba(254,252,248,0.95);
    box-shadow: 0 8px 24px rgba(100,80,40,0.18);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: background 0.2s, transform 0.2s;
  }
  .lc-nav-btn:hover { background: #fff; transform: translateY(-50%) scale(1.07); }
  .lc-nav-btn.prev { left: 6px; }
  .lc-nav-btn.next { right: 6px; }
  @media (max-width: 600px) {
    .lc-nav-btn { width: 36px; height: 36px; }
    .lc-nav-btn.prev { left: 2px; }
    .lc-nav-btn.next { right: 2px; }
  }

  .lc-slide {
    flex: 0 0 240px;
    width: 240px;
  }
  @media (max-width: 600px) {
    .lc-slide { flex-basis: 62vw; width: 62vw; max-width: 230px; }
    .lc-slider-track { gap: 14px; animation-duration: 30s; }
  }

  .lc-wrap {
    position: relative; cursor: pointer; border-radius: 16px; overflow: hidden;
    aspect-ratio: 9 / 15; background: #111;
    box-shadow: 0 8px 32px rgba(100,80,40,0.13), 0 1px 4px rgba(100,80,40,0.08);
    transition: transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease;
  }
  .lc-wrap:hover { transform: translateY(-6px) scale(1.012); box-shadow: 0 28px 60px rgba(100,80,40,0.22), 0 2px 8px rgba(100,80,40,0.10); }

  .lc-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.85s cubic-bezier(0.22,1,0.36,1); }
  .lc-wrap:hover .lc-img { transform: scale(1.06); }

  .lc-grad { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.0) 40%, rgba(10,6,2,0.78) 100%); }

  .lc-play-wrap { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
  .lc-play {
    width: 56px; height: 56px; border-radius: 50%;
    border: 1.5px solid rgba(255,255,255,0.8); background: rgba(255,255,255,0.18);
    backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center;
    transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease;
    animation: pulse 2.8s ease-in-out infinite; padding-left: 4px;
  }
  .lc-wrap:hover .lc-play { transform: scale(1.15); background: rgba(255,255,255,0.28); animation: none; box-shadow: 0 0 0 16px rgba(255,255,255,0.1); }

  /* Inline playing card (video shows right inside the slider, not a modal) */
  .lc-playing {
    position: relative; border-radius: 16px; overflow: hidden;
    background: #fefcf8; border: 1px solid #e0d4be;
    box-shadow: 0 8px 32px rgba(100,80,40,0.13);
    min-height: 100%;
  }
  .lc-playing-close {
    position: absolute; top: 8px; right: 8px; z-index: 3;
    width: 26px; height: 26px; border-radius: 50%; border: none; cursor: pointer;
    background: rgba(20,12,2,0.65); color: #fff; font-size: 15px; line-height: 1;
    display: flex; align-items: center; justify-content: center;
    backdrop-filter: blur(4px);
  }
  .lc-embed-body { padding: 8px; }
  .lc-embed-body iframe { border-radius: 8px !important; }
  .lc-embed-loading {
    font-family: 'Montserrat', sans-serif; font-size: 12px;
    color: #9b8360; text-align: center; padding: 60px 0;
  }
`;

// Instagram embed.js load + re-process helper
function useInstagramEmbed(trigger) {
  useEffect(() => {
    if (!trigger) return;

    const process = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    };

    const timer = setTimeout(process, 100);

    if (window.instgrm) {
      process();
      return () => clearTimeout(timer);
    }

    const existing = document.getElementById("instagram-embed-script");
    if (existing) {
      existing.addEventListener("load", process);
      return () => {
        clearTimeout(timer);
        existing.removeEventListener("load", process);
      };
    }

    const script = document.createElement("script");
    script.id = "instagram-embed-script";
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = process;
    document.body.appendChild(script);

    return () => clearTimeout(timer);
  }, [trigger]);
}

const InlineEmbed = ({ item, onClose }) => {
  useInstagramEmbed(item.url);

  return (
    <div className="lc-playing">
      <button className="lc-playing-close" onClick={onClose} aria-label="Close">
        ×
      </button>
      <div className="lc-embed-body">
        <blockquote
          key={item.url}
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink={item.url}
          data-instgrm-version="14"
          style={{
            margin: 0,
            width: "100%",
            background: "#FFF",
            border: 0,
            borderRadius: 3,
            boxShadow: "0 0 1px 0 rgba(0,0,0,0.5)",
            minWidth: "220px",
            padding: 0,
          }}
        >
          <div className="lc-embed-loading">Loading reel…</div>
        </blockquote>
      </div>
    </div>
  );
};

const Slide = ({ item, isPlaying, onPlay, onClose }) => {
  if (isPlaying) {
    return <InlineEmbed item={item} onClose={onClose} />;
  }
  return (
    <div className="lc-wrap" onClick={onPlay}>
      <img className="lc-img" src={item.thumb} alt={item.name} />
      <div className="lc-grad" />
      <div className="lc-play-wrap">
        <div className="lc-play">
          <svg viewBox="0 0 24 24" fill="#fff" width="22" height="22">
            <path d="M8 5.14v14l11-7-11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default function VideoTestimonials() {
  // track which slide index (in the doubled LOOP_REELS array) is currently playing
  const [playingIdx, setPlayingIdx] = useState(null);
  const viewportRef = useRef(null);
  const rafRef = useRef(null);
  const resumeTimer = useRef(null);
  const pausedRef = useRef(false);

  // Continuous auto-scroll loop (pixel-by-pixel), seamless because the list is duplicated
  useEffect(() => {
    const step = () => {
      const el = viewportRef.current;
      if (el && !pausedRef.current) {
        el.scrollLeft += 0.6;
        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const pause = useCallback(() => {
    clearTimeout(resumeTimer.current);
    pausedRef.current = true;
  }, []);

  const resume = useCallback((delay = 0) => {
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, delay);
  }, []);

  const handlePlay = (idx) => {
    setPlayingIdx(idx);
    pause();
  };

  const handleClose = () => {
    setPlayingIdx(null);
    resume(400);
  };

  const nudge = (dir) => {
    const el = viewportRef.current;
    if (!el) return;
    pause();
    const amount = (el.querySelector(".lc-slide")?.offsetWidth || 240) + 22;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
    resume(2500);
  };

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  return (
    <>
      <style>{CSS}</style>
      <section className="lc-section">
        <header className="lc-header">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "26px",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "0.5px",
                background: "linear-gradient(90deg,transparent,#c8a96e)",
              }}
            />
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                color: "#b8a07a",
                fontSize: "10px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
              }}
            >
              Legacy Curator
            </span>
            <div
              style={{
                flex: 1,
                height: "0.5px",
                background: "linear-gradient(90deg,#c8a96e,transparent)",
              }}
            />
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(26px, 4vw, 42px)",
              color: "#1e1408",
              margin: 0,
              lineHeight: 1.18,
            }}
          >
            Trusted by over
            <br />
            one million families
          </h2>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "16px",
              color: "#9b8360",
              marginTop: "14px",
              lineHeight: 1.6,
            }}
          >
            Real voices. Real stories. Preserved for generations.
          </p>
          <div
            style={{
              marginTop: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <div style={{ width: "32px", height: "0.5px", background: "#d4b87a" }} />
            <svg viewBox="0 0 20 20" fill="#c8a96e" width="12" height="12" opacity="0.75">
              <path d="M10 1l2.4 6.4H19l-5.3 3.9 2 6.5L10 14l-5.7 3.8 2-6.5L1 7.4h6.6z" />
            </svg>
            <div style={{ width: "32px", height: "0.5px", background: "#d4b87a" }} />
          </div>
        </header>

        <div className="lc-slider-outer">
          <button
            className="lc-nav-btn prev"
            onClick={() => nudge(-1)}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#5c4310" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div
            className="lc-slider-viewport"
            ref={viewportRef}
            onMouseEnter={pause}
            onMouseLeave={() => (playingIdx === null ? resume() : null)}
            onTouchStart={pause}
            onTouchEnd={() => (playingIdx === null ? resume(1500) : null)}
          >
            <div className="lc-slider-track">
              {LOOP_REELS.map((item, i) => (
                <div className="lc-slide" key={item.url + "-" + i}>
                  <Slide
                    item={item}
                    isPlaying={playingIdx === i}
                    onPlay={() => handlePlay(i)}
                    onClose={handleClose}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            className="lc-nav-btn next"
            onClick={() => nudge(1)}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#5c4310" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}