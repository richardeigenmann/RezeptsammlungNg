
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IRecipe } from "./recipe";

@Injectable()
export class ProductService {
    private _recipestUrl = './api/products/recipes.json';

    constructor(private _http: HttpClient) { }

    getRecipes(): Observable<IRecipe[]> {
        return this._http.get<IRecipe[]>(this._recipestUrl);
    }

}