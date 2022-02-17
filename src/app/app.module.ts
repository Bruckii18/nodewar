import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {HttpClientModule} from "@angular/common/http";

// Firebase
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import { environment } from '../environments/environment';

//Components
import { AppComponent } from './app.component';
import { GuildsComponent } from './components/guilds/guilds.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginCallbackComponent } from './components/login-callback/login-callback.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//Services
import { GuildService} from "./services/guild.service";
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: 'ranking', component: RankingComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/ranking', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'login-callback', component: LoginCallbackComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    GuildsComponent,
    RankingComponent,
    DashboardComponent,
    NavbarComponent,
    LoginCallbackComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    DragDropModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    GuildService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
