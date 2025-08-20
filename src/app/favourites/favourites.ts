import { Component, OnInit, inject } from '@angular/core';
import { FavoritesService } from '../services/favorites';

@Component({
    selector: 'pm-favourites',
    standalone: true,
    styleUrls: [],
    imports: [],
    template: `
<p>
  @for(recipe of recipes; track $index) {
    <a href="{{recipe.url}}">{{recipe.name}}<br></a>
  }
</p>
`})

export class FavouritesComponent implements OnInit {
  private favoritesService = inject(FavoritesService, { skipSelf: true });


  recipes = []

  ngOnInit(): void {
    this.favoritesService.getFavoritesData().subscribe((data) => {
      this.recipes.push(data);
    });
  }

}
