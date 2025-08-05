import { Component, OnInit } from '@angular/core';
import { FavouritesComponent } from '../favourites/favourites.component';
import { StatsComponent } from '../stats/stats.component';
import { SimpleRecipeListComponent } from '../simple-recipe-list/simple-recipe-list.component';
//import { SimpleRecipeListComponent } from '../simple-recipe-list/simple-recipe-list.component';
//import { FavouritesComponent } from '../favourites/favourites.component'

@Component({
    selector: 'pm-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css'],
    imports: [FavouritesComponent, StatsComponent, SimpleRecipeListComponent]
})
export class HomepageComponent implements OnInit {

}
