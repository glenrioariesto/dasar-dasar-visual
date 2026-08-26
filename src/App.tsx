import React from 'react';
import { useProgress } from './hooks/useProgress';
import { SplashPage } from './pages/splash/SplashPage';
import { PortraitWarning } from './components/PortraitWarning';

export default function App() {
  const { progress } = useProgress();

  return (
    <div
      id="app-root"
      className="h-screen w-screen overflow-hidden bg-white antialiased text-slate-900 relative"
    >
      {/* Mobile Landscape Orientation Advisory */}
      <PortraitWarning />

      {/* Splash Page Only (Semua redirect ditiadakan untuk saat ini) */}
      <SplashPage
        completedMateri={progress.completedMateri}
      />
    </div>
  );
}
