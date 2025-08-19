import { Component, Input } from '@angular/core';
import { IRecipe } from '../../shared/recipe';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { UpperCasePipe } from '@angular/common';

@Component({
    selector: 'tr[pm-recipe-row]',
    templateUrl: './tdrecipe.html',
    styleUrls: ['./tdrecipe.css'],
    imports: [NgbRating, UpperCasePipe]
})

export class Tdrecipe {
  @Input() myRecipe: IRecipe;
  imageMargin = 2;
  getStars() : number {
    return Number(this.myRecipe.stars);
  }
}
