import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { CarouselComponent } from '../home/carousel.component'; // CarouselComponent is commented out in template
import { SimpleRecipeListComponent } from '../simple-recipe-list/simple-recipe-list.component';
import { FavouritesComponent } from '../favourites/favourites.component';
import { StatsComponent } from '../stats/stats.component';

@Component({
    selector: 'pm-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        // CarouselComponent, // CarouselComponent is commented out in template
        SimpleRecipeListComponent,
        FavouritesComponent,
        StatsComponent
    ],
})
export class HomepageComponent {

  constructor() { }

}
