import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  private router = inject(Router);

  canActivate() {
    const token = localStorage.getItem('authToken'); 
    if (token) {
      return true; 
    } else {
      this.router.navigateByUrl('/login'); 
      return false;
    }
  }


}
