import {Component, OnDestroy, OnInit} from '@angular/core';
import { GuildService } from "../../services/guild.service";
import {Observable, Subscription} from "rxjs";
import {map} from "rxjs/operators";
import {GuildModel} from "../../models/GuildModel";

@Component({
  selector: 'app-guilds',
  templateUrl: './guilds.component.html',
  styleUrls: ['./guilds.component.css']
})
export class GuildsComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();
  public data: Observable<GuildModel[]>;

  constructor(private guildService: GuildService) {
    this.data = this.guildService.guilds;
  }

  ngOnInit(): void {
    this.sub.add(this.guildService.guilds.subscribe());
    this.sortData();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  sortData() {
    this.data = this.data.pipe(map((data) => {
      data.sort((a, b) => {
        // @ts-ignore
        return a.rank < b.rank ? -1 : 1;
      });
      return data;
    }))
  }
}
