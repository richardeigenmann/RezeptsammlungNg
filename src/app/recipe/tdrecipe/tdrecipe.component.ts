import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { IRecipe } from '../../shared/recipe';
// StarComponent import removed

@Component({
    selector: 'pm-tdrecipe',
    templateUrl: './tdrecipe.component.html',
    styleUrls: ['./tdrecipe.component.css'],
    standalone: true,
    imports: [CommonModule, RouterModule, NgbRatingModule], // StarComponent removed from imports
})
export class TdrecipeComponent {
  @Input() myRecipe!: IRecipe; // Added definite assignment assertion
  imageWidth: number = 50;
  imageMargin: number = 2;
  getStars() : number {
    return Number(this.myRecipe.stars);
  }
}
