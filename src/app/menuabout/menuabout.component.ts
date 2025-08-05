import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
//import {RouterModule} from '@angular/router';
//import { NgModule } from '@angular/core';

@Component({
    selector: 'pm-menuabout',
    templateUrl: './menuabout.component.html',
    styleUrls: ['./menuabout.component.css'],
    imports: [RouterLinkActive, RouterLink],
    standalone: true,
})

export class MenuaboutComponent {
}
