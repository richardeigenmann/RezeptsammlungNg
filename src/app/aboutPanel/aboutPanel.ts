import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './aboutPanel.html',
    styleUrls: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent  {
}
