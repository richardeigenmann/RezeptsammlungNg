import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories = new Map<string, Map<string, number>>();
  errorMessage: string = '';

  constructor(private _productService: ProductService) {
  }

  private createReturnCategory(s: string): Map<string, number> {
    if ( ! this.categories.has(s)) {
      this.categories.set(s, new Map<string, number>());
    }
    return this.categories.get(s);

  }

  /**
   * Build up our own categories map from the incoming recipes
   */
  ngOnInit() {
    let thisHandle = this; // this changes in the subscribe - saving it here to use it later
    this._productService.getRecipes()
      .subscribe(
      recipes => {
        recipes.forEach(function (element) {
          for (let k in element.categories)  {
            let cat = thisHandle.createReturnCategory(k);
            for ( let i of element.categories[k] ) {
              if ( ! cat.has(i) ) {
                cat.set(i,0);
              }
              let count = cat.get(i);
              cat.set(i, count+ 1);
            }
          }
        });
      },
      error => this.errorMessage = <any>error
      );
  }

  getTitle(): string { return 'Richi\'s Rezeptsammlung'; }
}
