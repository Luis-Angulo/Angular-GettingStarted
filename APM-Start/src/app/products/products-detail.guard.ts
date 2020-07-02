import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsDetailGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const id = +next.url[1].path;
    // If no valid id, user shouldn't be able to navigate to the detail page
    if (isNaN(id) || id < 1) {
      alert('invalid product id');
      this.router.navigate(['/products']);
      return false;
    }
    // Else continue
    return true;
  }
}
