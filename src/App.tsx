import React, { useState } from 'react';
import { MateriId, ActiveView } from './types';
import { useProgress } from './hooks/useProgress';
import { SplashPage } from './pages/splash/SplashPage';
import { MateriPage } from './pages/materi/MateriPage';
import { PortraitWarning } from './components/PortraitWarning';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('splash');
  const [currentMateriId, setCurrentMateriId] = useState<MateriId>('warna');

  const {
    progress,
    markMateriCompleted
  } = useProgress();

  const handleStartMateri = (id: MateriId) => {
    setCurrentMateriId(id);
    setActiveView('materi');
    markMateriCompleted(id);
  };

  const handleBackToSplash = () => {
    setActiveView('splash');
  };

  return (
    <div
      id="app-root"
      className="h-screen w-screen overflow-hidden bg-[#FAF8F5] antialiased text-slate-900 relative"
    >
      {/* Mobile Landscape Orientation Advisory */}
      <PortraitWarning />

      {/* Screen Views */}
      {activeView === 'splash' && (
        <SplashPage
          onStartMateri={handleStartMateri}
          completedMateri={progress.completedMateri}
        />
      )}

      {activeView === 'materi' && (
        <MateriPage
          currentMateriId={currentMateriId}
          onBackToSplash={handleBackToSplash}
          onSelectMateri={(id) => {
            setCurrentMateriId(id);
            markMateriCompleted(id);
          }}
        />
      )}
    </div>
  );
}
