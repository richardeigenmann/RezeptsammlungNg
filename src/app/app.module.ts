import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { AboutComponent } from './home/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EncodeURI } from './shared/encodeUri.pipe';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    NavbarComponent,
    EncodeURI
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    NgbModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

