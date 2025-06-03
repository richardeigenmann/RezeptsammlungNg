import { Observable } from 'rxjs';
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
        this.recipesUrl = _recipeSiteService.getRecipesUrl();
     }

    getRecipes(): Observable<IRecipe[]> {
        return this._http.get<IRecipe[]>(this.recipesUrl);
    }
}
