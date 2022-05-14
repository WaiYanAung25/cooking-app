import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";

import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: DataService
  ) { }
 
  public productId: number | undefined;
  public productDetail: any;


  ngOnInit() {
    this._activatedRoute.params.forEach((params: Params) => {
      this.productId = params['id']; // get the id from url
      let product = this._productService.getProductDetailById(this.productId); // pass the id to the service.
      console.log(product)
      if (product.length > 0) {
        this.productDetail = product[0];
      }
    });
  }
}
