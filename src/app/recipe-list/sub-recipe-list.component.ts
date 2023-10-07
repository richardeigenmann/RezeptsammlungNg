import { Component, OnInit } from '@angular/core';
import { RecipeSiteService } from '../services/recipe-site.service';
import { RecipeService } from '../services/recipe.service';
import { IRecipe } from '../shared/recipe';

@Component({
  selector: 'pm-recipe-list',
  templateUrl: './sub-recipe-list.component.html',
  styleUrls: ['./sub-recipe-list.component.css']
})
export class SubRecipeListComponent implements OnInit {


  recipes: IRecipe[] = [];
  errorMessage: string = '';

  constructor(private _recipeSiteService: RecipeSiteService, private _recipeService: RecipeService) { }

  ngOnInit(): void {
    this._recipeService.getRecipes()
    .subscribe(
        (subscribedRecipes: IRecipe[]) => {
            subscribedRecipes.forEach(function (element) {
                element.imageFilename = this._recipeSiteService.getRecipeSite() + '/' + element.imageFilename;
                element.filename = this._recipeSiteService.getRecipeSite() + '/' + element.filename;
            }, this);
            this.recipes = subscribedRecipes;
        },
        error => this.errorMessage = <any>error
    );
  }

}
