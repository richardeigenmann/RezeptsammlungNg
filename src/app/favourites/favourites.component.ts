import { Component, OnInit, inject } from '@angular/core';
import { FavoritesService } from '../services/favorites.service ';
import { NgFor } from '@angular/common';

@Component({
    selector: 'pm-favourites',
    templateUrl: './favourites.component.html',
    styleUrls: ['./favourites.component.css'],
    imports: [NgFor]
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
