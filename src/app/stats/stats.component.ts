import { Component, OnInit, SkipSelf } from '@angular/core';
import { StatsService } from '../services/stats.service';

@Component({
  selector: 'pm-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(@SkipSelf() private statsService: StatsService) { }

  statsDate: String = '16.2.2021'
  totalViews: number = 0;

  stats = []

  ngOnInit(): void {
    this.statsDate = this.statsService.getStatsDate();
    this.statsService.getStatsData().subscribe((data) => {
      this.stats.push(data);
      this.totalViews += data.views;
    });
  }

}
