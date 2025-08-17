import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'pm-app-root',
    templateUrl: './app.html',
    styleUrls: ['./app.css'],
    imports: [Navbar, RouterOutlet]
})

export class AppComponent {
}

