import { InjectionToken } from '@angular/core';

export interface IRawStat {
  filename: string;
  views: number;
}

export interface IStatsData {
  date: string;
  stats: IRawStat[];
}

export const STATS_DATA = new InjectionToken<IStatsData>('STATS_DATA', {
  providedIn: 'root',
  factory: () => ({
    date: '30.9.2026',
    stats: [
      { filename: 'Rcp362.htm', views: 10 },
      { filename: 'Rcp041.htm', views: 8 },
      { filename: 'Rcp171.htm', views: 5 },
      { filename: 'Rcp049.htm', views: 4 },
      { filename: 'Rcp095.htm', views: 4 },
      { filename: 'Rcp161.htm', views: 4 },
      { filename: 'Rcp375.htm', views: 4 },
      { filename: 'Rcp048.htm', views: 3 },
      { filename: 'Rcp122.htm', views: 3 },
      { filename: 'Rcp137.htm', views: 3 },
    ]
  })
});
