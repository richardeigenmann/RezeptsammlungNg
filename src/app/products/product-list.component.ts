import { Component, OnInit } from '@angular/core';
import { IRecipe } from './recipe';
import { ProductService } from './product.service';

@Component({
    //selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent
    implements OnInit {
    pageTitle: string = 'Recipe List';
    recipesBaseUrl: string = 'http://richieigenmann.users.sourceforge.net/';
    showImage: boolean = true;
    imageWidth: number = 50;
    imageMargin: number = 2;
    _listFilter: string = '';
    errorMessage: string = '';

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    filteredProducts: IRecipe[];
    products: IRecipe[] = [];


    constructor(private _productService: ProductService) {
    }

    toggleImage(): void { this.showImage = !this.showImage; }

    ngOnInit(): void {
        console.log('In OnInit');
        //this.products = this._productService.getProducts();
        this._productService.getProducts()
            .subscribe(
            products => {
                products.forEach( function(element) {
                    element.imageFilename = 'http://richieigenmann.users.sourceforge.net/' + element.imageFilename;
                    element.filename = 'http://richieigenmann.users.sourceforge.net/' + element.filename;
                });
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error
            );
    }

    performFilter(filterBy: string): IRecipe[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IRecipe) =>
            product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    
    onRatingClicked(message: string): void {
        console.log('Product List: ' + message);
        this.pageTitle = message;
    };
}