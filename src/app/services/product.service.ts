import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/data-type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  addProduct(data: Product) {
    // console.log(data);
    return this.http.post(`http://localhost:3000/product`, data);
    // .subscribe((res) => {
    //   console.log(res);
    // });
  }
  productList() {
    return this.http.get<Product[]>(`http://localhost:3000/product`);
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/product/${id}`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`http://localhost:3000/product/${id}`);
  }
  updateProduct(product: Product) {
    return this.http.put<Product>(
      `http://localhost:3000/product/${product.id}`,
      product
    );
  }
}
