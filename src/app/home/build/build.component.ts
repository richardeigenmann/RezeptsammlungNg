import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RecipeSiteService } from '../../services/recipe-site.service';

@Component({
  selector: 'pm-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent {
  buildTimeStamp: string;
  recipeSite: string;
  recipesUrl: string;
  windowLocationHref: string;
  fullRecipesUrl: string;

  constructor(private _recipeSiteService: RecipeSiteService) {
    this.buildTimeStamp = environment.buildTimeStamp;
    this.recipeSite = _recipeSiteService.getRecipeSite();
    this.recipesUrl = _recipeSiteService.getRecipesUrl();
    this.windowLocationHref = window.location.href;
    this.fullRecipesUrl = window.location.href + '/../' + _recipeSiteService.getRecipesUrl();
  }

}
