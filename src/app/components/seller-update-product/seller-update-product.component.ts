import { Product } from './../../../data-type';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css'],
})
export class SellerUpdateProductComponent implements OnInit {
  productData: Product | undefined;
  constructor(private route: ActivatedRoute, private product: ProductService) {}
  updateProductMessage: string | undefined;

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    productId &&
      this.product.getProduct(productId).subscribe((data) => {
        console.log(data);
        this.productData = data;
      });
  }
  submit(data: Product) {
    console.log(data);
    if (this.productData) {
      // data.id=this.productData?.i
      data.id = this.productData?.id;
    }
    this.product.updateProduct(data).subscribe((result) => {
      console.log(result);
      if (result) {
        this.updateProductMessage = 'Product successfully added';
      }
      setTimeout(() => (this.updateProductMessage = undefined), 3000);
    });
  }
}
