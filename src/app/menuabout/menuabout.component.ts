import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'pm-menuabout',
    templateUrl: './menuabout.component.html',
    styleUrls: ['./menuabout.component.css'],
    standalone: true,
    imports: [CommonModule, RouterModule],
})

export class MenuaboutComponent {
}
