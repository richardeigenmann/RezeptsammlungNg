import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favoriteRecipes: any [] = [
    {
      id: 1,
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp014.htm',
      name: 'Kartoffelsalat'
    },
    {
      id: 2,
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp396.htm',
      name: 'Teigwaren-Poulet-Salat mit Pesto Vinaigrette'
    },
    {
      id: 3,
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp341.htm',
      name: 'Kalbsvoressen Salvia'
    },
    {
      id: 4,
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp137.htm',
      name: 'Lasagne'
    },
    {
      id: 5,
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp376.htm',
      name: 'Kartoffelgratin'
    },
    {
      id: 6,
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp281.htm',
      name: 'Tirolercake'
    },
    {
      id: 7,
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp223.htm',
      name: 'Aargauer Rüeblitorte'
    }
  ];

  getFavoritesData(): Observable<any> {
   return from(this.favoriteRecipes);
  }
}
