import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../products/recipe.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /**
   * Map of a Map.
   * outer map is keyed by category type (Speise-Kategorie, Zutat, Bewertung, ...)
   * inner map is keyed by category (Vegetarish, Zitronen, 4 Sterne)
   * the number is the amount of recipes for the type and category
   */
  categoriesPivot = new Map<string, Map<string, number>>();
  errorMessage: string = '';

  constructor(private _recipeService: RecipeService) {
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
  /**
   * Build up our own categories map from the incoming recipes
   */
  ngOnInit() {
    let thisHandle = this; // this changes in the subscribe - saving it here to use it later
    this._recipeService.getRecipes()
      .subscribe( recipes => {
          recipes.forEach(function (element) {
            thisHandle.addRecipe(element);
          });
        },
        error => this.errorMessage = <any>error
      );
  }

  getTitle(): string { return 'Richi\'s Rezeptsammlung'; }
}


