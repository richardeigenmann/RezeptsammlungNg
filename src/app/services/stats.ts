import { Injectable, signal, Signal, computed, inject } from '@angular/core';
import { IStat } from '../shared/stat';
import { RecipeFetchService } from './recipeFetchService';
import { RecipeSiteService } from './recipe-site';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private recipeFetchService = inject(RecipeFetchService);
  private recipeSiteService = inject(RecipeSiteService);

  private readonly _statsDate = signal('31.7.2026');

  private readonly _rawStats = signal([
    { filename: 'Rcp161.htm', views: 11 },
    { filename: 'Rcp269.htm', views: 5 },
    { filename: 'Rcp526.htm', views: 5 },
    { filename: 'Rcp171.htm', views: 4 },
    { filename: 'Rcp001.htm', views: 3 },
    { filename: 'Rcp074.htm', views: 3 },
    { filename: 'Rcp091.htm', views: 3 },
    { filename: 'Rcp175.htm', views: 3 },
    { filename: 'Rcp362.htm', views: 3 },
    { filename: 'Rcp403.htm', views: 3 },
  ]);

  private readonly _stats = computed<IStat[]>(() => {
    const recipes = this.recipeFetchService.getRecipesSignal()() || [];
    const siteUrl = this.recipeSiteService.getRecipeSite();

    // Map base filename (e.g. "Rcp161.htm") to recipe name
    const recipeMap = new Map<string, string>();
    for (const r of recipes) {
      if (r.filename) {
        const base = r.filename.substring(r.filename.lastIndexOf('/') + 1);
        recipeMap.set(base, r.name);
      }
    }

    return this._rawStats().map(raw => {
      const name = recipeMap.get(raw.filename) || raw.filename;
      return {
        recipeName: name,
        url: `${siteUrl}/${raw.filename}`,
        views: raw.views
      };
    });
  });

  getStatsDate(): Signal<string> {
    return this._statsDate.asReadonly();
  }

  getStatsData(): Signal<IStat[]> {
    return this._stats;
  }
}
