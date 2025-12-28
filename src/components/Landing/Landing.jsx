import React, { useEffect, useState } from "react";
import Intro from "../Intro/Intro.jsx";
import { Link } from "react-router-dom";

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNext = () => {
    // Replace with your navigation logic
    console.log("Navigate to accordion page");
  };

  return (
    <>
      <Intro />
      <div className="min-h-screen bg-linear-to-b from-secondary via-primary to-accent font-sans">
        {/* Hero Section */}
        <div
          className={`container mx-auto px-6 py-16 md:py-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary mb-6 leading-tight">
              Long text <br />
              <span className="text-sm font-light -pt-5">By : Alif Athaullah Rasyad</span>

            </h1>
            <div className="w-24 h-1 bg-text-primary mx-auto rounded-full"></div>
          </div>

          {/* Main Content Card */}
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border-4 border-accent">
            {/* Decorative Quote Icon */}
            <div className="text-6xl text-text-primary/30 mb-4">"</div>

            <div className="space-y-6 text-text-primary/80 text-base md:text-lg leading-relaxed font-semibold">
              <p className="first-letter:text-5xl first-letter:font-extrabold first-letter:text-text-primary first-letter:mr-2 first-letter:float-left font-bold">
                Pertama, gua mau minta maaf, Mir, soal ucapan gua waktu gua
                ngerespon chat lu tentang kumpul Antartika waktu itu. Gua minta
                maaf kalau omongan gua bikin lu merasa bersalah atas keputusan
                lu sendiri. Aseli, gua nggak bermaksud demikian. Waktu itu gua nggak
                paham tentang alasan lu kenapa bikin keputusan begitu, makanya
                gua ngomongnya begitu (ditambah lagi sama gua yang emang lagi ada
                masalah waktu itu...)
              </p>

              <p className="font-bold">
                Tapi setelah gua pikir-pikir lagi, Mir, gua yakin keputusan yang
                lu ambil ini pasti bukan tanpa sebab. Karena,
                Almira yang gua kenal itu orangnya baik, ramah, nggak sombong,
                lucu, dll. 😁😁😁 <br />
                Jadi, maafin gua yaa, apalagi kalau lu ngerasa gua nggak
                menghargai keputusan lu. 🙏🙏🙏
              </p>

              <p className="font-bold">
                Dan kalau lu mau ceritain tentang ada teman-teman SMP yang
                "bermasalah", gua nggak akan marah kok, Mir. Tapi mau lu cerita atau
                enggak, itu hak lu buat cerita, and I'll respect it.
              </p>
            </div>

            {/* Decorative Quote Close Icon */}
            <div className="text-6xl text-text-primary/30 text-right mt-4">
              "
            </div>
          </div>

          {/* Additional Sections */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Left Card */}
            <div className="bg-primary/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-accent hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">💭</div>
              <h3 className="text-2xl font-extrabold text-text-primary mb-4">
                Refleksi
              </h3>
              <p className="text-text-primary/90 leading-relaxed font-bold">
                Kedua, mengenai "konsekuensi" yang waktu itu gua bilang, mungkin
                seharusnya bukan itu diksi yang gua pakai.
                <br />
                <br />
                Justru seharusnya gua milih kata "tujuan", Mir. Kenapa?
                Karena... <br />
                Dari SMP kelas 9, kita sama-sama bikin kesepakatan, yang mungkin buat
                teman-teman sebaya kita dianggap aneh... Kita saling suka, tapi kita
                sepakat buat ngejauhin pacaran, ngejauhin kontak fisik, dll., yang
                dimana ini tuh bener-bener "asing" di zaman yang makin gila ini, Mir.
                Tapi tetep kita jalanin, karena kita tau kalau dasar dari
                kesepakatan ini mulia... Gua tau selama ini kita belum sempurna
                ngejalanin kesepakatan ini. Apalagi pas kita di kelas 9, dan ini
                kesempatan buat kita memperbaiki itu, Mir.
              </p>
              <p className="text-text-primary/90 leading-relaxed font-bold">
                <br />
                Mir, kadang gua juga suka mikirin cara kita biar bisa
                komunikasi selain lewat chat... Kayak kita janjian ketemu di
                tempat mana, terus kita ngobrol-ngobrol... Begitu lah, wkwk.
                <br />
                <br />
                Bukan sesuatu yang berat buat gua secara pribadi kalau gua
                menghabiskan waktu atau uang buat ketemuan berdua gitu.
                <br />
                <br />
                Tapi berat buat gua, Mir, kalau justru dengan kita ketemuan
                berdua gitu malah bikin kita berdua dosa. <br />
                Dan gua takut itu yang malah bikin kita hancur, Mir. Jangan
                sampe kita jadi dekat buat sementara waktu, tapi lama-lama Allah
                ngejauhin kita karena kita nggak berhasil dalam ujiannya. Dan gua
                yakin lu juga merasakan hal yang sama.
              </p>
            </div>

            <div className="bg-linear-to-br from-accent/70 via-primary/60 to-secondary/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-accent hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-2xl font-extrabold text-text-primary mb-4">
                Terakhir
              </h3>
              <p className="text-text-primary/90 leading-relaxed font-bold">
                Balik lagi, kita punya "tujuan".
                <br /><br />Saling suka, tapi nggak pacaran.
                Yaa, mungkin ini aneh di mata orang-orang yang nggak paham, ada yang
                bilang kita nggak serius, ada yang bilang sama aja kayak HTS, ada
                yang bilang aneh. Tapi, persetan lah omongan orang-orang itu. Gua
                berharap inilah yang bikin kita beda di mata Allah, Mir. 
                <br />
                <br />
                Gua
                yakin dari semua kesabaran yang kita tahan ini, Allah akan balas
                dengan buah yang manis. Dan sekarang tugas kita sebagai manusia
                cuma menjalankan apa yang ada di depan mata kita, yaitu
                menjaga hati, menjaga perasaan, dan menjaga diri kita dari
                hal-hal yang bisa ngerusak kita ini, Mir.
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link to="/accordion">
                <button
                  onClick={handleNext}
                  className="bg-text-primary text-white text-xl font-extrabold py-4 px-12 rounded-full shadow-2xl hover:scale-110 hover:shadow-text-primary/50 transition-all duration-300 hover:bg-text-primary/90"
                >
                  Next →
                </button>
              </Link>

              {/* Scroll Indicator */}
              {/* <div className="mt-12 flex flex-col items-center">
              <p className="text-text-primary/60 text-sm mb-2">
                Scroll untuk lanjut
              </p>
              <div className="w-6 h-10 border-2 border-text-primary/40 rounded-full flex justify-center">
                <div className="w-1.5 h-3 bg-text-primary/60 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div> */}
            </div>
          </div>

          {/* Decorative Elements */}
          {/* <div className="fixed top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="fixed top-1/2 right-20 w-24 h-24 bg-secondary/20 rounded-full blur-2xl pointer-events-none animate-pulse" style={{ animationDelay: '0.5s' }}></div> */}
        </div>
      </div>
    </>
  );
};

export default Landing;
