import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.css',
    imports: [Navbar, RouterModule, RouterOutlet],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit {
  private router = inject(Router);

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      (window as any).gtag('config', 'G-XWT8EWS5BN', {
        'page_path': event.urlAfterRedirects
      });
    });
  }
}

