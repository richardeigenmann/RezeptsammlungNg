import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  ngOnInit(): void {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      "productId" :id,
      "productName" : "Swimming Pool",
      "productCode" : "GDN-0011",
      "releaseDate" : "March 19, 2016",
      "description" : "Stevie's cool pool",
      "price" : 19.95,
      "starRating" : 3.2,
      "imageUrl" : "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
  }

  onBack():void {
    this._router.navigate(['/products']);
  }

  constructor(private _route: ActivatedRoute, private _router: Router) {
    console.log(this._route.snapshot.paramMap.get('id'));
  }

  pageTitle: string = 'Product Detail';
  product: IProduct;
}
