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
import { ProductListComponent } from './products/product-list.component';

const appRoutes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'about', component: AboutComponent },
    {
      path: 'category/:categorytype/:categoryvalue',
      component: ProductListComponent
    },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( appRoutes, {enableTracing: false} ),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

