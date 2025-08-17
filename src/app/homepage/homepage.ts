import { Component } from '@angular/core';
import { FavouritesComponent } from '../favourites/favourites';
import { StatsComponent } from '../stats/stats';
import { SimpleRecipeListComponent } from '../simple-recipe-list/simple-recipe-list';

@Component({
    selector: 'pm-homepage',
    templateUrl: './homepage.html',
    styleUrls: ['./homepage.css'],
    imports: [FavouritesComponent, StatsComponent, SimpleRecipeListComponent]
})
export class HomepageComponent {

}
