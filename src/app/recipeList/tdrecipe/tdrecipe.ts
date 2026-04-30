import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { IRecipe } from '../../shared/recipe';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { UpperCasePipe } from '@angular/common';

/* eslint-disable @angular-eslint/component-selector */
@Component({
    selector: 'tr[app-recipe-row]',
    standalone: true,
    templateUrl: './tdrecipe.html',
    styleUrl: './tdrecipe.css',
    imports: [NgbRating, UpperCasePipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class Tdrecipe {
  myRecipe = input.required<IRecipe>();

  imageMargin = 2;
  stars = computed(() => Number(this.myRecipe().stars));
}
