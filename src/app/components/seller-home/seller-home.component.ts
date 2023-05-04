import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | Product[];
  productMessage: undefined | string;
  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.product.productList().subscribe((res) => {
      console.log(res);
      this.productList = res;
    });
  }

  deleteProduct(id: number) {
    console.log('test id ');
    this.product.deleteProduct(id).subscribe((result) => {
      console.log(result);
      if (result) {
        this.productMessage = 'Product deleted succesfully';
      }
      setTimeout(() => (this.productMessage = undefined), 3000);
    });
  }
}
