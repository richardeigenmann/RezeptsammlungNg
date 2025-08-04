import { Component, OnInit, SkipSelf } from '@angular/core';
import { StatsService } from '../services/stats.service';

@Component({
    selector: 'pm-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css'],
    standalone: false
})
export class StatsComponent implements OnInit {

  constructor(@SkipSelf() private statsService: StatsService) { }

  statsDate = '16.2.2021'
  totalViews = 0;

  stats = []

  ngOnInit(): void {
    this.statsDate = this.statsService.getStatsDate();
    this.statsService.getStatsData().subscribe((data) => {
      this.stats.push(data);
      this.totalViews += data.views;
    });

  }

}
