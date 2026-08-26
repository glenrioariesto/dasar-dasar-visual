export type MateriId = 'warna' | 'tipografi' | 'ruang-kosong' | 'keseimbangan' | 'kesimpulan';

export interface SubMateri {
  id: string;
  title: string;
  subtitle: string;
  concept: string;
  bullets: string[];
  tips: string;
  shotImageKey: string;
  comparison?: {
    badTitle: string;
    badDescription: string;
    goodTitle: string;
    goodDescription: string;
  };
}

export interface MateriData {
  id: MateriId;
  orderNumber: string;
  title: string;
  englishTitle: string;
  iconName: string;
  tagline: string;
  themeColor: string;
  themeBg: string;
  themeBorder: string;
  badgeColor: string;
  shotImageHero: string;
  summary: string;
  subMateriList: SubMateri[];
}

export interface UserProgress {
  completedMateri: Record<MateriId, boolean>;
  exploredLabs: Record<MateriId, boolean>;
}

export type ActiveView = 'splash' | 'materi';
