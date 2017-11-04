import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';
import { RecipeComponent } from './recipe.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'category/:categorytype/:categoryvalue',
        component: ProductListComponent
      },
      { path: 'recipes', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductGuardService],
        component: ProductDetailComponent
      }
    ]),
    SharedModule,

  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    RecipeComponent
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
