import { Component, OnInit, inject } from '@angular/core';
import { StatsService } from '../services/stats';
import { IStat } from '../shared/stat';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-google-stats',
    templateUrl: './stats.html',
    styleUrls: [],
    standalone: true,
    imports: [CommonModule]
})
export class StatsComponent implements OnInit {

  private statsService = inject(StatsService);

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
