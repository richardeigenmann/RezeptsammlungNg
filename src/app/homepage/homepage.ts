import { Component } from '@angular/core';
import { FavouritesRecipesComponent } from '../favouriteRecipes/favouriteRecipes';
import { StatsComponent } from '../stats/stats';
import { SimpleRecipeListComponent } from '../simple-recipe-list/simple-recipe-list';

@Component({
    selector: 'app-homepage',
    standalone: true,
    styleUrls: [],
    imports: [FavouritesRecipesComponent, StatsComponent, SimpleRecipeListComponent],
    template: `
<div class="row">
  <div class="col">
    <app-favourites />
 </div>

  <div class="col">
    <app-google-stats />
  </div>
</div>

<h3>Index:</h3>
<app-all-recipies-as-list/>    
`})

export class HomepageComponent {
}
