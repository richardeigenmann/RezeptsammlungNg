import { enableProdMode, importProvidersFrom } from '@angular/core';

import { appRoutes } from './app/app.module';
import { environment } from './environments/environment';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { RecipeModule } from './app/recipe/recipe.module';
import { provideRouter } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, RecipeModule, NgbModule),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(appRoutes)
    ]
});
