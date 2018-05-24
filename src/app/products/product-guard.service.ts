import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate  {
  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = +route.url[1].path;
    console.log('can Activate with Id: ' + id);
    if ( isNaN(id) || id < 1) {
      alert('Invalid product Id');
      this._router.navigate(['/recipes']);
      return false;
    }
    return true;
  }


}
