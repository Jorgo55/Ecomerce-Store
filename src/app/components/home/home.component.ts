import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  popularProduct: undefined | Product[];
  constructor(private product: ProductService) {}

  ngOnInit() {
    this.product.popularProducts().subscribe((res) => {
      console.log(res);
      this.popularProduct = res;
    });
  }
}
