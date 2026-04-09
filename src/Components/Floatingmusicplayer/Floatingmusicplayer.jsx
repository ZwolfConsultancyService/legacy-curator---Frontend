import React, { useEffect, useRef, useState } from "react";

// 👇 FUTURE ME LOCAL MUSIC DALNE KE LIYE YAHAN PATH CHANGE KAREN
// Example: const MUSIC_URL = "/assets/my-local-song.mp3";
const MUSIC_URL = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3"; 

const FloatingMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoStarted, setAutoStarted] = useState(true); // Assuming true until autoplay fails
  const audioRef = useRef(null);

  // 1. Initialize Audio and try to Autoplay on load
  useEffect(() => {
    // Create audio object
    audioRef.current = new Audio(MUSIC_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4; // Volume set to 40%

    // Try to play immediately when component mounts
    const playPromise = audioRef.current.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay success!
          setIsPlaying(true);
          setAutoStarted(true);
        })
        .catch((error) => {
          // Browser blocked autoplay (user needs to interact first)
          console.log("Autoplay blocked by browser. Waiting for interaction.");
          setIsPlaying(false);
          setAutoStarted(false); // Show the "Tap anywhere" hint
        });
    }

    // Cleanup when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  // 2. Handle first interaction if Autoplay was blocked
  useEffect(() => {
    if (autoStarted) return;

    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setAutoStarted(true);
          })
          .catch(err => console.log("Playback error:", err));
      }
    };

    document.addEventListener("click", handleFirstInteraction, { once: true });
    document.addEventListener("scroll", handleFirstInteraction, { once: true });
    document.addEventListener("keydown", handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("scroll", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
    };
  }, [autoStarted, isPlaying]);

  // 3. Manual Play/Pause Toggle
  const toggleMusic = (e) => {
    e.stopPropagation(); // Click event ko document tak jane se roke (double trigger na ho)
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      setAutoStarted(true); // Hide hint if user clicked the button directly
    }
  };

  // UI Configurations
  const barDelays  = [0, 120, 240, 60, 180, 300, 90];
  const barHeights = ["h-2", "h-5", "h-3", "h-6", "h-2", "h-5", "h-3"];
  const barColors  = ["bg-[#36615A]", "bg-[#A7703D]", "bg-[#8B542B]", "bg-[#36615A]", "bg-[#A7703D]", "bg-[#36615A]", "bg-[#8B542B]"];

  return (
    <>
      <style>{`
        @keyframes ripplePulse {
          0%   { transform: scale(1);   opacity: 0.55; }
          100% { transform: scale(2.5); opacity: 0;    }
        }
        @keyframes ripplePulse2 {
          0%   { transform: scale(1);   opacity: 0.3; }
          100% { transform: scale(1.9); opacity: 0;   }
        }
        @keyframes barBounce {
          0%, 100% { transform: scaleY(1);   }
          50%      { transform: scaleY(0.2); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
        @keyframes pulse-hint {
          0%, 100% { transform: scale(1);    box-shadow: 0 4px 20px rgba(54,97,90,0.4); }
          50%      { transform: scale(1.07); box-shadow: 0 4px 28px rgba(54,97,90,0.65); }
        }
        .fmp-ripple-1  { animation: ripplePulse  2.4s ease-out infinite; }
        .fmp-ripple-2  { animation: ripplePulse2 2.4s ease-out infinite 1.2s; }
        .fmp-bar       { transform-origin: bottom; animation: barBounce 0.9s ease infinite; }
        .fmp-fade-up   { animation: fadeSlideUp 0.35s ease forwards; }
        .fmp-hint-pulse{ animation: pulse-hint 1.8s ease-in-out infinite; }
      `}</style>

      <div className="fixed bottom-7 right-7 z-[9999] flex flex-col items-end gap-2">

        {/* "Tap anywhere" hint — shown ONLY if browser blocks autoplay */}
        {!autoStarted && !isPlaying && (
          <div className="fmp-fade-up flex items-center gap-2 bg-[#F3F0E1] text-[#36615A] text-[11px] px-3.5 py-2 rounded-2xl shadow-md whitespace-nowrap border border-[#36615A]/25">
            <span className="text-sm">🎵</span>
            <span className="font-medium tracking-wide">Tap anywhere to play</span>
          </div>
        )}

        {/* Info card — shown when playing */}
        {isPlaying && (
          <div className="fmp-fade-up flex items-center gap-2.5 bg-[#36615A] text-[#F3F0E1] text-[11px] px-3.5 py-2.5 rounded-2xl shadow-xl whitespace-nowrap border border-[#A7703D]/40">
            <span className="text-sm leading-none">📖</span>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-[#F3F0E1] tracking-wide">Lo-fi Study</span>
              <span className="text-[#F3F0E1]/55 text-[10px]">ambient · focus · calm</span>
            </div>
          </div>
        )}

        {/* Visualizer bars */}
        {isPlaying && (
          <div className="fmp-fade-up flex items-end gap-[3px] h-7 mr-1">
            {barHeights.map((h, i) => (
              <div
                key={i}
                className={`w-[3px] rounded-full fmp-bar ${h} ${barColors[i]}`}
                style={{ animationDelay: `${barDelays[i]}ms` }}
              />
            ))}
          </div>
        )}

        {/* Floating button */}
        <div className="relative w-14 h-14 mt-1">

          {/* Ripple rings */}
          {isPlaying && (
            <>
              <span className="fmp-ripple-1 absolute inset-0 rounded-full border border-[#36615A]/60" />
              <span className="fmp-ripple-2 absolute inset-0 rounded-full border border-[#A7703D]/40" />
            </>
          )}

          {/* Book badge when paused */}
          {!isPlaying && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#8B542B] border border-[#A7703D]/70 flex items-center justify-center text-[9px] z-10">
              📖
            </span>
          )}

          <button
            onClick={toggleMusic}
            className={`relative w-14 h-14 rounded-full flex items-center justify-center focus:outline-none transition-all duration-200 hover:scale-110 active:scale-95 ${(!autoStarted && !isPlaying) ? "fmp-hint-pulse" : ""}`}
            style={{
              background: isPlaying
                ? "linear-gradient(135deg, #2a4a44 0%, #36615A 60%, #A7703D 100%)"
                : "linear-gradient(135deg, #36615A 0%, #8B542B 100%)",
              boxShadow: isPlaying
                ? "0 0 26px rgba(54,97,90,0.55), 0 4px 16px rgba(0,0,0,0.35)"
                : "0 4px 20px rgba(54,97,90,0.4)",
            }}
            aria-label={isPlaying ? "Pause lo-fi music" : "Play lo-fi study music"}
          >
            {isPlaying ? (
              // Pause Icon
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#F3F0E1">
                <rect x="6" y="4" width="4" height="16" rx="1.5" />
                <rect x="14" y="4" width="4" height="16" rx="1.5" />
              </svg>
            ) : (
              // Play Icon
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#F3F0E1" className="ml-1">
                <path d="M6 4l14 8-14 8V4z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingMusicPlayer;