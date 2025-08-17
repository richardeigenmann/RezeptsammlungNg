import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRecipe } from '../shared/recipe';
import { RecipeSiteService } from './recipe-site';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    private http = inject(HttpClient);
    private recipeSiteService = inject(RecipeSiteService);
    private recipesUrl = this.recipeSiteService.getRecipesUrl();

    getRecipes(): Observable<IRecipe[]> {
        return this.http.get<IRecipe[]>(this.recipesUrl)
            .pipe(
                // tap(data => console.log('All: ' + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    private handleError(err) {
        console.error(err.message);
        return throwError(() => err);
    }
}
