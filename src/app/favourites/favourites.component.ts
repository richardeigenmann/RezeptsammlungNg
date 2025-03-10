import { Component, OnInit, SkipSelf } from '@angular/core';
import { FavoritesService } from '../services/favorites.service ';

@Component({
    selector: 'pm-favourites',
    templateUrl: './favourites.component.html',
    styleUrls: ['./favourites.component.css'],
    standalone: false
})
export class FavouritesComponent implements OnInit {

  constructor(@SkipSelf() private favoritesService: FavoritesService) { }

  recipes = []

  ngOnInit(): void {
    this.favoritesService.getFavoritesData().subscribe((data) => {
      this.recipes.push(data);
    });
  }

}
