import { NgModule } from '@angular/core';
import { RecipeListComponent } from './recipe-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TdrecipeComponent } from './tdrecipe/tdrecipe.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'category/:categorytype/:categoryvalue',
        component: RecipeListComponent
      },
      { path: 'recipes', component: RecipeListComponent }
    ]),
    SharedModule,

  ],
  declarations: [
    RecipeListComponent,
    TdrecipeComponent,
  ],
  providers: [
  ]
})
export class RecipeModule { }
