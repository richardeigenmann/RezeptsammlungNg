import { CommonModule } from '@angular/common';
import { Component, OnInit, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FavoritesService, IFavoriteRecipe } from '../services/favorites.service '; // Import IFavoriteRecipe
import { StarComponent } from '../shared/star.component';

@Component({
    selector: 'pm-favourites',
    templateUrl: './favourites.component.html',
    styleUrls: ['./favourites.component.css'],
    standalone: true,
    imports: [CommonModule, RouterModule, StarComponent],
})
export class FavouritesComponent implements OnInit {

  constructor(@SkipSelf() private favoritesService: FavoritesService) { }

  recipes: IFavoriteRecipe[] = []; // Typed the recipes array

  ngOnInit(): void {
    this.favoritesService.getFavoritesData().subscribe((data: IFavoriteRecipe) => { // Typed the data
      this.recipes.push(data);
    });
  }

}
