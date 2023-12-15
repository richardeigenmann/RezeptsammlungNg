import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RecipeSiteService {
    public getRecipeSite(): string { return 'https://richardeigenmann.github.io/Rezeptsammlung'; }
    public getRecipesUrl(): string { return 'https://richardeigenmann.github.io/Rezeptsammlung/recipesArray.json'; }
}
