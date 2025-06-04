import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecipeSiteService } from '../services/recipe-site.service';
import { RecipeService } from '../services/recipe.service';
import { IRecipe } from '../shared/recipe';
// StarComponent import removed

@Component({
    selector: 'pm-simple-recipe-list',
    templateUrl: './simple-recipe-list.component.html',
    styleUrls: ['./simple-recipe-list.component.css'],
    standalone: true,
    imports: [CommonModule, RouterModule], // StarComponent removed from imports
})
export class SimpleRecipeListComponent implements OnInit {


  recipes: IRecipe[] = [];
  errorMessage: string = '';

  constructor(private _recipeSiteService: RecipeSiteService, private _recipeService: RecipeService) { }

  ngOnInit(): void {
    this._recipeService.getRecipes()
      .subscribe({
        next: (subscribedRecipes: IRecipe[]) => {
          subscribedRecipes.forEach((element) => {
            element.imageFilename = this._recipeSiteService.getRecipeSite() + '/' + element.imageFilename;
            element.filename = this._recipeSiteService.getRecipeSite() + '/' + element.filename;
          });
          this.recipes = subscribedRecipes;
        },
        error: (error: HttpErrorResponse) => this.errorMessage = error.message,
      });
  }

}
