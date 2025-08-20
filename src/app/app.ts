import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.css',
    imports: [Navbar, RouterModule, RouterOutlet]
})

export class AppComponent {
}

