import { Injectable, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { toArray } from 'rxjs/operators';
import { RecipeFetchService } from './recipeFetchService';
import { FavoriteRecipesService } from './favoriteRecipesService';

@Injectable({
  providedIn: 'root'
})
export class FavoriteRecipesViewService {
  private _recipeFetchService = inject(RecipeFetchService);
  private _favoritesService = inject(FavoriteRecipesService);

  // Declaratively convert data sources to Signals
  private _allRecipes = toSignal(this._recipeFetchService.getRecipes(), { initialValue: [] });

  // Note: FavoriteRecipesService emits items one-by-one, so we collect them into an array
  private _favoriteMetadata = toSignal(
    this._favoritesService.getFavoritesData().pipe(toArray()),
    { initialValue: [] }
  );

  /**
   * A reactive, computed signal representing the joined favorite recipes.
   * Re-calculates automatically only when recipes or favorites change.
   */
  public readonly favoriteRecipes = computed(() => {
    const recipes = this._allRecipes();
    const favorites = this._favoriteMetadata();

    if (!recipes.length || !favorites.length) return [];

    const recipesMap = new Map(
      recipes.map(r => [r.filename.split('/').pop() || '', r])
    );

    return favorites
      .map(fav => recipesMap.get(fav.recipe))
      .filter((recipe): recipe is import('../shared/recipe').IRecipe => !!recipe);
  });
}
