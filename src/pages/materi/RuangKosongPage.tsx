import React, { useState } from 'react';
import { playClick, playSynthesizerNote } from '../../utils/audio';
import { ArrowLeft, ArrowRight, Maximize2, Sparkles, Wind } from 'lucide-react';
import logoJenama from '../../assets/logo-jenama-primer.png';
import gambarBackground from '../../assets/gambar-background.webp';
import judulRuangKosong from '../../assets/judul-ruangkosong.webp';
import { SpaceLab } from '../../components/labs/SpaceLab';

interface RuangKosongPageProps {
  onBack: () => void;
}

export function RuangKosongPage({ onBack }: RuangKosongPageProps) {
  const [spacePreset, setSpacePreset] = useState<'tight' | 'medium' | 'optimal'>('optimal');
  const [showDeepLab, setShowDeepLab] = useState<boolean>(false);

  const handleSelectPreset = (preset: 'tight' | 'medium' | 'optimal') => {
    playClick();
    setSpacePreset(preset);
  };

  const handleCariTahu = () => {
    playSynthesizerNote('unlock');
    setShowDeepLab(true);
  };

  const presetData = {
    tight: {
      padding: 'p-2',
      gap: 'gap-1',
      badge: 'Padat & Sesak',
      badgeClass: 'bg-rose-100 text-rose-800 border-rose-400',
      statusDesc: 'Elemen berdesakan tanpa jeda. Mata cepat lelah dan pesan utama tenggelam.'
    },
    medium: {
      padding: 'p-4',
      gap: 'gap-2.5',
      badge: 'Ruang Sedang',
      badgeClass: 'bg-amber-100 text-amber-800 border-amber-400',
      statusDesc: 'Mulai terasa teratur, namun masih butuh ruang napas ekstra di sisi tepi.'
    },
    optimal: {
      padding: 'p-6 sm:p-7',
      gap: 'gap-4',
      badge: 'Napas Optimal ⭐',
      badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-400',
      statusDesc: 'Harmonis! Ruang kosong yang lega memberi kenyamanan dan fokus instan bagi mata audiens.'
    }
  }[spacePreset];

  return (
    <div
      id="ruang-kosong-page"
      className="h-screen w-screen relative overflow-hidden flex flex-col justify-between select-none bg-white text-slate-900"
    >
      {/* ========================================================================= */}
      {/* LAYER 0 (z-0): GAMBAR BACKGROUND (Opacity 10% di belakang frame SVG)      */}
      {/* ========================================================================= */}
      <img
        id="ruang-kosong-classroom-bg"
        src={gambarBackground}
        alt="Ruang Belajar Desain Visual"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none opacity-10"
      />

      {/* ========================================================================= */}
      {/* LAYER 1 (z-10): BACKGROUND VECTOR FRAME (background-judul.svg)            */}
      {/* ========================================================================= */}
      <svg
        id="ruang-kosong-svg-frame"
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
        id="ruang-kosong-header"
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
      {/* LAYER 2 (z-20): MAIN CONTENT (Split: Kiri Space Visualizer, Kanan Materi) */}
      {/* Layout Konsisten 2-Kolom Berdampingan Seperti Desktop                      */}
      {/* ========================================================================= */}
      <main
        id="ruang-kosong-main-content"
        className="z-20 flex-1 min-h-0 h-full w-full flex items-center justify-center px-4 lg:px-16 2xl:px-20 py-2 overflow-hidden max-w-7xl 2xl:max-w-[1600px] mx-auto"
      >
        <div className="grid grid-cols-12 gap-4 lg:gap-12 2xl:gap-16 items-center w-full h-full max-h-full my-auto">
          {/* ===================================================================== */}
          {/* SISI KIRI: BREATHING ROOM INTERACTIVE VISUALIZER (col-span-6)         */}
          {/* ===================================================================== */}
          <div
            id="ruang-kosong-left-visualizer"
            className="col-span-6 flex flex-col items-center justify-center h-full relative"
          >
            <div className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-md bg-white rounded-3xl border-3 border-[#004760] shadow-[6px_6px_0px_#00354c] p-3 sm:p-4 lg:p-6 flex flex-col justify-between gap-3 lg:gap-4">
              {/* Preset Switcher Buttons */}
              <div className="flex items-center justify-between gap-1.5 bg-slate-100 p-1.5 rounded-2xl border-2 border-[#004760]">
                {(['tight', 'medium', 'optimal'] as const).map((p) => {
                  const isActive = spacePreset === p;
                  const label = p === 'tight' ? 'Padat' : p === 'medium' ? 'Sedang' : 'Optimal';
                  return (
                    <button
                      key={p}
                      type="button"
                      onClick={() => handleSelectPreset(p)}
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

              {/* Dynamic Breathing Canvas */}
              <div className="bg-[#FAF8F5] rounded-2xl border-2 border-[#004760] flex items-center justify-center min-h-[160px] sm:min-h-[190px] relative overflow-hidden">
                {/* Visual Card that changes padding & gap */}
                <div
                  className={`bg-white rounded-xl border-2 border-slate-900 shadow-sm transition-all duration-300 flex flex-col items-center text-center ${presetData.padding} ${presetData.gap} w-[88%]`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[11px] font-black text-[#004760] uppercase tracking-wider">
                      Poster Inspirasi
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] font-black border transition-all ${presetData.badgeClass}`}
                    >
                      {presetData.badge}
                    </span>
                  </div>

                  <h4 className="font-black text-slate-900 text-sm sm:text-base leading-tight">
                    "Ruang Napas Menghidupkan Desain"
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
                    Ruang kosong memberi jeda bagi mata untuk menangkap inti sari pesan secara jernih.
                  </p>

                  <div className="pt-1">
                    <span className="px-3 py-1 rounded-lg bg-[#f9db00] text-[#004760] border border-[#004760] text-xs font-black shadow-xs inline-block">
                      Baca Selengkapnya
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="text-xs text-slate-600 px-1 flex items-center justify-between">
                <span className="font-black text-[#004760]">💡 {presetData.statusDesc}</span>
              </div>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* SISI KANAN: JUDUL-RUANGKOSONG.WEBP + DESKRIPSI + TOMBOL CARI TAHU     */}
          {/* ===================================================================== */}
          <div
            id="ruang-kosong-right-content"
            className="col-span-6 flex flex-col justify-center items-center text-center h-full pl-0 lg:pl-4 my-auto"
          >
            {/* 1. Judul Grafis 3D: judul-ruangkosong.webp */}
            <div className="w-full flex justify-center mb-2 lg:mb-3 transition-transform duration-300 hover:scale-[1.02]">
              <img
                src={judulRuangKosong}
                alt="Ruang Kosong"
                className="w-auto max-w-[190px] sm:max-w-[260px] lg:max-w-[380px] 2xl:max-w-[450px] max-h-[14vh] lg:max-h-[17vh] 2xl:max-h-[20vh] h-auto object-contain drop-shadow-[0_8px_16px_rgba(16,185,129,0.25)]"
              />
            </div>

            {/* 2. Paragraf Deskripsi */}
            <p className="text-xs sm:text-sm lg:text-[15px] 2xl:text-base text-slate-700 leading-relaxed font-medium mb-3 lg:mb-5 max-w-xl 2xl:max-w-2xl text-justify">
              Ruang kosong (white space atau negative space) adalah area bernapas di sekitar dan di antara elemen desain. Ruang kosong bukanlah ruang kosong yang sia-sia, melainkan elemen kunci yang memberi jeda visual, menegaskan fokus perhatian audiens pada informasi utama, dan menciptakan kesan karya yang lega, terstruktur rapi, serta berkelas tanpa rasa sesak.
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
      {/* MODAL LABORATORIUM EKSPERIMEN RUANG KOSONG                                */}
      {/* ========================================================================= */}
      {showDeepLab && (
        <div
          id="ruang-kosong-lab-modal"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 lg:p-6 animate-fadeIn"
        >
          <div className="bg-white rounded-3xl border-3 border-[#004760] shadow-[8px_8px_0px_#00354c] w-full max-w-4xl max-h-[90vh] h-[85vh] flex flex-col justify-between p-4 lg:p-6 relative overflow-hidden">
            {/* Header Modal */}
            <div className="flex items-center justify-between border-b-2 border-[#004760] pb-3 shrink-0">
              <div className="flex items-center gap-3">
                <img src={judulRuangKosong} alt="Ruang Kosong" className="h-7 lg:h-8 w-auto object-contain" />
                <h3 className="font-serif font-black text-base lg:text-xl text-slate-900">
                  Laboratorium Eksperimen Ruang Kosong
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

            {/* Isi Lab Interaktif: SpaceLab */}
            <div className="flex-1 overflow-y-auto my-3 pr-1">
              <SpaceLab />
            </div>

            {/* Footer Modal */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs text-slate-600 shrink-0">
              <span className="hidden lg:inline">💡 Geser slider ruang napas untuk melihat bagaimana jarak antar elemen memengaruhi kenyamanan visual!</span>
              <button
                type="button"
                onClick={() => {
                  playClick();
                  setShowDeepLab(false);
                }}
                className="font-bold text-[#00a1db] hover:underline cursor-pointer ml-auto"
              >
                Kembali ke Pengertian Ruang Kosong →
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
