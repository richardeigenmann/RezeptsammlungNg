import { Injectable, inject, resource, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { IRecipe } from '../shared/recipe';
import { RecipeSiteService } from './recipe-site';

@Injectable({
    providedIn: 'root'
})

export class RecipeFetchService {
    private httpClient = inject(HttpClient);
    private recipeSiteService = inject(RecipeSiteService);
    private recipesUrl = this.recipeSiteService.getRecipesUrl();
    private recipeSite = this.recipeSiteService.getRecipeSite();

    private recipesResource = resource({
        loader: async () => {
            const recipes = await firstValueFrom(this.httpClient.get<IRecipe[]>(this.recipesUrl));
            return recipes.map(recipe => ({
                ...recipe,
                filename: this.recipeSite + '/' + recipe.filename,
                imageFilename: this.recipeSite + '/' + recipe.imageFilename
            }));
        }
    });

    getRecipes(): Signal<IRecipe[]> {
        return this.recipesResource.value.asReadonly() as Signal<IRecipe[]>;
    }

    getRecipesSignal() {
        return this.recipesResource.value;
    }
}
