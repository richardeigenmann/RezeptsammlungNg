import { Component, OnInit, inject } from '@angular/core';
import { FavoritesService } from '../services/favorites';

@Component({
    selector: 'app-favourites',
    standalone: true,
    styleUrls: [],
    imports: [],
    template: `
<h3>Richi's Lieblingsrezepte:</h3>
<p>
  @for(recipe of favouriteRecipes; track $index) {
    <a href="{{recipe.url}}">{{recipe.name}}<br></a>
  }
</p>
`})

export class FavouritesComponent implements OnInit {
  private favoritesService = inject(FavoritesService, { skipSelf: true });


  favouriteRecipes = []

  ngOnInit(): void {
    this.favoritesService.getFavoritesData().subscribe((favorite) => {
      const filename = favorite.url.split('/').pop();
      console.log(filename)
      this.favouriteRecipes.push(favorite);
    });
  }

}
