
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
  const audioRef = useRef(null);
  const [canPlayMusic, setCanPlayMusic] = useState(false);

  // Total duration: 15 seconds
  // Number of texts: texts.length
  // Each text duration (including fade):
  const totalDuration = 15000; // 15 seconds
  const fadeDuration = 600; // ms
  const perTextDuration = totalDuration / texts.length; // ms per text

  useEffect(() => {
    if (hidden) return;
    if (currentIdx >= texts.length - 1) {
      // After last text, wait, then hide
      timerRef.current = setTimeout(() => {
        setHidden(true);
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


  // Load audio once
  useEffect(() => {
    audioRef.current = new window.Audio('/Sound (2).mp3');
    audioRef.current.load();
  }, []);

  // Setelah loading selesai, izinkan musik diputar saat interaksi user
  useEffect(() => {
    if (hidden) {
      setCanPlayMusic(true);
    }
  }, [hidden]);

  // Handler untuk play musik saat interaksi user setelah loading
  const handleUserInteraction = () => {
    if (canPlayMusic && audioRef.current) {
      audioRef.current.play();
      setCanPlayMusic(false); // hanya sekali
    }
  };

  if (hidden) {
    // Render div tak terlihat untuk menangkap klik/tap pertama setelah loading
    return (
      <div
        className="fixed inset-0 z-50"
        style={{ width: '100vw', height: '100vh', background: 'transparent' }}
        onClick={handleUserInteraction}
        onTouchEnd={handleUserInteraction}
      />
    );
  }

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
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-secondary/50 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Main text */}
        <span 
          className={`text-xl font-bold text-text-primary text-center px-8 transition-opacity duration-400 z-10 ${
            textFade ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {texts[currentIdx]}
        </span>
        
        {/* Loading dots */}
        {/* <div className="flex gap-2 mt-8 z-10">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-text-primary rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            ></div>
          ))}
        </div> */}
      </div>
      
      {/* Bottom instruction */}
      <h1 className="absolute left-1/2 bottom-8 -translate-x-1/2 m-0 text-lg md:text-xl text-text-primary/70 font-medium z-10 px-4 text-center">
        Tahan buat jeda
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