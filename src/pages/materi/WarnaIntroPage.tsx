import React, { useState } from 'react';
import { playClick, playSynthesizerNote } from '../../utils/audio';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import logoJenama from '../../assets/logo-jenama-primer.png';
import gambarBackground from '../../assets/gambar-background.webp';
import judulWarna from '../../assets/judul-warna.webp';
import { ColorLab } from '../../components/labs/ColorLab';

interface WarnaIntroPageProps {
  onBack: () => void;
}

// 12 Warna Spektrum Pilihan User
const colorWheelHexes = [
  '#FFA500',
  '#DAFF00',
  '#5AFF00',
  '#00FF25',
  '#00FFA5',
  '#00DAFF',
  '#005AFF',
  '#2500FF',
  '#A500FF',
  '#FF00D9',
  '#FF005A',
  '#FF2500'
];

export function WarnaIntroPage({ onBack }: WarnaIntroPageProps) {
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const [showDeepLab, setShowDeepLab] = useState<boolean>(false);
  const activeHex = colorWheelHexes[selectedColorIndex];

  const handleSelectColor = (index: number) => {
    playClick();
    setSelectedColorIndex(index);
  };

  const handleCariTahu = () => {
    playSynthesizerNote('unlock');
    setShowDeepLab(true);
  };

  return (
    <div
      id="warna-intro-page"
      className="h-screen w-screen relative overflow-hidden flex flex-col justify-between select-none bg-white text-slate-900"
    >
      {/* ========================================================================= */}
      {/* LAYER 0 (z-0): GAMBAR BACKGROUND (Opacity 10% di belakang frame SVG)      */}
      {/* ========================================================================= */}
      <img
        id="warna-classroom-bg"
        src={gambarBackground}
        alt="Ruang Belajar Desain Visual"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none opacity-10"
      />

      {/* ========================================================================= */}
      {/* LAYER 1 (z-10): BACKGROUND VECTOR FRAME (background-judul.svg)            */}
      {/* ========================================================================= */}
      <svg
        id="warna-svg-frame"
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
      {/* LAYER 2 (z-20): TOP HEADER (Logo Kemendikdasmen & Tombol Kembali)         */}
      {/* ========================================================================= */}
      <header
        id="warna-header"
        className="w-full flex items-center justify-between z-20 shrink-0 px-6 sm:px-10 md:px-14 pt-3 sm:pt-5"
      >
        <div className="flex items-center gap-3">
          <img
            src={logoJenama}
            alt="Logo Kemendikdasmen"
            className="h-11 sm:h-14 md:h-16 w-auto object-contain drop-shadow-md"
          />
        </div>

        {/* Back to Splash button */}
        <button
          type="button"
          onClick={() => {
            playClick();
            onBack();
          }}
          className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl border-2 border-slate-900 bg-white hover:bg-slate-100 text-slate-900 text-xs sm:text-sm font-bold flex items-center gap-2 shadow-[3px_3px_0px_#0f172a] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Beranda</span>
        </button>
      </header>

      {/* ========================================================================= */}
      {/* LAYER 2 (z-20): MAIN CONTENT (Split: Kiri Color Wheel, Kanan Materi)       */}
      {/* ========================================================================= */}
      <main
        id="warna-main-content"
        className="z-20 flex-1 flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20 py-2 overflow-hidden w-full max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center w-full h-full max-h-[620px]">
          {/* ===================================================================== */}
          {/* SISI KIRI: COLOR WHEEL INTERAKTIF                                     */}
          {/* Outline kotak biru: #004760 | Tanpa Pop-up Badge                      */}
          {/* ===================================================================== */}
          <div
            id="warna-left-colorwheel"
            className="lg:col-span-6 flex flex-col items-center justify-center h-full relative"
          >
            {/* Color Wheel SVG Canvas */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-92 md:h-92 flex items-center justify-center">
              <svg
                viewBox="-160 -160 320 320"
                className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
              >
                {/* 12 Segmen Roda Warna (Outline #004760) */}
                {colorWheelHexes.map((hex, idx) => {
                  const anglePerSegment = 360 / 12; // 30 deg
                  const startAngle = idx * anglePerSegment - 105;
                  const endAngle = startAngle + anglePerSegment;

                  const startRad = (startAngle * Math.PI) / 180;
                  const endRad = (endAngle * Math.PI) / 180;

                  const rInner = 65;
                  const rOuter = selectedColorIndex === idx ? 148 : 138;

                  const x1 = rOuter * Math.cos(startRad);
                  const y1 = rOuter * Math.sin(startRad);
                  const x2 = rOuter * Math.cos(endRad);
                  const y2 = rOuter * Math.sin(endRad);

                  const x3 = rInner * Math.cos(endRad);
                  const y3 = rInner * Math.sin(endRad);
                  const x4 = rInner * Math.cos(startRad);
                  const y4 = rInner * Math.sin(startRad);

                  const pathData = `
                    M ${x1} ${y1}
                    A ${rOuter} ${rOuter} 0 0 1 ${x2} ${y2}
                    L ${x3} ${y3}
                    A ${rInner} ${rInner} 0 0 0 ${x4} ${y4}
                    Z
                  `;

                  const isSelected = selectedColorIndex === idx;

                  return (
                    <path
                      key={hex}
                      d={pathData}
                      fill={hex}
                      stroke="#004760"
                      strokeWidth={isSelected ? '3.5' : '2.5'}
                      className="transition-all duration-200 cursor-pointer hover:opacity-95"
                      style={{
                        transform: isSelected ? 'scale(1.03)' : 'scale(1)',
                        transformOrigin: '0px 0px'
                      }}
                      onClick={() => handleSelectColor(idx)}
                    />
                  );
                })}

              </svg>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* SISI KANAN: JUDUL-WARNA.WEBP (CENTER) + DESKRIPSI (JUSTIFY) + CARI TAHU */}
          {/* Outline kotak biru: #004760                                           */}
          {/* ===================================================================== */}
          <div
            id="warna-right-content"
            className="lg:col-span-6 flex flex-col justify-center items-center text-center pl-0 lg:pl-4"
          >
            {/* 1. Judul Grafis 3D: judul-warna.webp (CENTERED) */}
            <div className="w-full flex justify-center mb-3 transition-transform duration-300 hover:scale-[1.02]">
              <img
                src={judulWarna}
                alt="Warna"
                className="w-full max-w-[240px] sm:max-w-[300px] md:max-w-[360px] h-auto object-contain drop-shadow-[0_8px_16px_rgba(234,88,12,0.25)]"
              />
            </div>

            {/* 2. Paragraf Deskripsi (JUSTIFIED) */}
            <p className="text-xs sm:text-sm md:text-[15px] text-slate-700 leading-relaxed font-medium mb-6 max-w-xl text-justify">
              Warna adalah elemen visual yang digunakan untuk menciptakan suasana, menarik perhatian, dan memperkuat pesan dalam sebuah desain. Setiap warna dapat memberikan kesan yang berbeda, seperti biru yang terasa tenang, merah yang berani, atau hijau yang alami. Karena itu, pemilihan warna perlu disesuaikan dengan tujuan dan pesan yang ingin disampaikan agar desain lebih mudah dipahami dan memberikan kesan yang tepat kepada audiens.
            </p>

            {/* 3. Button Cari Tahu (CENTERED, Outline #004760) */}
            <div className="w-full flex justify-center">
              <button
                type="button"
                onClick={handleCariTahu}
                className="bg-[#00a1db] hover:bg-[#0bb2ef] text-white border-2 sm:border-3 border-[#004760] shadow-[4px_4px_0px_#00354c] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#00354c] rounded-2xl px-8 sm:px-10 py-3 font-serif font-black text-sm sm:text-base uppercase tracking-wider flex items-center gap-2.5 transition-all cursor-pointer group"
              >
                <span>Cari Tahu</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ========================================================================= */}
      {/* MODAL / DRAWER EKSPLORASI LAB WARNA (Saat tombol Cari Tahu diklik)        */}
      {/* ========================================================================= */}
      {showDeepLab && (
        <div
          id="warna-lab-modal"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
        >
          <div className="bg-white rounded-3xl border-3 border-[#004760] shadow-[8px_8px_0px_#00354c] w-full max-w-4xl h-[85vh] flex flex-col justify-between p-4 sm:p-6 relative overflow-hidden">
            {/* Header Modal */}
            <div className="flex items-center justify-between border-b-2 border-[#004760] pb-3">
              <div className="flex items-center gap-3">
                <img src={judulWarna} alt="Warna" className="h-8 w-auto object-contain" />
                <h3 className="font-serif font-black text-lg sm:text-xl text-slate-900">
                  Laboratorium Eksperimen Warna
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

            {/* Isi Lab Interaktif: ColorLab */}
            <div className="flex-1 overflow-hidden my-3">
              <ColorLab />
            </div>

            {/* Footer Modal */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs text-slate-600">
              <span>💡 Gunakan tombol pengubah suasana di atas untuk merasakan dampak emosi warna secara live!</span>
              <button
                type="button"
                onClick={() => {
                  playClick();
                  setShowDeepLab(false);
                }}
                className="font-bold text-[#00a1db] hover:underline cursor-pointer"
              >
                Kembali ke Pengertian Warna →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Area Kosong (Menjaga ruang bawah tetap rapi) */}
      <footer className="h-6 sm:h-8 z-20 shrink-0" />
    </div>
  );
}
