import {
  Injectable,
  computed,
  inject,
} from '@angular/core';
import { RecipeFetchService } from './recipeFetchService';
import { IRecipe } from '../shared/recipe';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';

type CategoryPivotMap = Map<string, Map<string, number>>;

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private _recipeFetchService = inject(RecipeFetchService);

  // Declaratively fetch recipes as a Signal
  private readonly recipes = toSignal(
    this._recipeFetchService.getRecipes().pipe(
      catchError((err) => {
        console.error('CategoriesService data fetch error:', err);
        return of([]);
      })
    ),
    { initialValue: [] }
  );

  /**
   * The Pivot Map is now a computed signal.
   * It automatically recalculates whenever the recipes signal updates.
   */
  public readonly categoriesPivotSignalRO = computed<CategoryPivotMap>(() => {
    const localPivot = new Map<string, Map<string, number>>();
    const recipes = this.recipes();

    recipes.forEach((recipe) => {
      // JSON data from HttpClient arrives as a plain object,
      // even if the interface says Map. We iterate safely.
      const categoriesObj = recipe.categories as unknown as Record<string, string[]>;

      for (const [type, values] of Object.entries(categoriesObj || {})) {
        if (!localPivot.has(type)) {
          localPivot.set(type, new Map<string, number>());
        }
        const innerMap = localPivot.get(type)!;

        values.forEach((val) => {
          const count = innerMap.get(val) ?? 0;
          innerMap.set(val, count + 1);
        });
      }
    });

    return localPivot;
  });
}
