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
  const [showButton, setShowButton] = useState(false);
  const pauseRef = useRef(false);
  const timerRef = useRef();

  // Total duration: 15 seconds
  const totalDuration = 17500;
  const fadeDuration = 500;
  const perTextDuration = totalDuration / texts.length;

  useEffect(() => {
    if (hidden) return;
    if (currentIdx >= texts.length - 1) {
      // After last text, show button
      timerRef.current = setTimeout(() => {
        setShowButton(true);
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
      }, fadeDuration);
    }, visibleDuration);
    return () => clearTimeout(timerRef.current);
  }, [currentIdx, texts.length, perTextDuration, fadeDuration, paused, hidden]);

  const handlePause = () => {
    setPaused(true);
    pauseRef.current = true;
    clearTimeout(timerRef.current);
  };

  const handleResume = () => {
    setPaused(false);
    pauseRef.current = false;
  };

  const handleMulai = () => {
    // Play music
    let suara = new Audio('/Sound.mp3');
    suara.loop = true;
    suara.play().catch(error => {
      console.log("Autoplay was prevented:", error);
    });
    
    // Hide loading screen
    setHidden(true);
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
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-secondary/50 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Main text */}
        {!showButton && (
          <>
            <span 
              className={`text-xl font-bold text-text-primary text-center px-8 transition-opacity duration-400 z-10 ${
                textFade ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {texts[currentIdx]}
            </span>
            
            {/* Loading dots */}
            <div className="flex gap-2 mt-8 z-10">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-text-primary rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                ></div>
              ))}
            </div>
          </>
        )}

        {/* Tombol Mulai - muncul setelah kalimat terakhir selesai */}
        {showButton && (
          <button
            onClick={handleMulai}
            className="bg-text-primary text-white text-2xl md:text-3xl font-bold py-5 px-16 rounded-full shadow-2xl hover:scale-110 hover:shadow-text-primary/50 transition-all duration-300 hover:bg-text-primary/90 z-10 animate-fade-in"
          >
            Mulai 
          </button>
        )}
      </div>
      
      {/* Bottom instruction - hide when button shows */}
      {!showButton && (
        <h1 className="absolute left-1/2 top-125 -translate-x-1/2 m-0 text-lg md:text-xl text-text-primary/70 font-medium z-10 px-4 text-center">
          tahan buat jeda
        </h1>
      )}
      
      {/* Progress indicator - hide when button shows */}
      {!showButton && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div 
            className="h-full bg-text-primary transition-all ease-linear"
            style={{ 
              width: `${((currentIdx + 1) / texts.length) * 100}%`,
              transitionDuration: paused ? '0s' : `${perTextDuration}ms`
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;