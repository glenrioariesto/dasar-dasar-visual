import React, { useState, useEffect } from 'react';
import { MateriId } from './types';
import { useProgress } from './hooks/useProgress';
import { SplashPage } from './pages/splash/SplashPage';
import { WarnaIntroPage } from './pages/materi/WarnaIntroPage';
import { WarnaArtiPage } from './pages/materi/WarnaArtiPage';
import { TipografiPage } from './pages/materi/TipografiPage';
import { TipografiArtiPage } from './pages/materi/TipografiArtiPage';
import { RuangKosongPage } from './pages/materi/RuangKosongPage';
import { RuangKosongArtiPage } from './pages/materi/RuangKosongArtiPage';
import { KeseimbanganPage } from './pages/materi/KeseimbanganPage';
import { KeseimbanganArtiPage } from './pages/materi/KeseimbanganArtiPage';
import { ContohDesainPage } from './pages/materi/ContohDesainPage';
import { ContohDesainArtiPage } from './pages/materi/ContohDesainArtiPage';
import { PortraitWarning } from './components/PortraitWarning';

const validMateriIds: MateriId[] = ['warna', 'tipografi', 'ruang-kosong', 'keseimbangan', 'contoh-desain'];

export type AppView =
  | 'splash'
  | MateriId
  | 'warna-arti'
  | 'tipografi-arti'
  | 'ruang-kosong-arti'
  | 'keseimbangan-arti'
  | 'contoh-desain-arti';

const artiRoutes: Record<string, AppView> = {
  'warna/arti': 'warna-arti',
  'warna-arti': 'warna-arti',
  'tipografi/arti': 'tipografi-arti',
  'tipografi-arti': 'tipografi-arti',
  'ruang-kosong/arti': 'ruang-kosong-arti',
  'ruang-kosong-arti': 'ruang-kosong-arti',
  'keseimbangan/arti': 'keseimbangan-arti',
  'keseimbangan-arti': 'keseimbangan-arti',
  'contoh-desain/arti': 'contoh-desain-arti',
  'contoh-desain-arti': 'contoh-desain-arti',
  'kesimpulan/arti': 'contoh-desain-arti',
  'kesimpulan-arti': 'contoh-desain-arti',
  'kesimpulan': 'contoh-desain'
};

const getViewFromUrl = (): AppView => {
  if (typeof window === 'undefined') return 'splash';
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (artiRoutes[path]) {
    return artiRoutes[path];
  }
  if (validMateriIds.includes(path as MateriId)) {
    return path as MateriId;
  }
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  if (artiRoutes[hash]) {
    return artiRoutes[hash];
  }
  if (validMateriIds.includes(hash as MateriId)) {
    return hash as MateriId;
  }
  return 'splash';
};

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>(getViewFromUrl);
  const { progress, markMateriCompleted } = useProgress();

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentView(getViewFromUrl());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (view: AppView) => {
    let targetPath = '/';
    if (view !== 'splash') {
      targetPath = `/${view}`;
    }
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    setCurrentView(view);
    if (view !== 'splash') {
      const baseMateri = view.replace('-arti', '') as MateriId;
      if (validMateriIds.includes(baseMateri)) {
        markMateriCompleted(baseMateri);
      }
    }
  };

  const handleStartMateri = (id: MateriId) => {
    navigateTo(id);
  };

  const handleBackToSplash = () => {
    navigateTo('splash');
  };

  return (
    <div
      id="app-root"
      className="h-screen w-screen overflow-hidden bg-white antialiased text-slate-900 relative"
    >
      {/* Mobile Landscape Orientation Advisory */}
      <PortraitWarning />

      {/* Screen Views */}
      {currentView === 'splash' && (
        <SplashPage
          onStartMateri={handleStartMateri}
          completedMateri={progress.completedMateri}
        />
      )}

      {/* 1. Modul Warna */}
      {currentView === 'warna' && (
        <WarnaIntroPage
          onBack={handleBackToSplash}
          onCariTahu={() => navigateTo('warna-arti')}
        />
      )}

      {currentView === 'warna-arti' && (
        <WarnaArtiPage
          onBack={() => navigateTo('warna')}
          onHome={handleBackToSplash}
        />
      )}

      {/* 2. Modul Tipografi */}
      {currentView === 'tipografi' && (
        <TipografiPage
          onBack={handleBackToSplash}
          onCariTahu={() => navigateTo('tipografi-arti')}
        />
      )}

      {currentView === 'tipografi-arti' && (
        <TipografiArtiPage
          onBack={() => navigateTo('tipografi')}
          onHome={handleBackToSplash}
        />
      )}

      {/* 3. Modul Ruang Kosong */}
      {currentView === 'ruang-kosong' && (
        <RuangKosongPage
          onBack={handleBackToSplash}
          onCariTahu={() => navigateTo('ruang-kosong-arti')}
        />
      )}

      {currentView === 'ruang-kosong-arti' && (
        <RuangKosongArtiPage
          onBack={() => navigateTo('ruang-kosong')}
          onHome={handleBackToSplash}
        />
      )}

      {/* 4. Modul Keseimbangan */}
      {currentView === 'keseimbangan' && (
        <KeseimbanganPage
          onBack={handleBackToSplash}
          onCariTahu={() => navigateTo('keseimbangan-arti')}
        />
      )}

      {currentView === 'keseimbangan-arti' && (
        <KeseimbanganArtiPage
          onBack={() => navigateTo('keseimbangan')}
          onHome={handleBackToSplash}
        />
      )}

      {/* 5. Modul Contoh Desain */}
      {currentView === 'contoh-desain' && (
        <ContohDesainPage
          onBack={handleBackToSplash}
          onCariTahu={() => navigateTo('contoh-desain-arti')}
        />
      )}

      {currentView === 'contoh-desain-arti' && (
        <ContohDesainArtiPage
          onBack={() => navigateTo('contoh-desain')}
          onHome={handleBackToSplash}
        />
      )}
    </div>
  );
}
