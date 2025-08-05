import { Component, Input } from '@angular/core';
import { IRecipe } from '../../shared/recipe';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { UpperCasePipe } from '@angular/common';

@Component({
    selector: '[pm-tdrecipe]',
    templateUrl: './tdrecipe.component.html',
    styleUrls: ['./tdrecipe.component.css'],
    imports: [NgbRating, UpperCasePipe]
})
export class TdrecipeComponent {
  @Input() myRecipe: IRecipe;
  imageWidth = 50;
  imageMargin = 2;
  getStars() : number {
    return Number(this.myRecipe.stars);
  }
}
