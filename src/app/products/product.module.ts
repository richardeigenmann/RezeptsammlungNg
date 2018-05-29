import { NgModule } from '@angular/core';
import { RecipeListComponent } from './recipe-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { SharedModule } from '../shared/shared.module';
import { RecipeComponent } from './recipe.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'category/:categorytype/:categoryvalue',
        component: RecipeListComponent
      },
      { path: 'recipes', component: RecipeListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductGuardService],
        component: ProductDetailComponent
      }
    ]),
    SharedModule,

  ],
  declarations: [
    RecipeListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    RecipeComponent
  ],
  providers: [
    ProductGuardService
  ]
})
export class ProductModule { }
