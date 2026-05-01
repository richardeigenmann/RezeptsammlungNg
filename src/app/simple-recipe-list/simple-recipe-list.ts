import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RecipeFetchService } from '../services/recipeFetchService';

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
export class SimpleRecipeListComponent {
  private recipeFetchService = inject(RecipeFetchService);
  recipes = this.recipeFetchService.getRecipes();
}
