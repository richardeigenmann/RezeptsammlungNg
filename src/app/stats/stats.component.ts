import { Component, OnInit } from '@angular/core';
import { StatsService } from '../services/stats.service';

@Component({
  selector: 'pm-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private statsService: StatsService) { }

  statsDate: String = '16.2.2021'
  totalViews; Number = 0

  stats = []

  ngOnInit(): void {
    this.statsDate = this.statsService.getStatsDate();
    this.totalViews = this.statsService.getTotalViews();
    this.stats = this.statsService.getStats();
  }

}
