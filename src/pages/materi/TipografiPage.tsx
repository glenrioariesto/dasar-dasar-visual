import React, { useState } from 'react';
import { playClick, playSynthesizerNote } from '../../utils/audio';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import logoJenama from '../../assets/logo-jenama-primer.png';
import { BackgroundFrame } from '../../components/BackgroundFrame';
import judulTipografi from '../../assets/judul-tifografi.webp';
import tipografiIcon from '../../assets/tipografi.webp';

interface TipografiPageProps {
  onBack: () => void;
  onCariTahu?: () => void;
}

export function TipografiPage({ onBack, onCariTahu }: TipografiPageProps) {
  const handleCariTahu = () => {
    playSynthesizerNote('unlock');
    if (onCariTahu) {
      onCariTahu();
    }
  };

  return (
    <div
      id="tipografi-page"
      className="h-screen w-screen relative overflow-hidden flex flex-col justify-between select-none bg-white text-slate-900"
    >
      {/* LAYER 0 & 1: REUSABLE RESPONSIVE BACKGROUND & FRAME (assets/background-judul.svg) */}
      <BackgroundFrame idPrefix="tipografi" />

      {/* ========================================================================= */}
      {/* LAYER 2 (z-30): TOP HEADER (Logo Kemendikdasmen & Tombol Beranda)         */}
      {/* ========================================================================= */}
      <header
        id="tipografi-header"
        className="fixed top-0 left-0 right-0 w-full flex items-center justify-between z-30 px-3.5 sm:px-6 lg:px-12 2xl:px-16 pt-2 sm:pt-3.5 md:pt-8 lg:pt-9 2xl:pt-16 pointer-events-none"
      >
        <div
          id="tipografi-logo-container"
          className="flex items-center gap-1.5 sm:gap-3 pointer-events-auto md:translate-y-1.5 2xl:translate-y-3"
        >
          <img
            id="tipografi-logo-img"
            src={logoJenama}
            alt="Logo Kemendikdasmen"
            className="h-7 sm:h-9 md:h-11 lg:h-18 2xl:h-24 w-auto object-contain drop-shadow-sm transition-transform hover:scale-105"
          />
        </div>

        <button
          id="tipografi-btn-back"
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
      <div
        id="tipografi-header-spacer"
        className="w-full h-6 sm:h-8 md:h-16 lg:h-18 2xl:h-28 shrink-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* ========================================================================= */}
      {/* LAYER 2 (z-20): MAIN CONTENT (Split: Kiri Gambar, Kanan Materi)           */}
      {/* Layout Konsisten 2-Kolom Berdampingan Seperti Desktop                      */}
      {/* ========================================================================= */}
      <main
        id="tipografi-main-content"
        className="z-20 flex-1 min-h-0 h-full w-full flex items-center justify-center px-4 sm:px-8 md:px-10 lg:px-16 2xl:px-20 py-0 overflow-hidden max-w-7xl 2xl:max-w-[1600px] mx-auto"
      >
        <div
          id="tipografi-grid"
          className="grid grid-cols-12 gap-3 sm:gap-4 lg:gap-6 2xl:gap-8 items-center justify-center w-full h-full max-h-full my-auto"
        >
          {/* ===================================================================== */}
          {/* SISI KIRI: GAMBAR TIPOGRAFI (col-span-6)                              */}
          {/* ===================================================================== */}
          <div
            id="tipografi-left-container"
            className="col-span-6 flex flex-col items-center justify-center h-full w-full min-h-0 relative"
          >
            <div
              id="tipografi-img-wrapper"
              className="relative flex items-center justify-center transition-all duration-300 mx-auto aspect-square select-none hover:scale-[1.03]"
              style={{
                height: 'min(58vh, 440px)',
                maxHeight: '90%',
                maxWidth: '100%',
                minHeight: '180px',
                aspectRatio: '1 / 1',
                width: 'auto'
              }}
            >
              <img
                id="tipografi-left-img"
                src={tipografiIcon}
                alt="Ilustrasi Tipografi"
                className="w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(0,53,76,0.18)] select-none pointer-events-none"
              />
            </div>
          </div>

          {/* ===================================================================== */}
          {/* SISI KANAN: JUDUL-TIFOGRAFI.WEBP + DESKRIPSI + TOMBOL CARI TAHU       */}
          {/* ===================================================================== */}
          <div
            id="tipografi-right-content"
            className="col-span-6 flex flex-col items-center justify-center h-full w-full min-h-0 my-auto"
          >
            {/* Container Presisi: Selaras dengan Kartu Kiri */}
            <div
              id="tipografi-content-box"
              className="w-full max-w-xl 2xl:max-w-2xl flex flex-col justify-between items-center text-center mx-auto py-1 lg:py-2 gap-2 lg:gap-3 2xl:gap-4 transition-all duration-300"
              style={{
                height: 'min(58vh, 440px)',
                maxHeight: '90%',
                minHeight: '180px'
              }}
            >
              {/* 1. Judul Grafis 3D: judul-tifografi.webp */}
              <div
                id="tipografi-title-wrapper"
                className="w-full flex justify-center items-start shrink-0 transition-transform duration-300 hover:scale-[1.02]"
              >
                <img
                  id="tipografi-title-img"
                  src={judulTipografi}
                  alt="Tipografi"
                  className="w-auto max-w-[190px] sm:max-w-[260px] lg:max-w-[380px] 2xl:max-w-[450px] max-h-[14vh] lg:max-h-[17vh] 2xl:max-h-[20vh] h-auto object-contain drop-shadow-[0_8px_16px_rgba(2,132,199,0.25)]"
                />
              </div>

              {/* 2. Paragraf Deskripsi Sesuai Request */}
              <div
                id="tipografi-desc-wrapper"
                className="w-full my-auto py-1 lg:py-2 flex items-center justify-center max-w-lg lg:max-w-xl 2xl:max-w-2xl"
              >
                <p
                  id="tipografi-description"
                  className="text-[10px] md:text-xs lg:text-[13px] xl:text-[14px] 2xl:text-lg text-[#00354c] leading-relaxed lg:leading-relaxed font-medium text-justify"
                >
                  Tipografi adalah cara memilih, mengatur, dan menggunakan huruf dalam sebuah desain agar informasi dapat dibaca dengan jelas, mudah dipahami, dan terlihat menarik. Jenis, ukuran, ketebalan, serta jarak antarhuruf dapat memengaruhi kesan yang muncul, seperti formal, modern, santai, tegas, atau elegan. Karena itu, penggunaan tipografi perlu disesuaikan dengan pesan, tujuan, dan karakter desain agar tulisan tidak hanya terlihat bagus, tetapi juga dapat menyampaikan informasi dengan efektif.
                </p>
              </div>

              {/* 3. Button Cari Tahu */}
              <div
                id="tipografi-btn-wrapper"
                className="w-full flex justify-center items-end shrink-0"
              >
                <button
                  id="tipografi-btn-cari-tahu"
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

      {/* Footer Area Kosong */}
      <footer id="tipografi-footer" className="h-2 lg:h-4 z-20 shrink-0 pointer-events-none" />
    </div>
  );
}
