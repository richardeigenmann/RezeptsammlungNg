import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { environment } from '../../environments/environment';
import { RecipeSiteService } from '../services/recipe-site';
import { RecipeFetchService } from '../services/recipeFetchService';
import { catchError, of } from 'rxjs';

@Component({
    selector: 'app-build',
    styleUrls: [],
    imports: [],
    template: `
<div class="container">
  <h3>Build Information</h3>
  <p>Build date: {{buildTimeStamp}}</p>
  <p>Recipes source: <a href='{{recipeSite}}' target="_blank" rel="noopener noreferrer">{{recipeSite}}</a></p>
  <p>Recipes url: <a href='{{recipesUrl}}' target="_blank" rel="noopener noreferrer">{{recipesUrl}}</a></p>
  <p>Total Recipes: {{recipes().length}}</p>
  <p>App version: {{appVersion}}</p>
  <p>Angular version: {{angularVersion}}</p>
  <p>Bootstrap version: {{bootstrapVersion}}</p>
</div>

<div class="container">
  @for(recipe of recipes(); track recipe.filename) {
    {{recipe.filename.substr(recipe.filename.lastIndexOf("/")+1)}}:
          <a [href]='recipe.filename' target="_blank" rel="noopener noreferrer">
            {{recipe.name}}
          </a>,
    }
</div>
`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildPanelComponent {
  private _recipeSiteService = inject(RecipeSiteService);
  private _recipeFetchService = inject(RecipeFetchService);

  readonly buildTimeStamp = environment.buildTimeStamp;
  readonly recipeSite = this._recipeSiteService.getRecipeSite();
  readonly recipesUrl = this._recipeSiteService.getRecipesUrl();
  readonly appVersion = environment.appVersion;
  readonly angularVersion = environment.angularVersion;
  readonly bootstrapVersion = environment.bootstrapVersion;

  errorMessage = signal('');
  recipes = toSignal(
    this._recipeFetchService.getRecipes().pipe(
      catchError(err => {
        this.errorMessage.set(err.message);
        return of([]);
      })
    ),
    { initialValue: [] }
  );
}
