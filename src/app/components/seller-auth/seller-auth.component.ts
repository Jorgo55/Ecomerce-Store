import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/services/seller.service';
// import { Router } from '@angular/router';
import { SignUp } from 'src/data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller: SellerService) {}
  showLogin = false;

  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  signup(data: SignUp): void {
    console.warn(data);
    this.seller.userSingup(data);
  }

  openLogin() {
    this.showLogin = true;
  }

  openSignUp() {
    this.showLogin = false;
  }
}
