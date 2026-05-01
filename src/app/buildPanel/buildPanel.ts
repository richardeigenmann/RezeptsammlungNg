import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { RecipeSiteService } from '../services/recipe-site';
import { RecipeFetchService } from '../services/recipeFetchService';

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
  <p>Total Recipes: {{recipes()?.length || 0}}</p>
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

  recipes = this._recipeFetchService.getRecipes();
}
