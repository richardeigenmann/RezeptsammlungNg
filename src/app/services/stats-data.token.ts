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
    date: '31.8.2026',
    stats: [
      { filename: 'Rcp014.htm', views: 34 },
      { filename: 'Rcp375.htm', views: 12 },
      { filename: 'Rcp171.htm', views: 11 },
      { filename: 'Rcp362.htm', views: 9 },
      { filename: 'Rcp223.htm', views: 8 },
      { filename: 'Rcp281.htm', views: 6 },
      { filename: 'Rcp161.htm', views: 5 },
      { filename: 'Rcp470.htm', views: 5 },
      { filename: 'Rcp299.htm', views: 4 },
      { filename: 'Rcp005.htm', views: 3 },
    ]
  })
});
