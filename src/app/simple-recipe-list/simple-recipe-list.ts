import { Component, OnInit, inject } from '@angular/core';
import { RecipeFetchService } from '../services/recipeFetchService';
import { IRecipe } from '../shared/recipe';

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

  private recipeFetchService = inject(RecipeFetchService);

  ngOnInit(): void {

    this.recipeFetchService.getRecipes().pipe().subscribe({
      next: (processedRecipes: IRecipe[]) => this.recipes = processedRecipes,
      error: (error) => this.errorMessage = error.message || 'An unknown error occurred',
    });
  }
}
