import { Component, inject } from '@angular/core';
import { FavoriteRecipesViewService } from '../services/favoriteRecipesViewService';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-favourites',
    standalone: true,
    styleUrls: [],
    imports: [AsyncPipe],
    template: `
<h3>Richi's Lieblingsrezepte:</h3>
<p>
  @if(favoriteRecipes$ | async; as favoriteRecipes ) {
    @for(recipe of favoriteRecipes; track $index) {
      <a href="{{recipe.filename}}">{{recipe.name}}<br></a>
    }
 }
</p>
`})

export class FavouritesRecipesComponent {
  private favoriteRecipesViewService = inject(FavoriteRecipesViewService);
  favoriteRecipes$ = this.favoriteRecipesViewService.getFavoriteRecipes();
}  
