import { Component, OnInit } from '@angular/core';
import { StatsService } from '../services/stats.service';
import { IStat } from '../shared/stat';

@Component({
    selector: 'pm-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css'],
    standalone: false
})
export class StatsComponent implements OnInit {

  constructor(private statsService: StatsService) { }

  statsDate: string;
  totalViews = 0;

  stats: IStat[] = [];

  ngOnInit(): void {
    this.statsDate = this.statsService.getStatsDate();
    this.statsService.getStatsData().subscribe((data: IStat[]) => {
      this.stats = data;
      this.totalViews = this.stats.reduce((acc, stat) => acc + stat.views, 0);
    });
  }

}
