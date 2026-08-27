import React, { useState } from 'react';
import { playClick, playSynthesizerNote } from '../../utils/audio';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import logoJenama from '../../assets/logo-jenama-primer.png';
import { BackgroundFrame } from '../../components/BackgroundFrame';
import judulWarna from '../../assets/judul-warna.webp';

interface WarnaIntroPageProps {
  onBack: () => void;
  onCariTahu?: () => void;
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

export function WarnaIntroPage({ onBack, onCariTahu }: WarnaIntroPageProps) {
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const activeHex = colorWheelHexes[selectedColorIndex];

  const renderedColorSegments = [
    ...colorWheelHexes
      .map((hex, idx) => ({ hex, idx }))
      .filter(({ idx }) => idx !== selectedColorIndex),
    ...colorWheelHexes
      .map((hex, idx) => ({ hex, idx }))
      .filter(({ idx }) => idx === selectedColorIndex)
  ];

  const handleSelectColor = (index: number) => {
    playClick();
    setSelectedColorIndex(index);
  };

  const handleCariTahu = () => {
    playSynthesizerNote('unlock');
    if (onCariTahu) {
      onCariTahu();
    }
  };

  return (
    <div
      id="warna-intro-page"
      className="h-screen w-screen relative overflow-hidden flex flex-col justify-between select-none bg-white text-slate-900"
    >
      {/* LAYER 0 & 1: REUSABLE RESPONSIVE BACKGROUND & FRAME (assets/background-judul.svg) */}
      <BackgroundFrame idPrefix="warna" />

      {/* ========================================================================= */}
      {/* LAYER 2 (z-30): TOP HEADER (Logo Kemendikdasmen & Tombol Kembali)         */}
      {/* Position: Fixed di atas agar tidak memengaruhi tinggi & layout konten      */}
      {/* ========================================================================= */}
      <header
        id="warna-header"
        className="fixed top-0 left-0 right-0 w-full flex items-center justify-between z-30 px-3.5 sm:px-6 lg:px-12 2xl:px-16 pt-2 sm:pt-3.5 md:pt-8 lg:pt-9 2xl:pt-16 pointer-events-none"
      >
        <div id="warna-logo-container" className="flex items-center gap-1.5 sm:gap-3 pointer-events-auto md:translate-y-1.5 2xl:translate-y-3">
          <img
            id="warna-logo-img"
            src={logoJenama}
            alt="Logo Kemendikdasmen"
            className="h-7 sm:h-9 md:h-11 lg:h-18 2xl:h-24 w-auto object-contain drop-shadow-sm transition-transform hover:scale-105"
          />
        </div>

        {/* Back to Splash button */}
        <button
          id="warna-btn-back"
          type="button"
          onClick={() => {
            playClick();
            onBack();
          }}
          className="pointer-events-auto group rounded-md sm:rounded-xl lg:rounded-2xl px-2.5 sm:px-4 lg:px-6 py-1 sm:py-1.5 lg:py-2.5 border-1.5 sm:border-2 lg:border-3 border-[#004760] bg-white hover:bg-sky-50 text-[#004760] shadow-[1.5px_1.5px_0px_#00354c] sm:shadow-[3px_3px_0px_#00354c] lg:shadow-[4px_4px_0px_#00354c] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#00354c] font-serif font-black text-[9px] sm:text-xs lg:text-sm 2xl:text-base flex items-center gap-1 sm:gap-1.5 lg:gap-2 transition-all cursor-pointer select-none md:translate-y-1.5 2xl:translate-y-3"
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-transform group-hover:-translate-x-1" />
          <span>Beranda</span>
        </button>
      </header>

      {/* SPACER ATAS: Mempertahankan ruang vertikal agar konten tidak terdorong */}
      <div id="warna-header-spacer" className="w-full h-6 sm:h-8 md:h-16 lg:h-18 2xl:h-28 shrink-0 pointer-events-none" aria-hidden="true" />

      {/* ========================================================================= */}
      {/* LAYER 2 (z-20): MAIN CONTENT (Split: Kiri Color Wheel, Kanan Materi)       */}
      {/* Layout Konsisten 2-Kolom Berdampingan Seperti Desktop                      */}
      {/* ========================================================================= */}
      <main
        id="warna-main-content"
        className="z-20 flex-1 min-h-0 h-full w-full flex items-center justify-center pl-4 2xl:pl-6 pr-8 2xl:pr-10 pt-0 pb-1 -mt-2 lg:-mt-3 2xl:-mt-4 overflow-hidden max-w-7xl 2xl:max-w-[1600px] mx-auto"
      >
        <div className="grid grid-cols-12 gap-2 sm:gap-3 lg:gap-6 2xl:gap-8 items-center w-full h-full max-h-full my-auto -translate-x-4 sm:-translate-x-5 lg:-translate-x-4 2xl:-translate-x-6">
          {/* ===================================================================== */}
          {/* SISI KIRI: COLOR WHEEL INTERAKTIF (col-span-6)                        */}
          {/* ===================================================================== */}
          <div
            id="warna-left-colorwheel"
            className="col-span-6 flex flex-col items-center justify-center h-full w-full min-h-0 relative"
          >
            {/* Color Wheel SVG Canvas: Responsive berbasis Height (Height-First Scaling) */}
            <div
              className="relative flex items-center justify-center transition-all duration-300 mx-auto -translate-x-2 sm:-translate-x-3 lg:-translate-x-2 aspect-square"
              style={{
                height: 'min(60vh, 520px)',
                maxHeight: '90%',
                maxWidth: '100%',
                minHeight: '180px',
                aspectRatio: '1 / 1',
                width: 'auto'
              }}
            >
              <svg
                viewBox="-140 -140 280 280"
                className="w-full h-full overflow-visible drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
              >
                {/* 12 Segmen Roda Warna (Outline #004760) */}
                {renderedColorSegments.map(({ hex, idx }) => {
                  const anglePerSegment = 360 / 12; // 30 deg
                  const startAngle = idx * anglePerSegment - 105;
                  const endAngle = startAngle + anglePerSegment;

                  const startRad = (startAngle * Math.PI) / 180;
                  const endRad = (endAngle * Math.PI) / 180;

                  const rInner = 38;
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
                      stroke="#ffffff"
                      strokeWidth={isSelected ? '2.5' : '0'}
                      className={`${isSelected ? 'z-50' : 'z-0'} transition-all duration-200 cursor-pointer hover:opacity-95`}
                      style={{
                        transform: isSelected ? 'scale(1.1)' : 'scale(1)',
                        transformOrigin: '0px 0px',
                        position: 'relative',
                        zIndex: isSelected ? 10 : 0
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
          {/* Simetris lurus: Atas dengan colorwheel atas, Bawah dengan colorwheel   */}
          {/* ===================================================================== */}
          <div
            id="warna-right-content"
            className="col-span-6 flex flex-col items-center justify-center h-full w-full min-h-0 pl-0 lg:pl-2 my-auto"
          >
            {/* Container Presisi: Tinggi SAMA PERSIS dengan colorwheel (Height Bounds Match) */}
            <div
              className="w-full max-w-xl 2xl:max-w-2xl flex flex-col justify-between items-center text-center mx-auto py-1 lg:py-2 gap-2 lg:gap-3 2xl:gap-4 transition-all duration-300"
              style={{
                height: 'min(60vh, 520px)',
                maxHeight: '90%',
                minHeight: '180px'
              }}
            >
              {/* 1. Judul Grafis 3D: judul-warna.webp (SIMETRIS LURUS DENGAN COLORWHEEL ATAS) */}
              <div id="warna-title-wrapper" className="w-full flex justify-center items-start shrink-0 transition-transform duration-300 hover:scale-[1.02]">
                <img
                  id="warna-title-img"
                  src={judulWarna}
                  alt="Warna"
                  className="w-auto max-w-[190px] sm:max-w-[260px] lg:max-w-[380px] 2xl:max-w-[450px] max-h-[14vh] lg:max-h-[17vh] 2xl:max-h-[20vh] h-auto object-contain drop-shadow-[0_8px_16px_rgba(234,88,12,0.25)]"
                />
              </div>

              {/* 2. Paragraf Deskripsi (TENGAH / HARMONIS TANPA JARAK BERLEBIHAN) */}
              <div id="warna-desc-wrapper" className="w-full my-auto py-1 lg:py-2 flex items-center justify-center max-w-lg lg:max-w-xl 2xl:max-w-2xl">
                <p id="warna-description" className="text-[10px] md:text-xs lg:text-[15px] 2xl:text-lg text-[#00354c] leading-relaxed lg:leading-relaxed font-medium text-justify">
                  Warna adalah elemen visual yang digunakan untuk menciptakan suasana, menarik perhatian, dan memperkuat pesan dalam sebuah desain. Setiap warna dapat memberikan kesan yang berbeda, seperti biru yang terasa tenang, merah yang berani, atau hijau yang alami. Karena itu, pemilihan warna perlu disesuaikan dengan tujuan dan pesan yang ingin disampaikan agar desain lebih mudah dipahami dan memberikan kesan yang tepat kepada audiens.
                </p>
              </div>

              {/* 3. Button Cari Tahu (SIMETRIS LURUS DENGAN COLORWHEEL BAWAH) */}
              <div id="warna-btn-wrapper" className="w-full flex justify-center items-end shrink-0">
                <button
                  id="warna-btn-cari-tahu"
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
        </div>
      </main>

      {/* Footer Area Kosong (Menjaga ruang bawah tetap rapi) */}
      <footer className="h-2 lg:h-4 z-20 shrink-0" />
    </div>
  );
}
