import { Injectable } from '@angular/core';

@Injectable()
export class RecipeSiteService {

    public getRecipeSite(): string { return 'http://richieigenmann.users.sourceforge.net'; }
    public getRecipesUrl(): string { return './api/products/recipes.json'; };

}
