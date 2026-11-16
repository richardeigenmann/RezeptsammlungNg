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
    date: '31.10.2026',
    stats: [
      { filename: 'Rcp480.htm', views: 4 },
      { filename: 'Rcp171.htm', views: 4 },
      { filename: 'Rcp047.htm', views: 4 },
      { filename: 'Rcp161.htm', views: 3 },
      { filename: 'Rcp330.htm', views: 3 },
      { filename: 'Rcp316.htm', views: 3 },
      { filename: 'Rcp137.htm', views: 2 },
      { filename: 'Rcp035.htm', views: 2 },
      { filename: 'Rcp534.htm', views: 1 },
      { filename: 'Rcp250.htm', views: 1 },
      { filename: 'Rcp180.htm', views: 1 },    ]
  })
});
