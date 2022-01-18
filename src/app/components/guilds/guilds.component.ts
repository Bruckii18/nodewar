import { Component, OnInit } from '@angular/core';
import { GuildService } from "../../services/guild.service";

@Component({
  selector: 'app-guilds',
  templateUrl: './guilds.component.html',
  styleUrls: ['./guilds.component.css']
})
export class GuildsComponent implements OnInit {

  constructor(private guildService: GuildService) { }

  ngOnInit(): void {
    this.guildService.getGuilds().subscribe(guilds => {
      console.log(guilds);
    })
  }

}
