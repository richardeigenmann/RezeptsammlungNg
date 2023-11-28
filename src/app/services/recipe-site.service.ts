import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RecipeSiteService {

    // problem: not https
    // public getRecipeSite(): string { return 'http://richieigenmann.users.sourceforge.net'; }
    public getRecipeSite(): string { return 'https://richardeigenmann.github.io/Rezeptsammlung'; }
    //public getRecipesUrl(): string { return './api/products/recipes.json'; }
    public getRecipesUrl(): string { return 'https://richardeigenmann.github.io/Rezeptsammlung/recipesArray.json'; }
    

}
