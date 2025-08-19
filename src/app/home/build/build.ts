import { Component, OnInit, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RecipeSiteService } from '../../services/recipe-site';
import { RecipeService } from '../../services/recipe';
import { IRecipe } from '../../shared/recipe';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'pm-build',
    templateUrl: './build.html',
    styleUrls: [],
    imports: []
})
export class BuildComponent implements OnInit {
  private _recipeSiteService = inject(RecipeSiteService);
  private _recipeService = inject(RecipeService);

  buildTimeStamp: string;
  recipeSite: string;
  recipesUrl: string;
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
        error: (error: HttpErrorResponse) => {
          // A client-side or network error occurred.
          if (error.error instanceof ErrorEvent) {
            this.errorMessage = `An error occurred: ${error.error.message}`;
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            this.errorMessage = `Backend returned code ${error.status}, body was: ${error.message}`;
          }
        }
      });
  }

}
