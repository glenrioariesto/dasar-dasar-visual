import React, { useState } from 'react';
import { playClick } from '../../utils/audio';
import { ArrowLeft, Home, Sparkles, Sliders, Eye, HelpCircle } from 'lucide-react';
import logoJenama from '../../assets/logo-jenama-primer.png';
import { BackgroundFrame } from '../../components/BackgroundFrame';

interface TipografiArtiPageProps {
  onBack: () => void;
  onHome: () => void;
}

interface FontCategoryDetail {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  fontFamily: string;
  sampleLetter: string;
  sampleHeadline: string;
  sampleSentence: string;
  description: string;
  traits: string[];
  themeColor: string;
  useCases: string[];
  anatomyHotspot: {
    term: string;
    description: string;
  };
}

const fontCategoryDetails: FontCategoryDetail[] = [
  {
    id: 'serif',
    name: 'Serif (Berkait)',
    shortName: 'Serif',
    badge: 'KATEGORI TIPOGRAFI #1 · SERIF',
    fontFamily: 'Playfair Display, Georgia, serif',
    sampleLetter: 'Aa',
    sampleHeadline: 'Wibawa & Keanggunan Klasik',
    sampleSentence: 'Huruf dengan sirip kait di setiap ujung guratan garis memberi panduan alur membaca yang nyaman.',
    description: 'Huruf dengan kait atau sirip kecil di setiap ujung guratan garis. Menghadirkan wibawa, keanggunan klasik, dan kesan terpercaya. Sangat ideal untuk media cetak panjang seperti buku, novel, dan koran karena sirip huruf membantu memandu alur mata pembaca.',
    traits: ['Klasik', 'Formal', 'Terpercaya', 'Buku & Koran'],
    themeColor: '#00a1db',
    useCases: ['Buku & Novel', 'Koran & Majalah', 'Sertifikat Resmi', 'Logo Eksklusif'],
    anatomyHotspot: {
      term: 'Sirip Kait (Serif)',
      description: 'Garis penutup kecil di ujung guratan yang membantu mata mengalir membaca baris teks panjang.'
    }
  },
  {
    id: 'sans-serif',
    name: 'Sans-Serif (Modern)',
    shortName: 'Sans',
    badge: 'KATEGORI TIPOGRAFI #2 · SANS-SERIF',
    fontFamily: 'Plus Jakarta Sans, Inter, sans-serif',
    sampleLetter: 'Gg',
    sampleHeadline: 'Kejernihan Antarmuka Digital',
    sampleSentence: 'Garis bersih tanpa sirip membuat teks sangat jernih dan mudah dibaca pada berbagai ukuran layar ponsel.',
    description: 'Huruf tanpa sirip dengan ujung garis yang bersih, geometris, dan proporsional. Memberikan kesan modern, jernih, dan ramah pengguna. Pilihan utama untuk layar digital, aplikasi ponsel, website, dan teks instruksi karena keterbacaannya yang sangat tinggi.',
    traits: ['Modern', 'Minimalis', 'Jernih', 'Antarmuka Digital'],
    themeColor: '#00a1db',
    useCases: ['Website & UI App', 'Rambu & Petunjuk', 'Presentasi', 'Branding Tech'],
    anatomyHotspot: {
      term: 'Goresan Monoline',
      description: 'Ketebalan garis yang seragam tanpa sirip hiasan, memaksimalkan ketajaman di layar piksel.'
    }
  },
  {
    id: 'display',
    name: 'Display / Judul',
    shortName: 'Display',
    badge: 'KATEGORI TIPOGRAFI #3 · DISPLAY',
    fontFamily: "'Changa One', Impact, sans-serif",
    sampleLetter: 'Qq',
    sampleHeadline: 'Fokus Perhatian Utama',
    sampleSentence: 'Dirancang berani dan atraktif untuk langsung memikat pandangan pertama penonton acara.',
    description: 'Ragam huruf yang dirancang khusus untuk ukuran besar guna memikat pandangan seketika. Memiliki kepribadian yang ekspresif, tebal, dan berkarakter kuat. Digunakan eksklusif untuk judul utama, poster acara, atau logo desain.',
    traits: ['Atraktif', 'Berani', 'Ekspresif', 'Judul & Poster'],
    themeColor: '#00a1db',
    useCases: ['Headline Poster', 'Cover Album', 'Spanduk Promo', 'Logo Acara'],
    anatomyHotspot: {
      term: 'Bobot Ekstra Tebal',
      description: 'Massa visual yang sangat padat untuk menciptakan kontras hierarki pertama saat dilihat sekilas.'
    }
  },
  {
    id: 'monospace',
    name: 'Monospace (Lebar Tetap)',
    shortName: 'Mono',
    badge: 'KATEGORI TIPOGRAFI #4 · MONOSPACE',
    fontFamily: 'Courier New, monospace',
    sampleLetter: 'Mm',
    sampleHeadline: 'Presisi Kode & Mesin Tik',
    sampleSentence: 'Setiap huruf menempati ruang horizontal yang persis sama, menciptakan kesan teknis dan teratur.',
    description: 'Setiap karakter huruf memiliki lebar horizontal yang persis sama. Memberikan nuansa teknis, presisi, dan retro komputer seperti mesin ketik atau kode pemrograman. Sangat efektif untuk data tabular, angka keuangan, atau desain bertema futuristik.',
    traits: ['Presisi', 'Teknis', 'Rapi', 'Data & Mesin Tik'],
    themeColor: '#00a1db',
    useCases: ['Kode Program', 'Tabel Keuangan', 'Resi / Nota', 'Retro Komputer'],
    anatomyHotspot: {
      term: 'Grid Lebar Seragam',
      description: 'Setiap karakter (seperti i dan m) menempati lebar ruang kotak vertikal yang identik.'
    }
  },
  {
    id: 'script',
    name: 'Script (Kaligrafi)',
    shortName: 'Script',
    badge: 'KATEGORI TIPOGRAFI #5 · SCRIPT',
    fontFamily: 'Brush Script MT, cursive',
    sampleLetter: 'Jj',
    sampleHeadline: 'Goresan Tangan Luwes',
    sampleSentence: 'Sentuhan personal kuas kaligrafi memancarkan nuansa kehangatan hati dan kemewahan acara istimewa.',
    description: 'Gaya tulisan tangan yang mengalir luwes dengan goresan berliku layaknya tinta kuas atau pena kaligrafi. Memancarkan kehangatan personal, kemewahan, dan sentuhan artistik. Sangat pas untuk undangan pernikahan, sertifikat kehormatan, dan kemasan produk premium.',
    traits: ['Artistik', 'Elegan', 'Personal', 'Undangan & Kemasan'],
    themeColor: '#00a1db',
    useCases: ['Undangan Nikah', 'Kemasan Mewah', 'Kartu Ucapan', 'Tanda Tangan'],
    anatomyHotspot: {
      term: 'Garis Sambung Luwes',
      description: 'Garis yang menyambung antarhuruf meniru gerakan mengalir alami kuas atau pena tinta.'
    }
  },
  {
    id: 'slab-serif',
    name: 'Slab Serif (Kait Balok)',
    shortName: 'Slab',
    badge: 'KATEGORI TIPOGRAFI #6 · SLAB SERIF',
    fontFamily: 'Rockwell, serif',
    sampleLetter: 'Kk',
    sampleHeadline: 'Ketegasan Kait Balok',
    sampleSentence: 'Sirip berbentuk balok persegi tebal menghadirkan kesan percaya diri yang kokoh dan berenergi.',
    description: 'Memiliki kait tebal berbentuk balok persegi yang kokoh tanpa perbedaan kontras tebal-tipis garis yang mencolok. Terkesan tegas, percaya diri, dan berdaya tahan tinggi. Populer digunakan pada poster retro, identitas kampus, serta merek olahraga.',
    traits: ['Tegas', 'Kokoh', 'Sportif', 'Poster Retro'],
    themeColor: '#00a1db',
    useCases: ['Logo Kampus / Olahraga', 'Poster Retro', 'Iklan Billboard', 'Packaging Tegas'],
    anatomyHotspot: {
      term: 'Sirip Balok Persegi',
      description: 'Sirip tebal tanpa lekukan lengkung (unbracketed) yang memberikan kesan kokoh dan kokret.'
    }
  }
];

