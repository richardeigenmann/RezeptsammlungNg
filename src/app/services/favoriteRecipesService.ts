import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { IFavorite } from '../shared/favorite';

@Injectable({
  providedIn: 'root'
})
export class FavoriteRecipesService {
  favoriteRecipes: IFavorite [] = [
    {recipe: 'Rcp014.htm'},
    {recipe: 'Rcp396.htm'},
    {recipe: 'Rcp341.htm'},
    {recipe: 'Rcp137.htm'},
    {recipe: 'Rcp376.htm'},
    {recipe: 'Rcp281.htm'},
    {recipe: 'Rcp223.htm'},
  ];

  getFavoritesData(): Observable<IFavorite> {
    return from(this.favoriteRecipes);
  }
}
