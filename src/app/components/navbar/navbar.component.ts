import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {AuthService, DiscordUser} from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  discordAuth: string = "";
  isLoggedin: boolean = false;
  currentUser: any = null;

  constructor(private authSvc: AuthService) {
    this.discordAuth = environment.discordAuth;
    this.authSvc.currentUser.subscribe(x => {
      if (x != null) {
        this.isLoggedin = true;
        this.currentUser = x;
      } else {
        this.isLoggedin = false;
      }
    })
  }

  ngOnInit(): void {
  }

  // public logout() {
  //   this.authSvc.logout();
  // }
}
