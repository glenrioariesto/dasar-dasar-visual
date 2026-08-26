import React, { useState } from 'react';
import { MateriId } from './types';
import { useProgress } from './hooks/useProgress';
import { SplashPage } from './pages/splash/SplashPage';
import { WarnaIntroPage } from './pages/materi/WarnaIntroPage';
import { PortraitWarning } from './components/PortraitWarning';

export default function App() {
  const [currentView, setCurrentView] = useState<'splash' | 'warna'>('splash');
  const { progress } = useProgress();

  const handleStartMateri = (id: MateriId) => {
    if (id === 'warna') {
      setCurrentView('warna');
    }
  };

  const handleBackToSplash = () => {
    setCurrentView('splash');
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
    </div>
  );
}
