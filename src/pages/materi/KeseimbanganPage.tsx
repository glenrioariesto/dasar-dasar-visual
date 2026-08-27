import React, { useState } from 'react';
import { playClick, playSynthesizerNote } from '../../utils/audio';
import { ArrowLeft, ArrowRight, Scale, Sparkles, CheckCircle2 } from 'lucide-react';
import logoJenama from '../../assets/logo-jenama-primer.png';
import gambarBackground from '../../assets/gambar-background.webp';
import judulKeseimbangan from '../../assets/judul-keseimbangan.webp';
import { BalanceLab } from '../../components/labs/BalanceLab';

interface KeseimbanganPageProps {
  onBack: () => void;
}

export function KeseimbanganPage({ onBack }: KeseimbanganPageProps) {
  const [balanceMode, setBalanceMode] = useState<'simetris' | 'asimetris' | 'timpang'>('simetris');
  const [showDeepLab, setShowDeepLab] = useState<boolean>(false);

  const handleSelectMode = (mode: 'simetris' | 'asimetris' | 'timpang') => {
    playClick();
    setBalanceMode(mode);
    if (mode === 'simetris' || mode === 'asimetris') {
      playSynthesizerNote('success');
    } else {
      playSynthesizerNote('fail');
    }
  };

  const handleCariTahu = () => {
    playSynthesizerNote('unlock');
    setShowDeepLab(true);
  };

  const modeData = {
    simetris: {
      title: 'Keseimbangan Simetris (Formal)',
      badge: 'Stabil & Tenang',
      badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-400',
      tilt: 0,
      leftItems: ['🏛️', '📐'],
      rightItems: ['🏛️', '📐'],
      description: 'Elemen di sisi kiri dan kanan identik dalam bobot dan posisi. Terkesan kokoh, resmi, dan abadi.'
    },
    asimetris: {
      title: 'Keseimbangan Asimetris (Dinamis)',
      badge: 'Modern & Hidup ⭐',
      badgeClass: 'bg-blue-100 text-blue-800 border-blue-400',
      tilt: 0,
      leftItems: ['🎨'],
      rightItems: ['⭐', '✨', '🏷️'],
      description: 'Elemen berbeda ukuran dan jenis, tetapi tetap seimbang melalui penataan ruang dan kontras visual.'
    },
    timpang: {
      title: 'Tidak Seimbang (Berat Sebelah)',
      badge: 'Canggung / Miring',
      badgeClass: 'bg-rose-100 text-rose-800 border-rose-400',
      tilt: 14,
      leftItems: ['🧱', '🧱', '🧱'],
      rightItems: ['🍂'],
      description: 'Satu sisi terlalu padat sehingga karya visual tampak jatuh dan membingungkan arah pandang.'
    }
  }[balanceMode];

  return (
    <div
      id="keseimbangan-page"
      className="h-screen w-screen relative overflow-hidden flex flex-col justify-between select-none bg-white text-slate-900"
    >
      {/* ========================================================================= */}
      {/* LAYER 0 (z-0): GAMBAR BACKGROUND (Opacity 10% di belakang frame SVG)      */}
      {/* ========================================================================= */}
      <img
        id="keseimbangan-classroom-bg"
        src={gambarBackground}
        alt="Ruang Belajar Desain Visual"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none opacity-10"
      />

      {/* ========================================================================= */}
      {/* LAYER 1 (z-10): BACKGROUND VECTOR FRAME (background-judul.svg)            */}
      {/* ========================================================================= */}
      <svg
        id="keseimbangan-svg-frame"
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
        id="keseimbangan-header"
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
      {/* LAYER 2 (z-20): MAIN CONTENT (Split: Kiri Balance Scale, Kanan Materi)    */}
      {/* Layout Konsisten 2-Kolom Berdampingan Seperti Desktop                      */}
      {/* ========================================================================= */}
      <main
        id="keseimbangan-main-content"
        className="z-20 flex-1 min-h-0 h-full w-full flex items-center justify-center px-4 lg:px-16 2xl:px-20 py-2 overflow-hidden max-w-7xl 2xl:max-w-[1600px] mx-auto"
      >
        <div className="grid grid-cols-12 gap-4 lg:gap-12 2xl:gap-16 items-center w-full h-full max-h-full my-auto">
          {/* ===================================================================== */}
          {/* SISI KIRI: TIMBANGAN VISUAL BOBOT INTERAKTIF (col-span-6)             */}
          {/* ===================================================================== */}
          <div
            id="keseimbangan-left-scale"
            className="col-span-6 flex flex-col items-center justify-center h-full relative"
          >
            <div className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-md bg-white rounded-3xl border-3 border-[#004760] shadow-[6px_6px_0px_#00354c] p-3 sm:p-4 lg:p-6 flex flex-col justify-between gap-3 lg:gap-4">
              {/* Mode Toggle Buttons */}
              <div className="flex items-center justify-between gap-1.5 bg-slate-100 p-1.5 rounded-2xl border-2 border-[#004760]">
                {(['simetris', 'asimetris', 'timpang'] as const).map((m) => {
                  const isActive = balanceMode === m;
                  const label = m === 'simetris' ? 'Simetris' : m === 'asimetris' ? 'Asimetris' : 'Timpang';
                  return (
                    <button
                      key={m}
                      type="button"
                      onClick={() => handleSelectMode(m)}
                      className={`flex-1 py-1.5 px-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#00a1db] text-white shadow-[2px_2px_0px_#00354c]'
                          : 'text-[#004760] hover:bg-slate-200'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Scale Canvas */}
              <div className="bg-[#FAF8F5] rounded-2xl border-2 border-[#004760] p-4 flex flex-col items-center justify-center min-h-[160px] sm:min-h-[190px] relative overflow-hidden">
                <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black border shadow-xs transition-all bg-[#f9db00] text-[#004760] border-[#004760]">
                  {modeData.badge}
                </div>

                {/* Animated Balance Beam */}
                <div
                  className="w-full max-w-[280px] sm:max-w-[320px] flex flex-col items-center transition-transform duration-500 ease-out"
                  style={{ transform: `rotate(${modeData.tilt}deg)` }}
                >
                  {/* Balance Beam Bar */}
                  <div className="w-full h-3 bg-[#004760] rounded-full relative flex items-center justify-between px-2">
                    {/* Left Pan */}
                    <div className="absolute left-2 top-3 flex flex-col items-center">
                      <div className="w-0.5 h-6 bg-slate-400" />
                      <div className="bg-white border-2 border-[#004760] rounded-xl px-2.5 py-1.5 shadow-xs flex items-center gap-1">
                        {modeData.leftItems.map((emoji, idx) => (
                          <span key={idx} className="text-xl sm:text-2xl">{emoji}</span>
                        ))}
                      </div>
                    </div>

                    {/* Center Fulcrum Pin */}
                    <div className="w-3 h-3 rounded-full bg-[#f9db00] border border-[#004760] mx-auto" />

                    {/* Right Pan */}
                    <div className="absolute right-2 top-3 flex flex-col items-center">
                      <div className="w-0.5 h-6 bg-slate-400" />
                      <div className="bg-white border-2 border-[#004760] rounded-xl px-2.5 py-1.5 shadow-xs flex items-center gap-1">
                        {modeData.rightItems.map((emoji, idx) => (
                          <span key={idx} className="text-xl sm:text-2xl">{emoji}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fulcrum Stand Triangle */}
                <div className="w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[32px] border-b-[#004760] mt-1" />
                <div className="w-16 h-2 bg-[#004760] rounded-full" />
              </div>

              {/* Status Note */}
              <div className="text-xs text-slate-600 px-1 flex items-center justify-between">
                <span className="font-black text-[#004760]">💡 {modeData.description}</span>
              </div>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* SISI KANAN: JUDUL-KESEIMBANGAN.WEBP + DESKRIPSI + TOMBOL CARI TAHU   */}
          {/* ===================================================================== */}
          <div
            id="keseimbangan-right-content"
            className="col-span-6 flex flex-col justify-center items-center text-center h-full pl-0 lg:pl-4 my-auto"
          >
            {/* 1. Judul Grafis 3D: judul-keseimbangan.webp */}
            <div className="w-full flex justify-center mb-2 lg:mb-3 transition-transform duration-300 hover:scale-[1.02]">
              <img
                src={judulKeseimbangan}
                alt="Keseimbangan"
                className="w-auto max-w-[190px] sm:max-w-[260px] lg:max-w-[380px] 2xl:max-w-[450px] max-h-[14vh] lg:max-h-[17vh] 2xl:max-h-[20vh] h-auto object-contain drop-shadow-[0_8px_16px_rgba(234,179,8,0.25)]"
              />
            </div>

            {/* 2. Paragraf Deskripsi */}
            <p className="text-xs sm:text-sm lg:text-[15px] 2xl:text-base text-slate-700 leading-relaxed font-medium mb-3 lg:mb-5 max-w-xl 2xl:max-w-2xl text-justify">
              Keseimbangan (visual balance) adalah prinsip pembagian bobot visual dari seluruh elemen desain seperti bentuk, warna, ukuran, dan teks dalam sebuah karya. Keseimbangan simetris menghadirkan kesan keteraturan, ketenangan, dan formalitas, sedangkan keseimbangan asimetris menawarkan kesan dinamis, modern, dan menarik perhatian tanpa membuat tampilan terasa berat sebelah.
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
      {/* MODAL LABORATORIUM EKSPERIMEN KESEIMBANGAN                                */}
      {/* ========================================================================= */}
      {showDeepLab && (
        <div
          id="keseimbangan-lab-modal"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 lg:p-6 animate-fadeIn"
        >
          <div className="bg-white rounded-3xl border-3 border-[#004760] shadow-[8px_8px_0px_#00354c] w-full max-w-4xl max-h-[90vh] h-[85vh] flex flex-col justify-between p-4 lg:p-6 relative overflow-hidden">
            {/* Header Modal */}
            <div className="flex items-center justify-between border-b-2 border-[#004760] pb-3 shrink-0">
              <div className="flex items-center gap-3">
                <img src={judulKeseimbangan} alt="Keseimbangan" className="h-7 lg:h-8 w-auto object-contain" />
                <h3 className="font-serif font-black text-base lg:text-xl text-slate-900">
                  Laboratorium Eksperimen Keseimbangan
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

            {/* Isi Lab Interaktif: BalanceLab */}
            <div className="flex-1 overflow-y-auto my-3 pr-1">
              <BalanceLab />
            </div>

            {/* Footer Modal */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs text-slate-600 shrink-0">
              <span className="hidden lg:inline">💡 Tambahkan elemen visual di sisi kiri dan kanan jungkat-jungkit agar bobotnya seimbang sempurna!</span>
              <button
                type="button"
                onClick={() => {
                  playClick();
                  setShowDeepLab(false);
                }}
                className="font-bold text-[#00a1db] hover:underline cursor-pointer ml-auto"
              >
                Kembali ke Pengertian Keseimbangan →
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