export function TipografiArtiPage({ onBack, onHome }: TipografiArtiPageProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [customText, setCustomText] = useState<string>('');
  const [letterSpacing, setLetterSpacing] = useState<number>(0); // -2 to 10 px
  const [activeTab, setActiveTab] = useState<'preview' | 'anatomy' | 'pair'>('preview');
  const [pairedIndex, setPairedIndex] = useState<number>(1); // default paired with Sans-Serif
  const [showAnatomyTooltip, setShowAnatomyTooltip] = useState<boolean>(false);

  const activeFont = fontCategoryDetails[selectedIndex];
  const pairedFont = fontCategoryDetails[pairedIndex];

  const handleSelectFont = (index: number) => {
    playClick();
    setSelectedIndex(index);
    if (index === pairedIndex) {
      setPairedIndex((index + 1) % fontCategoryDetails.length);
    }
  };

  return (
    <div
      id="tipografi-arti-page"
      className="h-screen w-screen relative overflow-hidden flex flex-col justify-between select-none bg-white text-slate-900"
    >
      {/* LAYER 0 & 1: REUSABLE RESPONSIVE BACKGROUND & FRAME */}
      <BackgroundFrame idPrefix="tipografi-arti" />

      {/* ========================================================================= */}
      {/* LAYER 2 (z-30): TOP HEADER (Logo Kemendikdasmen & Tombol Aksi)            */}
      {/* ========================================================================= */}
      <header
        id="tipografi-arti-header"
        className="fixed top-0 left-0 right-0 w-full flex items-center justify-between z-30 px-3.5 sm:px-6 lg:px-12 2xl:px-16 pt-2 sm:pt-3.5 md:pt-8 lg:pt-9 2xl:pt-16 pointer-events-none"
      >
        <div
          id="tipografi-arti-logo-container"
          className="flex items-center gap-1.5 sm:gap-3 pointer-events-auto md:translate-y-1.5 2xl:translate-y-3"
        >
          <img
            id="tipografi-arti-logo-img"
            src={logoJenama}
            alt="Logo Kemendikdasmen"
            className="h-7 sm:h-9 md:h-11 lg:h-18 2xl:h-24 w-auto object-contain drop-shadow-sm transition-transform hover:scale-105"
          />
        </div>

        <div
          id="tipografi-arti-header-actions"
          className="flex items-center gap-1.5 sm:gap-2.5 pointer-events-auto md:translate-y-1.5 2xl:translate-y-3"
        >
          {/* Tombol Beranda */}
          <button
            id="tipografi-arti-btn-home"
            type="button"
            onClick={() => {
              playClick();
              onHome();
            }}
            className="group rounded-md sm:rounded-xl lg:rounded-2xl px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 border-1.5 sm:border-2 lg:border-3 border-[#004760] bg-white hover:bg-sky-50 text-[#004760] shadow-[1.5px_1.5px_0px_#00354c] sm:shadow-[3px_3px_0px_#00354c] lg:shadow-[4px_4px_0px_#00354c] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#00354c] font-serif font-black text-[9px] sm:text-xs lg:text-sm 2xl:text-base flex items-center gap-1 sm:gap-1.5 transition-all cursor-pointer select-none"
            title="Kembali ke Beranda Splash"
          >
            <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5 transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline">Beranda</span>
          </button>

          {/* Tombol Kembali ke Intro */}
          <button
            id="tipografi-arti-btn-back"
            type="button"
            onClick={() => {
              playClick();
              onBack();
            }}
            className="group rounded-md sm:rounded-xl lg:rounded-2xl px-2.5 sm:px-4 lg:px-6 py-1 sm:py-1.5 lg:py-2.5 border-1.5 sm:border-2 lg:border-3 border-[#004760] bg-white hover:bg-sky-50 text-[#004760] shadow-[1.5px_1.5px_0px_#00354c] sm:shadow-[3px_3px_0px_#00354c] lg:shadow-[4px_4px_0px_#00354c] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#00354c] font-serif font-black text-[9px] sm:text-xs lg:text-sm 2xl:text-base flex items-center gap-1 sm:gap-1.5 lg:gap-2 transition-all cursor-pointer select-none"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-transform group-hover:-translate-x-1" />
            <span>Kembali</span>
          </button>
        </div>
      </header>

      {/* SPACER ATAS */}
      <div
        id="tipografi-arti-header-spacer"
        className="w-full h-6 sm:h-8 md:h-16 lg:h-18 2xl:h-28 shrink-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* ========================================================================= */}
      {/* LAYER 2 (z-20): MAIN CONTENT (Split: Kiri Spesimen Font, Kanan Materi)    */}
      {/* ========================================================================= */}
      <main
        id="tipografi-arti-main-content"
        className="z-20 flex-1 min-h-0 h-full w-full flex items-center justify-center px-4 sm:px-8 md:px-10 lg:px-16 2xl:px-20 py-0 overflow-hidden max-w-7xl 2xl:max-w-[1600px] mx-auto"
      >
        <div
          id="tipografi-arti-grid"
          className="grid grid-cols-12 gap-3 sm:gap-4 lg:gap-6 2xl:gap-8 items-center justify-center w-full h-full max-h-full my-auto"
        >
          {/* SISI KIRI: SPESIMEN TIPOGRAFI INTERAKTIF (col-span-6) */}
          <div
            id="tipografi-arti-left-container"
            className="col-span-6 flex flex-col items-center justify-center h-full w-full min-h-0 relative"
          >
            <div
              id="tipografi-arti-specimen-card"
              className="relative flex flex-col justify-between items-center transition-all duration-300 mx-auto aspect-square rounded-2xl lg:rounded-3xl border-2 sm:border-3 border-[#004760] bg-white shadow-[4px_4px_0px_#00354c] sm:shadow-[5px_5px_0px_#00354c] lg:shadow-[6px_6px_0px_#00354c] overflow-hidden p-2.5 sm:p-4 lg:p-5 select-none"
              style={{
                height: 'min(58vh, 440px)',
                maxHeight: '90%',
                maxWidth: '100%',
                minHeight: '180px',
                aspectRatio: '1 / 1',
                width: 'auto'
              }}
            >
              {/* Header Card: Mode Switch Tabs */}
              <div className="w-full flex items-center justify-between border-b-2 border-[#004760] pb-1.5 shrink-0 gap-1">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => {
                      playClick();
                      setActiveTab('preview');
                    }}
                    className={`px-2 py-0.5 rounded-lg font-serif font-black text-[9px] sm:text-[10px] uppercase tracking-wider transition-all cursor-pointer border ${
                      activeTab === 'preview'
                        ? 'bg-[#004760] text-white border-[#004760]'
                        : 'bg-slate-100 text-[#004760] border-slate-300 hover:bg-sky-50'
                    }`}
                  >
                    Pratinjau
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      playClick();
                      setActiveTab('anatomy');
                    }}
                    className={`px-2 py-0.5 rounded-lg font-serif font-black text-[9px] sm:text-[10px] uppercase tracking-wider transition-all cursor-pointer border ${
                      activeTab === 'anatomy'
                        ? 'bg-[#004760] text-white border-[#004760]'
                        : 'bg-slate-100 text-[#004760] border-slate-300 hover:bg-sky-50'
                    }`}
                  >
                    Anatomi
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      playClick();
                      setActiveTab('pair');
                    }}
                    className={`px-2 py-0.5 rounded-lg font-serif font-black text-[9px] sm:text-[10px] uppercase tracking-wider transition-all cursor-pointer border ${
                      activeTab === 'pair'
                        ? 'bg-[#004760] text-white border-[#004760]'
                        : 'bg-slate-100 text-[#004760] border-slate-300 hover:bg-sky-50'
                    }`}
                  >
                    Pairing
                  </button>
                </div>

                <span
                  style={{ backgroundColor: activeFont.themeColor }}
                  className="px-2 py-0.5 rounded-full text-white text-[9px] sm:text-[10px] font-black tracking-wider uppercase border border-[#004760] truncate"
                >
                  {activeFont.shortName}
                </span>
              </div>

              {/* Center Specimen Display */}
              <div className="w-full flex-1 flex flex-col items-center justify-center my-auto px-1 overflow-hidden relative">
                {/* TAB 1: PREVIEW & TYPE-TO-PREVIEW */}
                {activeTab === 'preview' && (
                  <div className="w-full flex flex-col items-center justify-center text-center">
                    <span
                      style={{
                        fontFamily: activeFont.fontFamily,
                        letterSpacing: `${letterSpacing}px`
                      }}
                      className="text-[#004760] leading-none transition-all duration-200 text-5xl sm:text-6xl md:text-7xl lg:text-8xl select-none"
                    >
                      {customText.trim() ? customText : activeFont.sampleLetter}
                    </span>

                    <h4
                      style={{
                        fontFamily: activeFont.fontFamily,
                        letterSpacing: `${Math.max(0, letterSpacing * 0.5)}px`
                      }}
                      className="font-black text-xs sm:text-sm lg:text-base text-slate-800 mt-2 sm:mt-2.5 leading-snug line-clamp-1"
                    >
                      "{customText.trim() ? 'Pratinjau Kustom Huruf' : activeFont.sampleHeadline}"
                    </h4>

                    <p
                      style={{ fontFamily: activeFont.fontFamily }}
                      className="text-[9px] sm:text-xs text-slate-600 mt-1 max-w-xs line-clamp-2"
                    >
                      {activeFont.sampleSentence}
                    </p>
                  </div>
                )}

                {/* TAB 2: ANATOMY HOTSPOT */}
                {activeTab === 'anatomy' && (
                  <div className="w-full flex flex-col items-center justify-center text-center relative p-1">
                    <div className="relative inline-block my-auto">
                      <span
                        style={{ fontFamily: activeFont.fontFamily }}
                        className="text-[#004760] leading-none text-7xl sm:text-8xl lg:text-9xl select-none"
                      >
                        {activeFont.sampleLetter}
                      </span>

                      {/* Interactive Anatomy Hotspot Button */}
                      <button
                        type="button"
                        onClick={() => {
                          playClick();
                          setShowAnatomyTooltip((prev) => !prev);
                        }}
                        className="absolute -top-1 -right-2 bg-[#f9db00] text-[#004760] border-2 border-[#004760] rounded-full p-1 shadow-[2px_2px_0px_#00354c] hover:scale-110 active:scale-95 transition-transform cursor-pointer animate-bounce"
                        title="Klik untuk melihat anatomi huruf"
                      >
                        <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                    </div>

                    <div className="mt-2 p-2 rounded-xl bg-sky-50 border border-[#004760] text-left w-full max-w-[280px]">
                      <div className="flex items-center gap-1 text-[#004760] font-serif font-black text-[10px] sm:text-xs uppercase">
                        <Sparkles className="w-3 h-3 text-[#00a1db]" />
                        <span>{activeFont.anatomyHotspot.term}</span>
                      </div>
                      <p className="text-[9px] sm:text-[10px] text-slate-700 leading-snug mt-0.5">
                        {activeFont.anatomyHotspot.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* TAB 3: FONT PAIRING SHOWCASE */}
                {activeTab === 'pair' && (
                  <div className="w-full flex flex-col items-center justify-center text-center p-1 gap-2">
                    <div className="w-full bg-[#FAF8F5] rounded-xl border-2 border-[#004760] p-2.5 sm:p-3 text-left">
                      <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-slate-500 block mb-0.5">
                        Judul Utama ({activeFont.shortName})
                      </span>
                      <h4
                        style={{ fontFamily: activeFont.fontFamily }}
                        className="font-black text-sm sm:text-base lg:text-lg text-[#004760] leading-tight"
                      >
                        Jelajah Harmoni Desain Visual
                      </h4>

                      <div className="h-2 border-b border-slate-200 my-1.5" />

                      <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-slate-500 block mb-0.5">
                        Teks Paragraf ({pairedFont.shortName})
                      </span>
                      <p
                        style={{ fontFamily: pairedFont.fontFamily }}
                        className="text-[9px] sm:text-[10px] text-slate-700 leading-relaxed line-clamp-2"
                      >
                        Kombinasi font judul dan body text yang selaras menciptakan hierarki informasi yang nyaman dibaca oleh audiens.
                      </p>
                    </div>

                    {/* Quick switch paired font */}
                    <div className="flex items-center gap-1 flex-wrap justify-center">
                      <span className="text-[8px] font-bold text-slate-600">Pasangkan dengan:</span>
                      {fontCategoryDetails
                        .filter((f) => f.id !== activeFont.id)
                        .slice(0, 3)
                        .map((f, fIdx) => (
                          <button
                            key={f.id}
                            type="button"
                            onClick={() => {
                              playClick();
                              setPairedIndex(fontCategoryDetails.findIndex((item) => item.id === f.id));
                            }}
                            className={`px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-bold border cursor-pointer ${
                              pairedFont.id === f.id
                                ? 'bg-[#004760] text-white border-[#004760]'
                                : 'bg-white text-[#004760] border-[#004760] hover:bg-slate-100'
                            }`}
                          >
                            {f.shortName}
                          </button>
                        ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Interactive Controls: Type Input & Spacing Slider */}
              <div className="w-full flex flex-col gap-1.5 border-t border-slate-200 pt-1.5 shrink-0">
                {/* 1. Type-to-Preview Input */}
                <div className="w-full flex items-center gap-1.5">
                  <input
                    type="text"
                    maxLength={15}
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="Ketik teks uji coba di sini..."
                    className="flex-1 px-2 py-0.5 rounded-lg border border-[#004760] text-[10px] sm:text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#00a1db] placeholder:text-slate-400 font-sans"
                  />
                  {customText && (
                    <button
                      type="button"
                      onClick={() => setCustomText('')}
                      className="px-1.5 py-0.5 text-[9px] font-bold text-slate-500 hover:text-slate-900 cursor-pointer"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* 2. Kerning / Spacing Slider */}
                <div className="w-full flex items-center justify-between gap-2 text-[9px] sm:text-[10px] text-slate-600">
                  <div className="flex items-center gap-1 font-bold text-[#004760]">
                    <Sliders className="w-3 h-3" />
                    <span>Jarak Spasi (Kerning): {letterSpacing}px</span>
                  </div>
                  <input
                    type="range"
                    min="-2"
                    max="10"
                    step="1"
                    value={letterSpacing}
                    onChange={(e) => setLetterSpacing(Number(e.target.value))}
                    className="w-20 sm:w-28 accent-[#00a1db] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SISI KANAN: MATERI & DESKRIPSI (col-span-6) */}
          <div
            id="tipografi-arti-right-content"
            className="col-span-6 flex flex-col items-center justify-center h-full w-full min-h-0 my-auto"
          >
            <div
              id="tipografi-arti-content-box"
              className="w-full max-w-xl 2xl:max-w-2xl flex flex-col justify-between items-center text-center mx-auto py-1 lg:py-2 gap-2 lg:gap-3 2xl:gap-4 transition-all duration-300"
              style={{
                height: 'min(58vh, 440px)',
                maxHeight: '90%',
                minHeight: '180px'
              }}
            >
              {/* 1. Judul Tipe Font */}
              <div id="tipografi-arti-title-wrapper" className="w-full flex flex-col items-center shrink-0">
                <h2
                  id="tipografi-arti-title-text"
                  style={{ fontFamily: activeFont.fontFamily }}
                  className="font-serif font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-[#004760] uppercase tracking-tight drop-shadow-sm leading-tight transition-all duration-200 flex flex-col items-center"
                >
                  {activeFont.name.includes('(') ? (
                    <>
                      <span>{activeFont.name.split('(')[0].trim()}</span>
                      <span className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-bold opacity-80 normal-case tracking-normal mt-0.5">
                        ({activeFont.name.split('(')[1]}
                      </span>
                    </>
                  ) : activeFont.name.includes('/') ? (
                    <>
                      <span>{activeFont.name.split('/')[0].trim()}</span>
                      <span className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-bold opacity-80 normal-case tracking-normal mt-0.5">
                        / {activeFont.name.split('/')[1].trim()}
                      </span>
                    </>
                  ) : (
                    activeFont.name
                  )}
                </h2>
              </div>

              {/* 2. Paragraf Deskripsi & Karakteristik */}
              <div
                id="tipografi-arti-desc-wrapper"
                className="w-full flex flex-col items-center justify-center max-w-lg lg:max-w-xl 2xl:max-w-3xl px-1 sm:px-2 my-auto"
              >
                <p
                  id="tipografi-arti-description"
                  className="text-xs sm:text-[13px] md:text-sm lg:text-[15px] 2xl:text-lg text-[#00354c] leading-relaxed 2xl:leading-relaxed font-medium text-justify mb-2 sm:mb-2.5 lg:mb-3 2xl:mb-4"
                >
                  {activeFont.description}
                </p>

                {/* Trait Pills */}
                <div
                  id="tipografi-arti-traits-container"
                  className="hidden lg:flex items-center justify-center gap-1.5 sm:gap-2 2xl:gap-3 flex-wrap w-full mb-2"
                >
                  {activeFont.traits.map((trait, tIdx) => (
                    <span
                      key={tIdx}
                      id={`tipografi-arti-trait-${tIdx}`}
                      className="px-2.5 sm:px-3 2xl:px-4 py-0.5 sm:py-1 2xl:py-1.5 rounded-lg 2xl:rounded-xl text-xs 2xl:text-sm font-black border-2 border-[#004760] bg-white text-[#004760] shadow-[2px_2px_0px_#00354c] 2xl:shadow-[3px_3px_0px_#00354c]"
                    >
                      {trait}
                    </span>
                  ))}
                </div>

                {/* Use-Case Matcher Pills */}
                <div className="hidden sm:flex items-center justify-center gap-1 flex-wrap w-full text-[9px] sm:text-[10px] text-slate-500">
                  <span className="font-bold text-[#004760]">Rekomendasi Pakai:</span>
                  {activeFont.useCases.map((uc, uIdx) => (
                    <span
                      key={uIdx}
                      className="px-1.5 py-0.5 rounded-md bg-slate-100 border border-slate-300 text-slate-700 font-medium"
                    >
                      {uc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Area bawah spacer simetris */}
              <div className="h-1 lg:h-2 shrink-0" />
            </div>
          </div>
        </div>
      </main>

      {/* LAYER 3 (z-30): BOTTOM FONT SELECTOR DOCK (Memanjang 2 kotak saat aktif) */}
      <footer
        id="tipografi-arti-footer-buttons"
        className="w-full z-30 shrink-0 flex items-center justify-center px-3 sm:px-6 pt-1 pb-3.5 sm:pb-4 md:pb-10 lg:pb-12 2xl:pb-20 md:-translate-y-2 2xl:-translate-y-4"
      >
        <div
          id="tipografi-selector-buttons"
          className="flex flex-row items-center justify-center gap-1.5 min-[360px]:gap-2 sm:gap-3 md:gap-4 lg:gap-5 max-w-full z-30"
        >
          {fontCategoryDetails.map((item, idx) => {
            const isSelected = selectedIndex === idx;

            return (
              <button
                key={item.id}
                id={`tipografi-arti-button-${item.id}`}
                type="button"
                onClick={() => handleSelectFont(idx)}
                aria-label={item.name}
                style={{
                  backgroundColor: '#00a1db'
                }}
                className={`group relative flex items-center justify-center rounded-sm min-[360px]:rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl 2xl:rounded-3xl border-1.5 sm:border-2 lg:border-3 2xl:border-4 border-[#004760] transition-all duration-300 ease-out cursor-pointer shadow-[1px_1px_0px_#00354c] min-[360px]:shadow-[1.5px_1.5px_0px_#00354c] sm:shadow-[2px_2px_0px_#00354c] lg:shadow-[3px_3px_0px_#00354c] 2xl:shadow-[5px_5px_0px_#00354c] active:translate-x-[1px] active:translate-y-[1px] select-none shrink-0 outline-none focus:outline-none focus-visible:outline-none ${
                  isSelected
                    ? '-translate-y-1 sm:-translate-y-2 2xl:-translate-y-3 shadow-[2.5px_2.5px_0px_#00354c] sm:shadow-[4px_4px_0px_#00354c] lg:shadow-[6px_6px_0px_#00354c] 2xl:shadow-[9px_9px_0px_#00354c] w-14 min-[360px]:w-16 sm:w-[96px] md:w-[120px] lg:w-[150px] xl:w-[170px] 2xl:w-[220px] px-1'
                    : 'hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_#00354c] 2xl:hover:shadow-[6px_6px_0px_#00354c] w-6 min-[360px]:w-7 sm:w-10 md:w-13 lg:w-16 xl:w-18 2xl:w-24'
                } h-6 min-[360px]:h-7 sm:h-10 md:h-13 lg:h-16 xl:h-18 2xl:h-24`}
              >
                {isSelected ? (
                  <span className="font-serif font-black text-[9px] min-[360px]:text-[10px] sm:text-xs md:text-sm lg:text-base 2xl:text-lg select-none tracking-wider uppercase truncate px-1 text-white">
                    {item.shortName}
                  </span>
                ) : (
                  <span
                    style={{ fontFamily: item.fontFamily }}
                    className="font-serif font-black text-xs sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-white select-none"
                  >
                    {item.sampleLetter[0]}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </footer>
    </div>
  );
}
