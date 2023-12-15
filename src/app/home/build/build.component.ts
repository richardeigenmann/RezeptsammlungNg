import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RecipeSiteService } from '../../services/recipe-site.service';
import { RecipeService } from '../../services/recipe.service';
import { IRecipe } from '../../shared/recipe';

@Component({
  selector: 'pm-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit {
  buildTimeStamp: string;
  recipeSite: string;
  recipesUrl: string;
  windowLocationHref: string;
  fullRecipesUrl: string;
  appVersion: string;
  angularVersion: string;

  recipes: IRecipe[] = [];
  errorMessage: string = '';


  constructor(private _recipeSiteService: RecipeSiteService, private _recipeService: RecipeService) {
    this.buildTimeStamp = environment.buildTimeStamp;
    this.recipeSite = _recipeSiteService.getRecipeSite();
    this.recipesUrl = _recipeSiteService.getRecipesUrl();
    this.windowLocationHref = window.location.href;
    this.fullRecipesUrl = _recipeSiteService.getRecipesUrl();
    this.appVersion = environment.appVersion;
    this.angularVersion = environment.angularVersion;
  }

  ngOnInit(): void {
    this._recipeService.getRecipes()
      .subscribe({
        next: (subscribedRecipes: IRecipe[]) => {
          subscribedRecipes.forEach(function (element) {
            element.imageFilename = this._recipeSiteService.getRecipeSite() + '/' + element.imageFilename;
            element.filename = this._recipeSiteService.getRecipeSite() + '/' + element.filename;
          });
          this.recipes = subscribedRecipes;
        },
        error: (error) => this.errorMessage = <any>error
      });
  }

}
