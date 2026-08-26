import React, { useState } from 'react';
import { MateriId } from '../../types';
import { allMateris } from '../../data/materiData';
import { playClick } from '../../utils/audio';
import {
  Palette,
  Type,
  Maximize2,
  Scale
} from 'lucide-react';
import logoJenama from '../../assets/logo-jenama-primer.png';
import gambarBackground from '../../assets/gambar-background.webp';
import judulAtas from '../../assets/Judul Atas.webp';
import judulBawah from '../../assets/Judul Bawah.webp';

interface SplashPageProps {
  onStartMateri: (id: MateriId) => void;
  completedMateri: Record<MateriId, boolean>;
}

function PosterIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Frame Lembar Poster */}
      <rect x="4" y="2.5" width="16" height="19" rx="2.5" />
      {/* Header Judul Poster */}
      <line x1="7.5" y1="6.5" x2="16.5" y2="6.5" strokeWidth="2.5" />
      {/* Grafis Visual Seni di Poster: Matahari & Bukit Visual */}
      <circle cx="8.5" cy="11" r="1.5" />
      <path d="m6 16.5 3.5-3.5a1 1 0 0 1 1.4 0l5.1 5.1" />
      {/* Teks Penutup Poster */}
      <line x1="7.5" y1="18.5" x2="12.5" y2="18.5" />
    </svg>
  );
}

