import { Component, OnInit, inject } from '@angular/core';
import { FavoritesService } from '../services/favorites';

@Component({
    selector: 'pm-favourites',
    templateUrl: './favourites.html',
    styleUrls: ['./favourites.css'],
    imports: []
})
export class FavouritesComponent implements OnInit {
  private favoritesService = inject(FavoritesService, { skipSelf: true });


  recipes = []

  ngOnInit(): void {
    this.favoritesService.getFavoritesData().subscribe((data) => {
      this.recipes.push(data);
    });
  }

}
