import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CategoriesService {

    /**
     * Map of a Map.
     * outer map is keyed by category type (Speise-Kategorie, Zutat, Bewertung, ...)
     * inner map is keyed by category (Vegetarish, Zitronen, 4 Sterne)
     * the number is the amount of recipes for the type and category
     */
    categoriesPivot = new Map<string, Map<string, number>>();
    errorMessage: string = '';

    // read https://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/
    private _categoriesPivot: BehaviorSubject<Map<string, Map<string, number>>> = new BehaviorSubject(new Map<string, Map<string, number>>());
    public readonly categoriesPivotRO: Observable<Map<string, Map<string, number>>> = this._categoriesPivot.asObservable();

    constructor(private _recipeService: RecipeService) {
        this._recipeService.getRecipes()
            .subscribe(recipes => {
                recipes.forEach(function (element) {
                    this.addRecipe(element);
                }, this);
                this._categoriesPivot.next(this.categoriesPivot);
            },
                error => this.errorMessage = <any>error
            );
    }

    /**
     * This function checks if the supplied category exists, creates it
     * if necessary and returns the new category.
     * @param s 
     */
    private getCategoryType(s: string): Map<string, number> {
        if (!this.categoriesPivot.has(s)) {
            this.categoriesPivot.set(s, new Map<string, number>());
        }
        return this.categoriesPivot.get(s);
    }

    private addRecipe(element) {
        for (let k in element.categories) {
            let categoryType = this.getCategoryType(k);
            for (let i of element.categories[k]) {
                if (!categoryType.has(i)) {
                    categoryType.set(i, 0);
                }
                let count = categoryType.get(i);
                categoryType.set(i, count + 1);
            }
        }
    }


    public getCategories(): Observable<Map<string, Map<string, number>>> {
        return this.categoriesPivotRO;
    }


    public getTitle(): string { return 'Richi\'s Rezeptsammlung'; }
}


