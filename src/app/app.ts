import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { RouterModule, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TypedRouter } from 'angular-typed-router';


@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.css',
    imports: [Navbar, RouterModule, RouterOutlet],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit {
  private router = inject(TypedRouter);

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

