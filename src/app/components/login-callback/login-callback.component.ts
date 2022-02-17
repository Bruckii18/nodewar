import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.css']
})
export class LoginCallbackComponent implements OnInit {

  constructor(private router: Router, private authSvc: AuthService) {
    console.log(this.router.url)
    const urlSplit = this.router.url.split('=');
    if(urlSplit.length > 1) {
      this.startRedirecting(urlSplit[urlSplit.length - 1]);
    }
    else {
      console.log('no fragments found!');
    }
  }

  ngOnInit(): void {
  }

  private async startRedirecting(token: string) {
    try {
      const isAuthorized: boolean = await this.authSvc.auth(token);
      console.log('Auth: Auth status changed:', isAuthorized);
      this.router.navigate(['/ranking']);
    }
    catch(e) {
      console.log(e);
      this.router.navigate(['/ranking']);
    }
  }

}
