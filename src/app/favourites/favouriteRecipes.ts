import { Component, OnInit, inject } from '@angular/core';
import { FavoriteRecipesService } from '../services/favoriteRecipesService';
import { RecipeFetchService } from '../services/recipeFetchService';
import { RecipeSiteService } from '../services/recipe-site';
import { IRecipe } from '../shared/recipe';
import { map, switchMap } from 'rxjs/operators';
import { FavoriteRecipesViewService } from '../services/favoriteRecipesViewService';

@Component({
    selector: 'app-favourites',
    standalone: true,
    styleUrls: [],
    imports: [],
    template: `
<h3>Richi's Lieblingsrezepte:</h3>
<p>
  @for(recipe of favoriteRecipes; track $index) {
    <a href="{{recipe.filename}}">{{recipe.name}}<br></a>
  }
</p>
`})

export class FavouritesRecipesComponent implements OnInit {
  private favoriteRecipesViewService = inject(FavoriteRecipesViewService);
  
  favoriteRecipes: IRecipe[] = [];
  errorMessage = '';

  ngOnInit(): void {
    this.favoriteRecipesViewService.getFavoriteRecipes().subscribe({
      next: (recipes) => this.favoriteRecipes = recipes,
      error: (error) => this.errorMessage = 'An unknown error occurred',
    });
  }}
