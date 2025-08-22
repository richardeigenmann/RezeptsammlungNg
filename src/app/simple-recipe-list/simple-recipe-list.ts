import { Component, OnInit, inject } from '@angular/core';
import { RecipeSiteService } from '../services/recipe-site';
import { RecipeService } from '../services/recipe';
import { IRecipe } from '../shared/recipe';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-all-recipies-as-list',
    template: `
@for(recipe of recipes; track $index) {  
  <a [href]='recipe.filename'>{{recipe.name}}</a><br>
}`,
    styleUrls: [],
    standalone: true,
    imports: []
})
export class SimpleRecipeListComponent implements OnInit {
  recipes: IRecipe[] = [];
  errorMessage = '';

  private recipeSiteService = inject(RecipeSiteService);
  private recipeService = inject(RecipeService);

  ngOnInit(): void {
    const recipeSite = this.recipeSiteService.getRecipeSite();
    
    this.recipeService.getRecipes().pipe(
      map(recipes => recipes.map(recipe => ({
        ...recipe,
        imageFilename: `${recipeSite}/${recipe.imageFilename}`,
        filename: `${recipeSite}/${recipe.filename}`
      } as IRecipe)))
    ).subscribe({
      next: (processedRecipes: IRecipe[]) => this.recipes = processedRecipes,
      error: (error) => this.errorMessage = error.message || 'An unknown error occurred',
    });
  }
}
