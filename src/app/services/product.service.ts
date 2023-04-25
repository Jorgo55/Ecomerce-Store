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
    this.http.post(`http://localhost:3000/product`, data).subscribe((res)=>{
      console.log(res);
    });
  }
}
