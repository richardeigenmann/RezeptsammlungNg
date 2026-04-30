import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FavoriteRecipesViewService } from '../services/favoriteRecipesViewService';

@Component({
    selector: 'app-favourites',
    standalone: true,
    styleUrls: [],
    imports: [],
    template: `
<h3>Richi's Lieblingsrezepte:</h3>
<p>
  @for(recipe of favoriteRecipes(); track recipe.filename) {
    <a [href]="recipe.filename" target="_blank" rel="noopener noreferrer">{{recipe.name}}<br></a>
  }
</p>
`,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class FavouritesRecipesComponent {
  private favoriteRecipesViewService = inject(FavoriteRecipesViewService);
  favoriteRecipes = this.favoriteRecipesViewService.favoriteRecipes;
}
