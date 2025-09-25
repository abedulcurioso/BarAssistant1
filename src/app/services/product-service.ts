import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    constructor() { }
    getProducts() {
        return [
            { id: 1, name: 'Laptop',description:"Si", price: 999.99 },
            { id: 2, name: 'Smartphone',description:"Si", price: 499.99 },
            { id: 3, name: 'Tablet',description:"Si", price: 299.99 }
        ];
    }

    
}
