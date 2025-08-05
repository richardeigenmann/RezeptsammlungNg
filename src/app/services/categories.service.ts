import { Injectable, inject } from '@angular/core';
import { RecipeService } from './recipe.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {
    private _recipeService = inject(RecipeService);


    /**
     * Map of a Map.
     * outer map is keyed by category type (Speise-Kategorie, Zutat, Bewertung, ...)
     * inner map is keyed by category (Vegetarish, Zitronen, 4 Sterne)
     * the number is the amount of recipes for the type and category
     */
    categoriesPivot = new Map<string, Map<string, number>>();
    errorMessage = '';

    // read https://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/
    private _categoriesPivot
        = new BehaviorSubject<Map<string, Map<string, number>>>(new Map<string, Map<string, number>>());
    public readonly categoriesPivotRO: Observable<Map<string, Map<string, number>>>
        = this._categoriesPivot.asObservable();

        constructor() {
            this._recipeService.getRecipes()
              .subscribe({
                next: (recipes) => {
                  recipes.forEach((recipe) => {
                    this.addRecipe(recipe);
                  });
                  this._categoriesPivot.next(this.categoriesPivot);
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

    /**
     * This function checks if the supplied category exists, creates it
     * if necessary and returns the new category.
     * @param s The category type
     */
    private getCategoryType(s: string): Map<string, number> {
        if (!this.categoriesPivot.has(s)) {
            this.categoriesPivot.set(s, new Map<string, number>());
        }
        return this.categoriesPivot.get(s);
    }

    private addRecipe(element) {
        for (const k in element.categories) {
            if (element.categories.hasOwnProperty(k)) {
                const categoryType = this.getCategoryType(k);
                for (const i of element.categories[k]) {
                    if (!categoryType.has(i)) {
                        categoryType.set(i, 0);
                    }
                    const count = categoryType.get(i);
                    categoryType.set(i, count + 1);
                }
            }
        }
    }


    public getCategories(): Observable<Map<string, Map<string, number>>> {
        return this.categoriesPivotRO;
    }


    public getTitle(): string { return 'Richi\'s Rezeptsammlung'; }
}
