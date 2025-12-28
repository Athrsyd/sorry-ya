import React from "react";
import { useState } from "react";

const Kofirm = () => {
  const [jumlahKlik, setJumlahKlik] = useState(1);
  const [pindah, setPindah] = useState({ top: "1%", right: "2%" });
  const [pesan, setPesan] = useState(false);

  const handleKlik = () => {
    if (jumlahKlik < 3) {
      setJumlahKlik(jumlahKlik + 1);
      setPindah(() => {
        const posisiBaru = {};
        posisiBaru.top = Math.floor(Math.random() * 300) + "%";
        posisiBaru.right = Math.floor(Math.random() * 50) + "%";
        return posisiBaru;
      });

      console.log(pindah);
      console.log(jumlahKlik);
    } else {
      setPesan(true);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center flex-col bg-secondary relative font-sans">
      {/* Blur overlay when pesan is true */}
      {pesan && (
        <div className="fixed top-0 left-0 w-full h-full bg-text-primary/20 backdrop-blur-sm z-30 transition-all duration-500"></div>
      )}
      
      {/* Main content, blurred if pesan is true */}
      <div 
        className={pesan ? "w-full h-full flex justify-center items-center flex-col blur-sm pointer-events-none select-none" : "w-full h-full flex justify-center items-center flex-col"} 
        style={{zIndex: pesan ? 20 : 10}}
      >
        <div className="konfirm-container p-8 md:p-12 rounded-3xl gap-8 bg-primary shadow-xl flex flex-col justify-center items-center max-w-md mx-4">
          
          {/* Space untuk stiker 1:1 */}
          <div className="w-48 h-48 bg-white/50 rounded-2xl flex justify-center items-center border-4 border-accent shadow-md">
            <div className="text-center">
              <video src="/stiker.mp4" autoPlay loop muted className="w-full h-full object-contain rounded-2xl" />
            </div>
          </div>

          <h1 className="font-bold text-2xl md:text-3xl text-text-primary text-center">
            Jadi... Apakah lu mau maafin gua?
          </h1>
          
          <div className="buttons flex flex-row gap-5 w-full justify-center items-center relative h-16">
            <a href="https://wa.me/6281328431026" target="_blank" rel="noreferrer">
              <button className="bg-accent text-text-primary text-lg font-semibold rounded-2xl py-3 px-8 hover:bg-accent/80 transition-all duration-200 shadow-md hover:shadow-lg">
                Ya
              </button>
            </a>
            <button
              onClick={handleKlik}
              className="bg-secondary text-text-primary text-lg font-semibold transition-all ease-in-out duration-200 rounded-2xl py-3 px-6 hover:scale-105 shadow-md"
              style={{
                top: pindah.top,
                right: pindah.right,
                position: 'relative'
              }}
            >
              Engga
            </button>
          </div>
        </div>
      </div>

      {/* Pesan modal */}
      {pesan && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-3xl z-40 shadow-2xl w-[90%] max-w-md mx-auto border-4 border-accent">
          <div className="text-center space-y-6">
            <h1 className="font-bold text-lg text-text-primary mb-4">
              Oke Mir... Gpp kalau lu masih engga mau maafin gua.  <br />
              Sorry kalau jadi ganggu waktu lu karena baca long text ini.  <br />
              Gua hargai keputusan lu.
            </h1>
            <p className="text-lg md:text-xl text-text-primary/80 font-medium">
              Tapi gua harap, lu bisa maafin gua😓😓😓
              <br />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="https://wa.me/6281328431026" target="_blank" rel="noreferrer">
                <button className="bg-accent text-text-primary text-lg font-semibold rounded-2xl py-3 px-8 hover:bg-accent/80 transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto">
                  Ya
                </button>
              </a>
              <a href="https://wa.me/6281328431026?text=Sorry%20Lif.%20gua%20belum%20bisa%20maafin%20lu" target="_blank" rel="noreferrer">
                <button className="bg-primary text-text-primary text-base font-semibold rounded-2xl py-3 px-6 hover:bg-primary/80 transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto">
                  masih engga
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kofirm;