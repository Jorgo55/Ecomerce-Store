import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from 'src/data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller: SellerService, private router: Router) {}

  ngOnInit(): void {}

  signup(data: SignUp): void {
    console.warn(data);
    this.seller.userSingup(data).subscribe((result: any) => {
      // console.log(result);
      if (result) {
        this.router.navigate(['seller-home']);
      }
    });
  }
}
