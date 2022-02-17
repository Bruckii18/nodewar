import {Component, OnDestroy, OnInit} from '@angular/core';
import { GuildService } from "../../services/guild.service";
import {Observable, of, Subscription} from "rxjs";
import {map} from "rxjs/operators";
import {GuildModel} from "../../models/GuildModel";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private sub: Subscription = new Subscription();
  public data: Observable<GuildModel[]>;

  guilds: GuildModel[] = [];

  constructor(private guildService: GuildService) {
    this.data = this.guildService.guilds;
  }

  ngOnInit(): void {
    this.sub.add(this.guildService.guilds.subscribe(x => {
      x.sort((a, b) => {
        // @ts-ignore
        return a.rank < b.rank ? -1 : 1;
      });
      this.guilds = x;
    }));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  drop(event: CdkDragDrop<GuildModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  saveData() {
    this.data = of(this.guilds);
  }
}
