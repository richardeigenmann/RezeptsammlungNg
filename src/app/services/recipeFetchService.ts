import { throwError, Observable } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRecipe } from '../shared/recipe';
import { RecipeSiteService } from './recipe-site';

@Injectable({
    providedIn: 'root'
})

export class RecipeFetchService {
    private httpClient = inject(HttpClient);
    private recipeSiteService = inject(RecipeSiteService);
    private recipesUrl = this.recipeSiteService.getRecipesUrl();

    // Store the observable as a class property
    private recipes$ = this.httpClient.get<IRecipe[]>(this.recipesUrl)
        .pipe(
            // Caches the last value and replays it to new subscribers
            shareReplay({ bufferSize: 1, refCount: true }),
            catchError(this.handleError)
        );

    getRecipes(): Observable<IRecipe[]> {
        return this.recipes$;
    }

    private handleError(err) {
        console.error(err.message);
        return throwError(() => err);
    }
}
