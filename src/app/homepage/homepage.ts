import { Component } from '@angular/core';
import { FavouritesComponent } from '../favourites/favourites';
import { StatsComponent } from '../stats/stats';
import { SimpleRecipeListComponent } from '../simple-recipe-list/simple-recipe-list';

@Component({
    selector: 'pm-homepage',
    standalone: true,
    styleUrls: [],
    imports: [FavouritesComponent, StatsComponent, SimpleRecipeListComponent],
    template: `
<br>

<div class="row">
  <div class="col">
    <h3>Richi's Lieblingsrezepte:</h3>
    <pm-favourites></pm-favourites>

  </div>

  <div class="col">
    <pm-stats></pm-stats>
  </div>
</div>

<h3>Index:</h3>
<pm-simple-recipe-list/>    
`})

export class HomepageComponent {
}
