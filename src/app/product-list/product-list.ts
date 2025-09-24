import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products = [{id:1,name:'Product 1',description:"Desc",price:1},{id:2,name:'Product 2',description:"Desc",price:1},{id:3,name:'Product 3',description:"Desc",price:1}];
}
