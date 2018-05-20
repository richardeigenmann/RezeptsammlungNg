
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";




import { IRecipe } from "./recipe";

@Injectable()
export class ProductService {
    private _recipestUrl = './api/products/recipes.json';

    constructor(private _http: HttpClient) { }

    getProducts(): Observable<IRecipe[]> {
        return this._http.get<IRecipe[]>(this._recipestUrl)
            //.do(
            //    data => console.log('All: ' + JSON.stringify(data))
            //)
            //.catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return observableThrowError(err.message);
    }
}