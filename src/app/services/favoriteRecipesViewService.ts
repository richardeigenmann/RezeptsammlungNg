import { Injectable, inject } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map, toArray } from 'rxjs/operators'; // Import toArray
import { IRecipe } from '../shared/recipe';
import { RecipeFetchService } from './recipeFetchService';
import { FavoriteRecipesService } from './favoriteRecipesService';

@Injectable({
  providedIn: 'root'
})
export class FavoriteRecipesViewService {
  private recipeFetchService = inject(RecipeFetchService);
  private favoritesService = inject(FavoriteRecipesService);

  getFavoriteRecipes(): Observable<IRecipe[]> {

    const allRecipes$ = this.recipeFetchService.getRecipes().pipe();

    const favoriteUrls$ = this.favoritesService.getFavoritesData().pipe(
      toArray() // Collect all emitted favorites into a single array
    );

    return forkJoin({
      allRecipes: allRecipes$,
      favoriteUrls: favoriteUrls$
    }).pipe(
      map(results => {
        const favoriteRecipes: IRecipe[] = [];
        const recipesMap = new Map<string, IRecipe>();

        // Use a Map for O(1) lookup
        results.allRecipes.forEach(recipe => {
          const filename = recipe.filename.split('/').pop();
          if (filename) {
            recipesMap.set(filename, recipe);
          }
        });

        results.favoriteUrls.forEach(favoriteUrl => {
          const filename = favoriteUrl.recipe;
          const matchedRecipe = recipesMap.get(filename);
          if (matchedRecipe) {
            favoriteRecipes.push(matchedRecipe);
          }
        });

        return favoriteRecipes;
      })
    );
  }
}