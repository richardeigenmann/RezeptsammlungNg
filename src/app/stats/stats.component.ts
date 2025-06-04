import { CommonModule } from '@angular/common';
import { Component, OnInit, SkipSelf } from '@angular/core';
import { StatsService, IRecipeStat } from '../services/stats.service'; // Import IRecipeStat

@Component({
    selector: 'pm-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css'],
    standalone: true,
    imports: [CommonModule],
})
export class StatsComponent implements OnInit {

  constructor(@SkipSelf() private statsService: StatsService) { }

  statsDate: string = '16.2.2021' // This will be overwritten by service
  totalViews: number = 0;

  stats: IRecipeStat[] = []; // Typed the stats array

  ngOnInit(): void {
    this.statsDate = this.statsService.getStatsDate();
    this.statsService.getStatsData().subscribe((data: IRecipeStat) => { // Typed the data
      this.stats.push(data);
      this.totalViews += data.views;
    });

  }

}
