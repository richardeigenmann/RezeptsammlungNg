import { Component, Input } from '@angular/core';
import { IRecipe } from '../../shared/recipe';

@Component({
    selector: '[pm-tdrecipe]',
    templateUrl: './tdrecipe.component.html',
    styleUrls: ['./tdrecipe.component.css'],
    standalone: false
})
export class TdrecipeComponent {
  @Input() myRecipe: IRecipe;
  imageWidth: number = 50;
  imageMargin: number = 2;
  getStars() : number {
    return Number(this.myRecipe.stars);
  }
}
