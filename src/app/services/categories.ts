import {
  Injectable,
  Signal,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { RecipeFetchService } from './recipeFetchService';
import { HttpErrorResponse } from '@angular/common/http';
import { IRecipe } from '../shared/recipe';
import { BehaviorSubject, Observable } from 'rxjs';

type CategoryPivotMap = Map<string, Map<string, number>>;

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private _recipeFetchService = inject(RecipeFetchService);

  /**
   * Map of a Map.
   * outer map is keyed by category type (Speise-Kategorie, Zutat, Bewertung, ...)
   * inner map is keyed by category (Vegetarish, Zitronen, 4 Sterne)
   * the number is the amount of recipes for the type and category
   */
  private _categoriesPivotSignal: WritableSignal<CategoryPivotMap> = signal(
    new Map()
  );
  public readonly categoriesPivotSignalRO: Signal<CategoryPivotMap> =
    this._categoriesPivotSignal.asReadonly();

  errorMessage = '';

  private _categoriesPivot = new BehaviorSubject<
    Map<string, Map<string, number>>
  >(new Map<string, Map<string, number>>());
  public readonly categoriesPivotRO: Observable<
    Map<string, Map<string, number>>
  > = this._categoriesPivot.asObservable();

  constructor() {
    this._recipeFetchService.getRecipes().subscribe({
      next: (recipes) => {
        // Use a local, mutable map during calculation
        const localPivot = new Map<string, Map<string, number>>();
        recipes.forEach((recipe) => {
          this.addRecipeToSignal(recipe, localPivot);
        });

        this._categoriesPivotSignal.set(localPivot);
      },
      error: (error: HttpErrorResponse) => {
        // A client-side or network error occurred.
        if (error.error instanceof ErrorEvent) {
          this.errorMessage = `An error occurred: ${error.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          this.errorMessage = `Backend returned code ${error.status}, body was: ${error.message}`;
        }
      },
    });
  }

  // Private helper to get/create a category type within a given map
  private getCategoryTypeSignal(
    s: string,
    pivotMap: CategoryPivotMap
  ): Map<string, number> {
    if (!pivotMap.has(s)) {
      pivotMap.set(s, new Map<string, number>());
    }
    return pivotMap.get(s)!;
  }

  private addRecipeToSignal(element: IRecipe, pivotMap: CategoryPivotMap) {
    for (const k in element.categories) {
      if (Object.prototype.hasOwnProperty.call(element.categories, k)) {
        const categoryType = this.getCategoryTypeSignal(k, pivotMap);
        for (const i of element.categories[k]) {
          const count = categoryType.get(i) ?? 0;
          categoryType.set(i, count + 1);
        }
      }
    }
  }
}
