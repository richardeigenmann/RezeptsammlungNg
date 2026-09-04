import { Injectable, signal, Signal, computed, inject } from '@angular/core';
import { IStat } from '../shared/stat';
import { RecipeFetchService } from './recipeFetchService';
import { RecipeSiteService } from './recipe-site';
import { STATS_DATA } from './stats-data.token';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private recipeFetchService = inject(RecipeFetchService);
  private recipeSiteService = inject(RecipeSiteService);
  private statsData = inject(STATS_DATA);

  private readonly _statsDate = signal(this.statsData.date);

  private readonly _rawStats = signal(this.statsData.stats);

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