export function SplashPage({
  onStartMateri,
  completedMateri
}: SplashPageProps) {
  const materiKeys: MateriId[] = ['warna', 'tipografi', 'ruang-kosong', 'keseimbangan', 'kesimpulan'];
  const [hoveredMateri, setHoveredMateri] = useState<MateriId | null>(null);

  const getMateriIcon = (id: MateriId) => {
    const iconClass = "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-13 lg:h-13 text-white transition-transform duration-200 group-hover:scale-110";
    switch (id) {
      case 'warna':
        return <Palette className={iconClass} />;
      case 'tipografi':
        return <Type className={iconClass} />;
      case 'ruang-kosong':
        return <Maximize2 className={iconClass} />;
      case 'keseimbangan':
        return <Scale className={iconClass} />;
      case 'kesimpulan':
        return <PosterIcon className={iconClass} />;
      default:
        return <Palette className={iconClass} />;
    }
  };

  const handleCardClick = (id: MateriId) => {
    playClick();
    onStartMateri(id);
  };

  return (
    <div
      id="splash-page"
      className="h-screen w-screen relative overflow-hidden flex flex-col justify-between select-none bg-white text-slate-900"
    >
      {/* ========================================================================= */}
      {/* LAYER 0 (z-0): GAMBAR BACKGROUND (Opacity 10% di belakang frame SVG)      */}
      {/* ========================================================================= */}
      <img
        id="splash-classroom-bg"
        src={gambarBackground}
        alt="Ruang Belajar Desain Visual"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none opacity-25"
      />

      {/* ========================================================================= */}
      {/* LAYER 1 (z-10): BACKGROUND VECTOR FRAME (SVG di depan gambar background)  */}
      {/* ========================================================================= */}
      <svg
        id="dashboard-svg-frame"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none z-10 select-none"
      >
        <defs>
          <style>{`
            .cls-svg-yellow { fill: #f9db00; }
            .cls-svg-blue { fill: #005787; }
          `}</style>
        </defs>
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            {/* Right accent rect */}
            <rect className="cls-svg-yellow" x="1877.91" y="768.96" width="42.09" height="77.87" />
            {/* Bottom blue panel (y=779.65 to 1080) */}
            <path className="cls-svg-blue" d="M0,779.65h1884.15c19.79,0,35.85,16.06,35.85,35.85v264.5H0v-300.35h0Z" />
            {/* Top right blue tab */}
            <path className="cls-svg-blue" d="M1657.1,74.48h-233.57c-10.94,0-21.37-4.6-28.75-12.68L1338.3,0h318.8v74.48Z" />
            {/* Top right yellow frame ribbon */}
            <path
              className="cls-svg-yellow"
              d="M1891.95,0h-349.81l66.94,73.26c8.75,9.57,21.11,15.02,34.08,15.02h215.7c18.27,0,33.08,14.81,33.08,33.08v598.16c0,18.27-14.81,33.08-33.08,33.08H556.07l-30.85-33.76c-7.38-8.08-17.81-12.68-28.75-12.68h-233.57v74.48h1657.1V0h-28.05Z"
            />
            {/* Top left and left border frame */}
            <path
              className="cls-svg-blue"
              d="M1381.82,28.05V0H0v781.65h377.86l-66.94-73.26c-8.75-9.57-21.11-15.02-34.08-15.02H66.91c-21.46,0-38.86-17.4-38.86-38.86V66.91c0-21.46,17.4-38.86,38.86-38.86h1314.92Z"
            />
          </g>
        </g>
      </svg>

      {/* ========================================================================= */}
      {/* LAYER 2 (z-20): TOP HEADER (Logo Jenama Kemendikdasmen)                   */}
      {/* ========================================================================= */}
      <header
        id="splash-header"
        className="w-full flex items-center justify-between z-20 shrink-0 px-6 sm:px-10 md:px-14 pt-3 md:pt-10"
      >
        <div className="flex items-center gap-3">
          <img
            src={logoJenama}
            alt="Logo Kemendikdasmen"
            className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto object-contain drop-shadow-md transition-transform hover:scale-105"
          />
        </div>
      </header>

      {/* ========================================================================= */}
      {/* LAYER 3 (z-30): CENTER HERO CANVAS (Judul Atas & Judul Bawah Dimajukan)   */}
      {/* ========================================================================= */}
      <main
        id="splash-center-area"
        className="z-30 flex-1 flex flex-col items-center justify-center text-center px-4 w-full max-w-7xl mx-auto -mt-2 sm:-mt-4 md:-mt-6 lg:-mt-8 pointer-events-none select-none"
      >
        {/* Title Atas: "DASAR DESAIN" */}
        <div className="transition-transform duration-300 hover:scale-[1.02] drop-shadow-[0_12px_24px_rgba(0,87,135,0.35)]">
          <img
            id="splash-title-atas"
            src={judulAtas}
            alt="Dasar Desain"
            className="w-full max-w-[320px] xs:max-w-[400px] sm:max-w-[540px] md:max-w-[740px] lg:max-w-[1000px] xl:max-w-[1100px] 2xl:max-w-[1200px] max-h-[26vh] h-auto object-contain"
          />
        </div>

        {/* Title Bawah: "VISUAL" */}
        <div className="-mt-3 sm:-mt-6 md:-mt-9 lg:-mt-12 xl:-mt-14 transition-transform duration-300 hover:scale-[1.02] drop-shadow-[0_12px_24px_rgba(0,87,135,0.35)]">
          <img
            id="splash-title-bawah"
            src={judulBawah}
            alt="Visual"
            className="w-full max-w-[180px] xs:max-w-[220px] sm:max-w-[300px] md:max-w-[410px] lg:max-w-[550px] xl:max-w-[610px] 2xl:max-w-[660px] max-h-[22vh] h-auto object-contain"
          />
        </div>
      </main>

      {/* ========================================================================= */}
      {/* LAYER 3 (z-30): BOTTOM BLUE PANEL (5 Large Buttons)                       */}
      {/* Kotak biru: #00a1db | Outline: #004760 | Shadow: #00354c                   */}
      {/* ========================================================================= */}
      <footer
        id="splash-footer-panel"
        className="w-full h-[26vh] sm:h-[27vh] md:h-[28vh] z-30 shrink-0 flex items-center justify-center px-4 sm:px-8"
      >
        <div
          id="splash-5-buttons"
          className="flex flex-row items-center justify-center gap-3.5 sm:gap-5 md:gap-6 lg:gap-7 max-w-full flex-wrap z-30"
        >
          {materiKeys.map((mId) => {
            const m = allMateris[mId];
            const isHovered = hoveredMateri === mId;
            const isCompleted = completedMateri[mId];

            return (
              <div
                key={m.id}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setHoveredMateri(mId)}
                onMouseLeave={() => setHoveredMateri(null)}
              >
                {/* Floating Tooltip Pill on Hover */}
                <div
                  className={`absolute -top-12 sm:-top-13 transition-all duration-200 pointer-events-none whitespace-nowrap z-40 ${
                    isHovered
                      ? 'opacity-100 -translate-y-1.5 scale-100'
                      : 'opacity-0 translate-y-1 scale-95'
                  }`}
                >
                  <span className="px-3.5 py-1 rounded-full text-xs sm:text-sm font-black bg-[#00354c] text-white border-2 border-[#f9db00] shadow-[2px_2px_0px_#000000] font-serif tracking-wider">
                    {m.orderNumber}. {m.title}
                  </span>
                </div>

                {/* Main Interactive Button:
                    Kotak biru: #00a1db
                    Outline kotak: #004760
                    Shadow kotak: #00354c
                    Default: Large Icon
                    Hover: Expands with Text
                */}
                <button
                  type="button"
                  onClick={() => handleCardClick(m.id)}
                  aria-label={m.title}
                  className={`group relative flex items-center justify-center rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-[#004760] transition-all duration-200 cursor-pointer shadow-[5px_5px_0px_#00354c] sm:shadow-[6px_6px_0px_#00354c] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#00354c] select-none bg-[#00a1db] hover:bg-[#0bb2ef] ${
                    isHovered
                      ? '-translate-y-2 shadow-[7px_7px_0px_#00354c] sm:shadow-[8px_8px_0px_#00354c] px-5 sm:px-7 md:px-8 h-16 sm:h-20 md:h-24 lg:h-26'
                      : 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-26 lg:h-26'
                  }`}
                >
                  {/* Default Enlarged Icon */}
                  <div className="shrink-0 flex items-center justify-center">
                    {getMateriIcon(m.id)}
                  </div>

                  {/* Text: Hanya muncul ketika dihover */}
                  <div
                    className={`transition-all duration-200 overflow-hidden flex items-center ${
                      isHovered
                        ? 'max-w-xs opacity-100 ml-3 sm:ml-4'
                        : 'max-w-0 opacity-0 ml-0'
                    }`}
                  >
                    <span className="font-serif font-black text-sm sm:text-base md:text-lg lg:text-xl text-white whitespace-nowrap tracking-tight drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
                      {m.title}
                    </span>
                  </div>

                  {/* Completed Check Dot */}
                  {isCompleted && (
                    <span
                      className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#f9db00] border-2 sm:border-3 border-[#004760] shadow-xs"
                      title="Sudah Dibaca"
                    />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </footer>
    </div>
  );
}
