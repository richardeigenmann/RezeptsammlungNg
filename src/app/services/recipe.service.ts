import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRecipe } from '../shared/recipe';

@Injectable()
export class RecipeService {
    private _recipestUrl = './api/products/recipes.json';

    constructor(private _http: HttpClient) { }

    getRecipes(): Observable<IRecipe[]> {
        return this._http.get<IRecipe[]>(this._recipestUrl);
    }
}
