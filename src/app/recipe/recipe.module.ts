import { NgModule } from '@angular/core';
import { RecipeList } from './recipe-list';
import { RouterModule } from '@angular/router';

import { Tdrecipe } from './tdrecipe/tdrecipe';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
    RouterModule.forChild([
        {
            path: 'category/:categorytype/:categoryvalue',
            component: RecipeList
        },
        { path: 'recipes', component: RecipeList }
    ]),
    NgbRatingModule,
    RecipeList,
    Tdrecipe,
],
    providers: []
})
export class RecipeModule { }
