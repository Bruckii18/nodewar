import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Firebase
import { environment } from '../environments/environment';

//Components
import { AppComponent } from './app.component';
import { GuildsComponent } from './components/guilds/guilds.component';

//Services
import { GuildService} from "./services/guild.service";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    GuildsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    GuildService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
