import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { DataService } from '../data.service'
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  public productList:any= [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.productList = this.dataService.getProductList();
  }
 title = 'cooking-app';
  singleRecipe = true
  onHovering(event:any,id:number){
    var element:any = document.getElementById(`item-${id}`)
    $(element).css("background-color","rgba(232, 214, 196, 0.6)");
  }

  onUnovering(event:any, id:number){
    var element:any = document.getElementById(`item-${id}`)
    $(element).css("background-color","white");
  }
}
