import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRecipe } from '../shared/recipe';
import { RecipeSiteService } from './recipe-site.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
    private recipesUrl: string;

    constructor(private _http: HttpClient, private _recipeSiteService: RecipeSiteService) {
        console.log("Running ctr of RecipeService");
        this.recipesUrl = _recipeSiteService.getRecipesUrl();
        console.log("The url or the recipes is ", this.recipesUrl);
     }

    getRecipes(): Observable<IRecipe[]> {
        return this._http.get<IRecipe[]>(this.recipesUrl);
    }
}
