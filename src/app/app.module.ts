import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Firebase
import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

//Components
import { AppComponent } from './app.component';
import { GuildsComponent } from './components/guilds/guilds.component';

//Services
import { GuildService} from "./services/guild.service";


@NgModule({
  declarations: [
    AppComponent,
    GuildsComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    GuildService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
