import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {map} from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthorized: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  // @ts-ignore
  public currentUser: BehaviorSubject<DiscordUser> = new BehaviorSubject<DiscordUser>(null);

  // @ts-ignore
  public async auth(authCode: string): Promise<boolean> {

    const params = new URLSearchParams();
    params.append('client_id', '943507734484090950');
    params.append('client_secret', 'nTwPKSdxdQtaf69g8-gnrRZJNYIlyUnq');
    params.append('grant_type', 'authorization_code');
    params.append('code', authCode);
    params.append('redirect_uri', 'http://localhost:4200/login-callback');

    const tokenResponse: AccessToken | undefined = await this.http.post<AccessToken>('https://discord.com/api/v8/oauth2/token', params, { headers: { "Content-Type": "application/x-www-form-urlencoded"}}).toPromise();
    await this.http.get<DiscordUser>('https://discord.com/api/users/@me', { headers: { "Authorization": "Bearer " + tokenResponse?.access_token } }).pipe(map(x => {
      this.currentUser.next(x);
      x.code = authCode;
      localStorage.setItem('oidc.user', JSON.stringify(x));
    })).toPromise();
    return true;
  }

  public async tryLoginFromLocalstorage(): Promise<boolean> {
    const storage = localStorage.getItem('oidc.user');
    const user: DiscordUser = JSON.parse(<string>storage);

    if (user == null) {
      return false;
    }

    this.currentUser.next(user);
    return true
  }

  // public logout(){
  //   this.currentUser = new BehaviorSubject<DiscordUser>(null);
  //   localStorage.removeItem('oidc.user');
  //   this.router.navigate(['/ranking']);
  // }
}

export interface DiscordUser {
  id?: string;
  username?: string;
  discriminator?: string;
  avatar?: string;
  locale?: string;
  email?: string;
  code?: string;
}

export interface AccessToken {
  access_token: string,
  token_type: string,
  expires_in: number,
  refresh_token: string,
  scope: string
}