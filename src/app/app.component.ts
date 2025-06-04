import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
// HomepageComponent is not directly used in AppComponent's template.
// It's routed to, so AppModule or AppRoutingModule will handle its availability.

@Component({
    selector: 'pm-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [CommonModule, RouterModule, NavbarComponent],
})

export class AppComponent {
}

