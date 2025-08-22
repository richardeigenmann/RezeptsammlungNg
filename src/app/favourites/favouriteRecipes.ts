import { Component, OnInit, inject } from '@angular/core';
import { FavoriteRecipesService } from '../services/favoriteRecipesService';
import { RecipeFetchService } from '../services/recipeFetchService';
import { RecipeSiteService } from '../services/recipe-site';
import { IRecipe } from '../shared/recipe';
import { map, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-favourites',
    standalone: true,
    styleUrls: [],
    imports: [],
    template: `
<h3>Richi's Lieblingsrezepte:</h3>
<p>
  @for(recipe of favouriteRecipes; track $index) {
    <a href="{{recipe.filename}}">{{recipe.name}}<br></a>
  }
</p>
`})

export class FavouritesRecipesComponent implements OnInit {
  private recipeSiteService = inject(RecipeSiteService);
  private recipeFetchService = inject(RecipeFetchService);
  private favoritesService = inject(FavoriteRecipesService, { skipSelf: true });
  
  recipes: IRecipe[] = [];
  favouriteRecipes: IRecipe[] = []
  errorMessage = '';

  ngOnInit(): void {
    const recipeSite = this.recipeSiteService.getRecipeSite();

    this.recipeFetchService.getRecipes().pipe(
      map(receivedRecipes => receivedRecipes.map(recipe => ({
        ...recipe,
        imageFilename: `${recipeSite}/${recipe.imageFilename}`,
        filename: `${recipeSite}/${recipe.filename}`
      } as IRecipe))),
      // switchMap waits for the outer observable (getRecipes) to complete
      // It then returns a new inner observable (getFavoritesData)
      switchMap((mappedRecipes: IRecipe[]) => {
        this.recipes = mappedRecipes;
        return this.favoritesService.getFavoritesData();
      })
    ).subscribe({
      // The next callback now receives the data from the inner observable
      next: (favorite) => {
        const filename = favorite.recipe;
        console.log(filename);
        // Find the recipe in the recipes array
        const matchedRecipe = this.recipes.find(recipe => recipe.filename.endsWith(filename));

        if (matchedRecipe) {
          this.favouriteRecipes.push(matchedRecipe);
        } else {
          console.log('Recipe not found for filename:', filename);
        }
      },
      error: (error) => this.errorMessage = error.message || 'An unknown error occurred',
    });
  }

}
