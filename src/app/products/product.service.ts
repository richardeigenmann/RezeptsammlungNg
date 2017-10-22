import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IRecipe } from "./recipe";

@Injectable()
export class ProductService {
    private _recipestUrl = './api/products/recipes.json';

    constructor(private _http: HttpClient) { }

    getProducts(): Observable<IRecipe[]> {
        return this._http.get<IRecipe[]>(this._recipestUrl)
            .do(
                data => console.log('All: ' + JSON.stringify(data))
            )
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}