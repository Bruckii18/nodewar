import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  async canActivate(
    _: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    let url: string = state.url;

    return await this.checkLogin(url);
  }

  async checkLogin(url: string): Promise<boolean> {

    console.log("AuthGuard: checkLogin call");

    if (this.authService.isAuthorized || await this.authService.tryLoginFromLocalstorage()) {
      console.log("AuthGuard: checkLogin: Allow!");
      return true;
    } else {
        if(url === "/ranking") {
            return true;
        }
    }
    
    this.router.navigate(['/ranking']);
    console.log("AuthGuard: checkLogin: Reject!");
    return false;
  }
}