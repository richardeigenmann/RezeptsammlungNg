import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'pm-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [NavbarComponent, RouterOutlet]
})

export class AppComponent {
}

