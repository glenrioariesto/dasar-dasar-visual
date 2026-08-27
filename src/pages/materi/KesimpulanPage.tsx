import React, { useState } from 'react';
import { playClick, playSynthesizerNote } from '../../utils/audio';
import { ArrowLeft, ArrowRight, Sparkles, CheckCircle2, Award } from 'lucide-react';
import logoJenama from '../../assets/logo-jenama-primer.png';
import gambarBackground from '../../assets/gambar-background.webp';
import roboHappyImg from '../../assets/images/page_11_image_9.png';
import { SummaryLab } from '../../components/labs/SummaryLab';

interface KesimpulanPageProps {
  onBack: () => void;
}

export function KesimpulanPage({ onBack }: KesimpulanPageProps) {
  const [activeChecklist, setActiveChecklist] = useState<{
    warna: boolean;
    tipografi: boolean;
    ruang: boolean;
    keseimbangan: boolean;
  }>({
    warna: true,
    tipografi: true,
    ruang: true,
    keseimbangan: true
  });

  const [showDeepLab, setShowDeepLab] = useState<boolean>(false);

  const toggleCheck = (key: 'warna' | 'tipografi' | 'ruang' | 'keseimbangan') => {
    playClick();
    setActiveChecklist((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      const allActive = Object.values(next).every(Boolean);
      if (allActive) {
        playSynthesizerNote('success');
      }
      return next;
    });
  };

  const handleCariTahu = () => {
    playSynthesizerNote('unlock');
    setShowDeepLab(true);
  };

  const activeCount = Object.values(activeChecklist).filter(Boolean).length;

  return (
    <div
      id="kesimpulan-page"
      className="h-screen w-screen relative overflow-hidden flex flex-col justify-between select-none bg-white text-slate-900"
    >
      {/* ========================================================================= */}
      {/* LAYER 0 (z-0): GAMBAR BACKGROUND (Opacity 10% di belakang frame SVG)      */}
      {/* ========================================================================= */}
      <img
        id="kesimpulan-classroom-bg"
        src={gambarBackground}
        alt="Ruang Belajar Desain Visual"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none opacity-10"
      />

      {/* ========================================================================= */}
      {/* LAYER 1 (z-10): BACKGROUND VECTOR FRAME (background-judul.svg)            */}
      {/* ========================================================================= */}
      <svg
        id="kesimpulan-svg-frame"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none z-10 select-none"
      >
        <defs>
          <style>{`
            .cls-judul-yellow { fill: #f9db00; }
            .cls-judul-blue { fill: #005787; }
          `}</style>
        </defs>
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            <rect className="cls-judul-blue" x="0" width="1381.82" height="28.05" />
            <rect
              className="cls-judul-blue"
              x="-511.38"
              y="525.98"
              width="1050.81"
              height="28.05"
              transform="translate(554.02 525.98) rotate(90)"
            />
            <rect
              className="cls-judul-yellow"
              x="1373.71"
              y="525.98"
              width="1064.52"
              height="28.05"
              transform="translate(2445.9754 -1365.9757) rotate(90)"
            />
            <path
              className="cls-judul-blue"
              d="M1657.1,74.48h-233.57c-10.94,0-21.37-4.6-28.75-12.68L1338.3,0h318.8v74.48Z"
            />
            <path
              className="cls-judul-yellow"
              d="M1920,88.28h-276.83c-12.97,0-25.33-5.45-34.08-15.02L1542.14,0h377.86v88.28Z"
            />
            <rect
              className="cls-judul-yellow"
              x="538.18"
              y="1051.95"
              width="1381.82"
              height="28.05"
              transform="translate(2458.1785 2131.9511) rotate(-180)"
            />
            <path
              className="cls-judul-yellow"
              d="M262.9,1005.52h233.57c10.94,0,21.37,4.6,28.75,12.68l56.48,61.81h-318.8v-74.48Z"
            />
            <path
              className="cls-judul-blue"
              d="M0,991.72h276.83c12.97,0,25.33,5.45,34.08,15.02l66.94,73.26H0v-88.28Z"
            />
          </g>
        </g>
      </svg>

      {/* ========================================================================= */}
      {/* LAYER 2 (z-20): TOP HEADER (Logo Kemendikdasmen & Tombol Beranda)         */}
      {/* ========================================================================= */}
      <header
        id="kesimpulan-header"
        className="w-full flex items-center justify-between z-20 shrink-0 px-4 lg:px-10 2xl:px-14 pt-3 lg:pt-8 2xl:pt-12"
      >
        <div className="flex items-center gap-3">
          <img
            src={logoJenama}
            alt="Logo Kemendikdasmen"
            className="h-10 lg:h-20 2xl:h-26 w-auto object-contain drop-shadow-md transition-transform hover:scale-105"
          />
        </div>

        {/* Back to Splash button */}
        <button
          type="button"
          onClick={() => {
            playClick();
            onBack();
          }}
          className="group rounded-xl lg:rounded-2xl px-6 lg:px-11 2xl:px-14 py-2.5 lg:py-3.5 2xl:py-4 border-2 lg:border-3 border-[#004760] bg-white hover:bg-sky-50 text-[#004760] shadow-[3px_3px_0px_#00354c] lg:shadow-[4px_4px_0px_#00354c] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#00354c] font-serif font-black text-xs sm:text-sm lg:text-base 2xl:text-lg flex items-center gap-2 lg:gap-2.5 transition-all cursor-pointer select-none"
        >
          <ArrowLeft className="w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 transition-transform group-hover:-translate-x-1" />
          <span>Beranda</span>
        </button>
      </header>

      {/* ========================================================================= */}
      {/* LAYER 2 (z-20): MAIN CONTENT (Split: Kiri 4 Pilar, Kanan Materi)         */}
      {/* Layout Konsisten 2-Kolom Berdampingan Seperti Desktop                      */}
      {/* ========================================================================= */}
      <main
        id="kesimpulan-main-content"
        className="z-20 flex-1 min-h-0 h-full w-full flex items-center justify-center px-4 lg:px-16 2xl:px-20 py-2 overflow-hidden max-w-7xl 2xl:max-w-[1600px] mx-auto"
      >
        <div className="grid grid-cols-12 gap-4 lg:gap-12 2xl:gap-16 items-center w-full h-full max-h-full my-auto">
          {/* ===================================================================== */}
          {/* SISI KIRI: 4 PILAR DESAIN INTERAKTIF (col-span-6)                     */}
          {/* ===================================================================== */}
          <div
            id="kesimpulan-left-pillars"
            className="col-span-6 flex flex-col items-center justify-center h-full relative"
          >
            <div className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-md bg-white rounded-3xl border-3 border-[#004760] shadow-[6px_6px_0px_#00354c] p-3 sm:p-4 lg:p-6 flex flex-col justify-between gap-3 lg:gap-4">
              {/* Header Card */}
              <div className="flex items-center justify-between border-b-2 border-[#004760] pb-2">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#00a1db]" />
                  <span className="font-black text-sm text-[#004760]">
                    4 Pilar Desain Visual Harmonis
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-xs font-black bg-[#f9db00] text-[#004760] border border-[#004760]">
                  {activeCount}/4 Aktif
                </span>
              </div>

              {/* 4 Interactive Toggle Buttons */}
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                {[
                  { key: 'warna', label: '1. Warna', sub: 'Harmonis & Terarah', icon: '🎨', color: 'border-orange-500 bg-orange-50' },
                  { key: 'tipografi', label: '2. Tipografi', sub: 'Jernih & Berhirarki', icon: '✍️', color: 'border-blue-500 bg-blue-50' },
                  { key: 'ruang', label: '3. Ruang Kosong', sub: 'Lega & Bernapas', icon: '🔲', color: 'border-emerald-500 bg-emerald-50' },
                  { key: 'keseimbangan', label: '4. Keseimbangan', sub: 'Bobot Proporsional', icon: '⚖️', color: 'border-amber-500 bg-amber-50' }
                ].map((item) => {
                  const isChecked = activeChecklist[item.key as keyof typeof activeChecklist];
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => toggleCheck(item.key as keyof typeof activeChecklist)}
                      className={`p-2 sm:p-2.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-start text-left relative ${
                        isChecked
                          ? `${item.color} border-[#004760] shadow-[3px_3px_0px_#00354c]`
                          : 'border-slate-300 bg-slate-100 opacity-60'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className="text-lg sm:text-xl">{item.icon}</span>
                        {isChecked && (
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                        )}
                      </div>
                      <span className="font-black text-xs sm:text-sm text-slate-900 leading-tight">
                        {item.label}
                      </span>
                      <span className="text-[10px] text-slate-600 leading-tight">
                        {item.sub}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Status Outcome Banner */}
              <div className="bg-[#FAF8F5] border-2 border-[#004760] rounded-xl p-2 sm:p-2.5 flex items-center gap-2.5 sm:gap-3">
                <img
                  src={roboHappyImg}
                  alt="Robo Desainer"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain shrink-0 drop-shadow-xs"
                />
                <div className="flex-1 text-left">
                  <span className="text-xs font-black text-[#004760] block">
                    {activeCount === 4 ? '🎉 Karya Visual Sempurna!' : '⚙️ Perpaduan Belum Lengkap'}
                  </span>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 leading-tight">
                    {activeCount === 4
                      ? 'Seluruh prinsip saling menguatkan, menghasilkan poster yang memikat dan berkelas!'
                      : 'Aktifkan seluruh 4 pilar di atas untuk mewujudkan desain yang harmonis.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* SISI KANAN: JUDUL KESIMPULAN + DESKRIPSI + TOMBOL CARI TAHU           */}
          {/* ===================================================================== */}
          <div
            id="kesimpulan-right-content"
            className="col-span-6 flex flex-col justify-center items-center text-center h-full pl-0 lg:pl-4 my-auto"
          >
            {/* 1. Judul Grafis 3D KESIMPULAN DESAIN */}
            <div className="w-full flex justify-center mb-2 lg:mb-3 transition-transform duration-300 hover:scale-[1.02]">
              <div className="bg-[#005787] text-white border-2 lg:border-3 border-[#004760] rounded-2xl px-4 sm:px-6 lg:px-8 py-2 sm:py-3 shadow-[4px_4px_0px_#f9db00] lg:shadow-[6px_6px_0px_#f9db00]">
                <h2 className="font-serif font-black text-xl sm:text-2xl lg:text-4xl uppercase tracking-wider text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                  Kesimpulan Desain
                </h2>
                <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-[#f9db00] tracking-widest uppercase block mt-0.5">
                  Prinsip Desain Visual Terpadu
                </span>
              </div>
            </div>

            {/* 2. Paragraf Deskripsi */}
            <p className="text-xs sm:text-sm lg:text-[15px] 2xl:text-base text-slate-700 leading-relaxed font-medium mb-3 lg:mb-5 max-w-xl 2xl:max-w-2xl text-justify">
              Desain visual yang efektif dan berdaya guna tercipta ketika seluruh prinsip dasar saling bersinergi: harmoni warna yang selaras dan terarah, tipografi yang tegas dan mudah dibaca, ruang kosong yang memberi kenyamanan bernapas, serta keseimbangan bobot visual yang kokoh. Satukan seluruh prinsip ini untuk menghasilkan karya komunikasi visual yang menginspirasi audiens.
            </p>

            {/* 3. Button Cari Tahu */}
            <div className="w-full flex justify-center">
              <button
                type="button"
                onClick={handleCariTahu}
                className="bg-[#00a1db] hover:bg-[#0bb2ef] text-white border-2 lg:border-3 border-[#004760] shadow-[3px_3px_0px_#00354c] lg:shadow-[4px_4px_0px_#00354c] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#00354c] rounded-xl lg:rounded-2xl px-6 lg:px-11 2xl:px-14 py-2.5 lg:py-3.5 2xl:py-4 font-serif font-black text-xs sm:text-sm lg:text-base 2xl:text-lg uppercase tracking-wider flex items-center gap-2 lg:gap-2.5 transition-all cursor-pointer group"
              >
                <span>Cari Tahu</span>
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ========================================================================= */}
      {/* MODAL LABORATORIUM EKSPERIMEN KESIMPULAN / SUMMARY LAB                    */}
      {/* ========================================================================= */}
      {showDeepLab && (
        <div
          id="kesimpulan-lab-modal"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 lg:p-6 animate-fadeIn"
        >
          <div className="bg-white rounded-3xl border-3 border-[#004760] shadow-[8px_8px_0px_#00354c] w-full max-w-4xl max-h-[90vh] h-[85vh] flex flex-col justify-between p-4 lg:p-6 relative overflow-hidden">
            {/* Header Modal */}
            <div className="flex items-center justify-between border-b-2 border-[#004760] pb-3 shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏆</span>
                <h3 className="font-serif font-black text-base lg:text-xl text-slate-900">
                  Laboratorium Poster Desain Efektif
                </h3>
              </div>

              <button
                type="button"
                onClick={() => {
                  playClick();
                  setShowDeepLab(false);
                }}
                className="px-3.5 py-1.5 rounded-xl border-2 border-[#004760] bg-white hover:bg-slate-100 text-xs font-bold shadow-[2px_2px_0px_#00354c] cursor-pointer"
              >
                Tutup Lab ✕
              </button>
            </div>

            {/* Isi Lab Interaktif: SummaryLab */}
            <div className="flex-1 overflow-y-auto my-3 pr-1">
              <SummaryLab />
            </div>

            {/* Footer Modal */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs text-slate-600 shrink-0">
              <span className="hidden lg:inline">💡 Aktifkan dan nonaktifkan elemen pada poster untuk merasakan dampak langsung dari setiap prinsip visual!</span>
              <button
                type="button"
                onClick={() => {
                  playClick();
                  setShowDeepLab(false);
                }}
                className="font-bold text-[#00a1db] hover:underline cursor-pointer ml-auto"
              >
                Kembali ke Kesimpulan →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Area Kosong */}
      <footer className="h-2 lg:h-4 z-20 shrink-0" />
    </div>
  );
}
