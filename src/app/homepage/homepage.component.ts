import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from '../home/carousel.component'; // Import CarouselComponent

@Component({
    selector: 'pm-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css'],
    standalone: true,
    imports: [CommonModule, CarouselComponent], // Add CarouselComponent to imports
})
export class HomepageComponent {

  constructor() { }

}
