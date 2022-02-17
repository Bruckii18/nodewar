import {Component, OnDestroy, OnInit} from '@angular/core';
import { GuildService } from "../../services/guild.service";
import {Observable, Subscription} from "rxjs";
import {map} from "rxjs/operators";
import {GuildModel} from "../../models/GuildModel";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();
  public data: Observable<GuildModel[]>;

  constructor(private guildService: GuildService) {
    this.data = this.guildService.guilds;
  }

  ngOnInit(): void {
    this.sub.add(this.guildService.guilds.subscribe());
    this.sortData();
    // this.filterOnTiers();
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


  // filterOnTiers() {
  //   let myData = this.data;
  //   let guildArray = this.guildArray;
  //   this.tiers.forEach(function (value, index){
  //     guildArray[index] = [];
  //     myData.pipe(map((data) => {
  //       for (let i = 0; i < data.length; i++) {
  //         if (data[i].tier == value) {
  //            guildArray[index].push(data[i]);
  //         }
  //       }
  //     })).subscribe();
  //   });
  //   this.guildArray = guildArray;
  // }

}
