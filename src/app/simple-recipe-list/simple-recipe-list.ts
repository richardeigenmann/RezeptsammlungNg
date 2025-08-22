import { Component, OnInit, inject } from '@angular/core';
import { RecipeSiteService } from '../services/recipe-site';
import { RecipeService } from '../services/recipe';
import { IRecipe } from '../shared/recipe';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-all-recipies-as-list',
    template: `
@for(recipe of recipes; track $index) {  
  <a [href]='recipe.filename'>{{recipe.name}}</a><br>
}`,
    styleUrls: [],
    standalone: true,
    imports: [CommonModule]
})
export class SimpleRecipeListComponent implements OnInit {
  recipes: IRecipe[] = [];
  errorMessage = '';

  private recipeSiteService = inject(RecipeSiteService);
  private recipeService = inject(RecipeService);

  ngOnInit(): void {
    this.recipeService.getRecipes().pipe(
      map(recipes => recipes.map(recipe => ({
        ...recipe,
        imageFilename: `${this.recipeSiteService.getRecipeSite()}/${recipe.imageFilename}`,
        filename: `${this.recipeSiteService.getRecipeSite()}/${recipe.filename}`
      } as IRecipe)))
    ).subscribe({
      next: (processedRecipes: IRecipe[]) => this.recipes = processedRecipes,
      error: (error) => this.errorMessage = error.message || 'An unknown error occurred',
    });
  }
}
