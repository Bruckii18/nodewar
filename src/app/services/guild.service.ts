import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import { Observable} from "rxjs";
import { GuildModel } from '../models/GuildModel';

@Injectable({
  providedIn: 'root'
})
export class GuildService {
  guildsCollection: AngularFirestoreCollection<GuildModel>;
  guilds: Observable<GuildModel[]>;
  constructor(public afs: AngularFirestore) {
    this.guilds = this.afs.collection('guilds').valueChanges();
  }

  getGuilds() {
    return this.guilds;
  }
}


