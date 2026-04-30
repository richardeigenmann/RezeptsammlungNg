import { ChangeDetectionStrategy, Component, OnInit, inject, signal, computed } from '@angular/core';
import { StatsService } from '../services/stats';
import { PercentPipe } from '@angular/common';
import { IStat } from '../shared/stat';

@Component({
    selector: 'app-google-stats',
    templateUrl: './stats.html',
    styleUrls: [],
    standalone: true,
    imports: [PercentPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsComponent implements OnInit {

  private statsService = inject(StatsService);

  statsDate = signal<string>('');
  stats = signal<IStat[]>([]);

  totalViews = computed(() => this.stats().reduce((acc, stat) => acc + stat.views, 0));

  ngOnInit(): void {
    this.statsDate.set(this.statsService.getStatsDate());
    this.statsService.getStatsData().subscribe((data: IStat[]) => {
      this.stats.set(data);
    });
  }

}
