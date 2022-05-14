import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  private products = [
    { id: 1, name: 'Product A', description: 'This is product A' },
    { id: 2, name: 'Product B', description: 'This is product B' },
    { id: 3, name: 'Product C', description: 'This is product C' },
    { id: 4, name: 'Product D', description: 'This is product D' },
    { id: 5, name: 'Product E', description: 'This is product E' },
  ];
  constructor() { }
 
  getProductList() {
    return this.products;
  }
 
  getProductDetailById(id:any) {
    return this.products.filter((product) => {
      return (product.id == id)
    })
  }

}
