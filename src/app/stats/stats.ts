import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { StatsService } from '../services/stats';
import { PercentPipe } from '@angular/common';

@Component({
    selector: 'app-google-stats',
    templateUrl: './stats.html',
    styleUrls: [],
    standalone: true,
    imports: [PercentPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsComponent {

  private statsService = inject(StatsService);

  statsDate = this.statsService.getStatsDate();
  stats = this.statsService.getStatsData();

  totalViews = computed(() => this.stats().reduce((acc, stat) => acc + stat.views, 0));

}
