import React, { useEffect, useRef, useState } from "react";

const LoadingScreen = ({ isExiting }) => {
  const texts = [
    'Hallo, Mira...',
    'Terkait dengan pembicaraan terakhir kita, gua mau ngomong sesuatu yang cukup panjang di sini.',
    'Sebelumnya, sorry kalau gua bikin pakai cara ini lagi. Semoga lu nggak bosen. 🙏🙏',
    'Sorry kalau gua baru ngomong ini sekarang, karena seminggu ini lagi bantu orang tua gua ngecat. 😄😄🙏🙏'
  ];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [textFade, setTextFade] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pauseRef = useRef(false);
  const timerRef = useRef();

  // Total duration: 15 seconds
  // Number of texts: texts.length
  // Each text duration (including fade):
  const totalDuration = 15000; // 15 seconds
  const fadeDuration = 600; // ms
  const perTextDuration = totalDuration / texts.length; // ms per text

  useEffect(() => {
    if (hidden) return;
    if (currentIdx >= texts.length - 1) {
      // After last text, wait, then hide and play music
      timerRef.current = setTimeout(() => {
        setHidden(true);
        // Play music when loading screen is complete
        let suara = new Audio('/Sound.mp3');
        suara.loop = true;
        suara.play().catch(error => {
          console.log("Autoplay was prevented:", error);
        });
      }, perTextDuration);
      return () => clearTimeout(timerRef.current);
    }
    if (paused) return;
    const visibleDuration = perTextDuration - fadeDuration;
    timerRef.current = setTimeout(() => {
      setTextFade(true);
      timerRef.current = setTimeout(() => {
        setCurrentIdx(idx => idx + 1);
        setTextFade(false);
      }, fadeDuration); // durasi fade out
    }, visibleDuration);
    return () => clearTimeout(timerRef.current);
  }, [currentIdx, texts.length, perTextDuration, fadeDuration, paused, hidden]);

  // Pause/resume handlers
  const handlePause = () => {
    setPaused(true);
    pauseRef.current = true;
    clearTimeout(timerRef.current);
  };
  const handleResume = () => {
    setPaused(false);
    pauseRef.current = false;
  };

  if (hidden) return null;
  
  return (
    <div
      onMouseDown={handlePause}
      onMouseUp={handleResume}
      onTouchStart={handlePause}
      onTouchEnd={handleResume}
      className="relative w-screen h-screen bg-linear-to-br from-secondary via-primary to-accent font-sans"
    >
      <div 
        className={`h-full flex flex-col justify-center items-center transition-all duration-500 ${
          isExiting ? 'opacity-0 -translate-y-12' : 'opacity-100 translate-y-0'
        }`}
      >

        {/* Main text */}
        <span 
          className={`text-xl font-bold text-text-primary text-center px-8 transition-opacity duration-400 z-10 ${
            textFade ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {texts[currentIdx]}
        </span>
        
        {/* Loading dots */}

      </div>
      
      {/* Bottom instruction */}
      <h1 className="absolute left-1/2 top-110 -translate-x-1/2 m-0 text-lg md:text-xl text-text-primary/70 font-medium z-10 px-4 text-center">
        tahan buat jeda
      </h1>
      
      {/* Optional: Progress indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-text-primary transition-all ease-linear"
          style={{ 
            width: `${((currentIdx + 1) / texts.length) * 100}%`,
            transitionDuration: paused ? '0s' : `${perTextDuration}ms`
          }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;