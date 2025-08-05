import { Component, OnInit, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RecipeSiteService } from '../../services/recipe-site.service';
import { RecipeService } from '../../services/recipe.service';
import { IRecipe } from '../../shared/recipe';
import { NgFor } from '@angular/common';

@Component({
    selector: 'pm-build',
    templateUrl: './build.component.html',
    styleUrls: ['./build.component.css'],
    imports: [NgFor]
})
export class BuildComponent implements OnInit {
  private _recipeSiteService = inject(RecipeSiteService);
  private _recipeService = inject(RecipeService);

  buildTimeStamp: string;
  recipeSite: string;
  recipesUrl: string;
  windowLocationHref: string;
  fullRecipesUrl: string;
  appVersion: string;
  angularVersion: string;
  bootstrapVersion: string;

  recipes: IRecipe[] = [];
  errorMessage = '';


  constructor() {
    const _recipeSiteService = this._recipeSiteService;

    this.buildTimeStamp = environment.buildTimeStamp;
    this.recipeSite = _recipeSiteService.getRecipeSite();
    this.recipesUrl = _recipeSiteService.getRecipesUrl();
    this.windowLocationHref = window.location.href;
    this.fullRecipesUrl = _recipeSiteService.getRecipesUrl();
    this.appVersion = environment.appVersion;
    this.angularVersion = environment.angularVersion;
    this.bootstrapVersion = environment.bootstrapVersion;
  }

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
        error: (error) => this.errorMessage = error as any
      });
  }

}
