import { useState } from "react";
import { Link } from "react-router-dom";

const Accordion = () => {
  const isiAccordion = [
    {
      id: 1,
      question: "I Respect Your Decision",
      answer:
        "Ketiga, gua respect keputusan lu buat ngurangin interaksi sama temen-temen SMP yang 'bermasalah'. Gua percaya lu ambil keputusan ini pasti mateng. Jadi, maaf kalau waktu itu gua ngingetin lu seakan-akan gua paling tau kondisinya.",
    },
    {
      id: 2,
      question: "Peranan Kita Sebagai Contoh Buat Adek-adek Kita",
      answer:
        "Keempat, satu alasan kenapa gua nggak mau kayak 'pacaran' gitu adalah karena kita punya peran sebagai anak tertua (gua sekaligus cucu tertua) di keluarga kita masing-masing. Kita sama-sama punya tanggung jawab moral, yaitu menjadi contoh buat adek-adek kita. Kalau kita kayak 'pacaran', ini bakal jadi dalil buat adek-adek kita untuk melakukan hal yang sama kelak, dan gua nggak mau itu terjadi. Gua pun yakin lu punya pemikiran yang sama.",
    },
  ];
  // Simpan id accordion yang terbuka, null jika tidak ada
  const [openId, setOpenId] = useState(null);

  const handleNext = () => {
    // Replace with your Link component navigation
    console.log("Navigate to /konfirm");
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-secondary via-primary to-accent py-16 px-4 font-sans relative">
      {/* Decorative Elements */}
      <div className="fixed top-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div
        className="fixed bottom-10 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="w-full max-w-2xl mx-auto z-10">
        <h2 className="text-xl md:text-3xl font-extrabold text-text-primary text-center drop-shadow-sm tracking-tight leading-relaxed">
          Ini beberapa poin yang mau gua tambahin, Mir...
        </h2>
        <p className="text-xl md:text-3xl font-extrabold text-text-primary mb-12 text-center">( Click tanda plus )</p>
        {isiAccordion.map((item) => (
          <>
            <div
              key={item.id}
              className="rounded-3xl shadow-2xl bg-white/90 backdrop-blur-md border-4 border-accent overflow-hidden hover:shadow-accent/30 transition-all duration-300"
            >
              <div
                className={`bg-linear-to-r from-text-primary to-blue-500 text-white px-8 py-6 cursor-pointer select-none flex justify-between items-center transition-all duration-300 hover:from-text-primary/90 hover:to-blue-500/90`}
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
              >
                <span className="font-bold text-lg md:text-2xl tracking-wide drop-shadow-lg flex items-center gap-2">
                  {item.question}
                </span>
                <span
                  className="text-3xl font-extrabold transition-transform duration-300 shrink-0"
                  style={{
                    transform:
                      openId === item.id ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  {openId === item.id ? "−" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 bg-white/95 ${
                  openId === item.id
                    ? "max-h-105 py-8 px-8 border-t-4 border-accent"
                    : "max-h-0 py-0 px-8"
                }`}
              >
                <p
                  className={`transition-all duration-500 ${
                    openId === item.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4"
                  } text-text-primary font-semibold text-base md:text-lg leading-relaxed`}
                >
                  {item.answer}
                </p>
              </div>
            </div>
            <br />
          </>
        ))}
      </div>

      <br />
      <br />

      <Link to="/konfirm">
        <button
          onClick={handleNext}
          className="bg-text-primary text-white text-xl font-bold py-4 px-12 rounded-full shadow-2xl hover:scale-110 hover:shadow-text-primary/50 transition-all duration-300 hover:bg-text-primary/90 z-10"
        >
          Next
        </button>
      </Link>
    </section>
  );
};

export default Accordion;
