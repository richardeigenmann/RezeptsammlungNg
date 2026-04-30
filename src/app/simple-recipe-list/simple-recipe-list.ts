import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { RecipeFetchService } from '../services/recipeFetchService';
import { IRecipe } from '../shared/recipe';

@Component({
    selector: 'app-all-recipies-as-list',
    template: `
@for(recipe of recipes(); track $index) {
  <a [href]='recipe.filename' target="_blank" rel="noopener noreferrer">{{recipe.name}}</a><br>
}`,
    styleUrls: [],
    standalone: true,
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleRecipeListComponent implements OnInit {
  recipes = signal<IRecipe[]>([]);
  errorMessage = signal('');

  private recipeFetchService = inject(RecipeFetchService);

  ngOnInit(): void {

    this.recipeFetchService.getRecipes().pipe().subscribe({
      next: (processedRecipes: IRecipe[]) => this.recipes.set(processedRecipes),
      error: (error) => this.errorMessage.set(error.message || 'An unknown error occurred'),
    });
  }
}
