import { Component, OnInit } from '@angular/core';
import { IRecipe } from './recipe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  ngOnInit(): void {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
/*    this.recipe = {
      "filename" :id,
      "name" : "Swimming Pool",
      "stars" : "GDN-0011",
      "width" : 190,
      "height" : 320,
      "imageFilename" : "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }*/
  }

  onBack():void {
    this._router.navigate(['/products']);
  }

  constructor(private _route: ActivatedRoute, private _router: Router) {
    console.log(this._route.snapshot.paramMap.get('id'));
  }

  pageTitle: string = 'Product Detail';
  recipe: IRecipe;
}
