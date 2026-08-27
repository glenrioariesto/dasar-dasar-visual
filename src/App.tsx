import React, { useState, useEffect } from 'react';
import { MateriId } from './types';
import { useProgress } from './hooks/useProgress';
import { SplashPage } from './pages/splash/SplashPage';
import { WarnaIntroPage } from './pages/materi/WarnaIntroPage';
import { TipografiPage } from './pages/materi/TipografiPage';
import { RuangKosongPage } from './pages/materi/RuangKosongPage';
import { KeseimbanganPage } from './pages/materi/KeseimbanganPage';
import { KesimpulanPage } from './pages/materi/KesimpulanPage';
import { PortraitWarning } from './components/PortraitWarning';

const validMateriIds: MateriId[] = ['warna', 'tipografi', 'ruang-kosong', 'keseimbangan', 'kesimpulan'];

const getViewFromUrl = (): 'splash' | MateriId => {
  if (typeof window === 'undefined') return 'splash';
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (validMateriIds.includes(path as MateriId)) {
    return path as MateriId;
  }
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  if (validMateriIds.includes(hash as MateriId)) {
    return hash as MateriId;
  }
  return 'splash';
};

export default function App() {
  const [currentView, setCurrentView] = useState<'splash' | MateriId>(getViewFromUrl);
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

  const navigateTo = (view: 'splash' | MateriId) => {
    const targetPath = view === 'splash' ? '/' : `/${view}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    setCurrentView(view);
    if (view !== 'splash') {
      markMateriCompleted(view);
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

      {currentView === 'warna' && (
        <WarnaIntroPage onBack={handleBackToSplash} />
      )}

      {currentView === 'tipografi' && (
        <TipografiPage onBack={handleBackToSplash} />
      )}

      {currentView === 'ruang-kosong' && (
        <RuangKosongPage onBack={handleBackToSplash} />
      )}

      {currentView === 'keseimbangan' && (
        <KeseimbanganPage onBack={handleBackToSplash} />
      )}

      {currentView === 'kesimpulan' && (
        <KesimpulanPage onBack={handleBackToSplash} />
      )}
    </div>
  );
}
