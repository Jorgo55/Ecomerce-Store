import { Component, OnInit } from '@angular/core';
import { Product } from 'src/data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  submit(data: Product) {
    console.log(data);
  }
}
