import { Component, OnInit, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { RecipeSiteService } from '../services/recipe-site';
import { RecipeFetchService } from '../services/recipeFetchService';
import { IRecipe } from '../shared/recipe';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-build',
    styleUrls: [],
    imports: [],
    template: `
<div class="container">
  <h3>Build Information</h3>
  <p>Build date: {{buildTimeStamp}}</p>
  <p>Recipes source: <a href='{{recipeSite}}'>{{recipeSite}}</a></p>
  <p>Recipes url: <a href='{{fullRecipesUrl}}'>{{fullRecipesUrl}}</a></p>
  <p>Total Recipes: {{recipes.length}}</p>
  <p>App version: {{appVersion}}</p>
  <p>Angular version: {{angularVersion}}</p>
  <p>Bootstrap version: {{bootstrapVersion}}</p>
</div>

<div class="container">
  @for(recipe of recipes; track $index) {
    {{recipe.filename.substr(recipe.filename.lastIndexOf("/")+1)}}:
          <a [href]='recipe.filename'>
            {{recipe.name}}
          </a>,
    }
</div>
`})

export class BuildPanelComponent implements OnInit {
  private _recipeSiteService = inject(RecipeSiteService);
  private _recipeFetchService = inject(RecipeFetchService);

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
    this._recipeFetchService.getRecipes()
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
