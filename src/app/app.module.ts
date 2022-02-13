import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {DragDropModule} from "@angular/cdk/drag-drop";

// Firebase
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import { environment } from '../environments/environment';

//Components
import { AppComponent } from './app.component';
import { GuildsComponent } from './components/guilds/guilds.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

//Services
import { GuildService} from "./services/guild.service";
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {path: 'ranking', component: RankingComponent},
  {path: '', redirectTo: '/ranking', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GuildsComponent,
    RankingComponent,
    DashboardComponent,
    NavbarComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    DragDropModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    GuildService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
