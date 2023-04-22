import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/services/seller.service';
import { SignUp } from 'src/data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller: SellerService) {}
  showLogin = false;
  authError: string = '';

  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  signup(data: SignUp): void {
    console.warn(data);
    this.seller.userSingup(data);
  }

  login(data: SignUp): void {
    this.authError = '';
    // console.warn(data);
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError) => {
      if (isError) {
        // console.log(isError);
        this.authError = 'Email of password is not correct ';
      }
    });
  }
  openLogin() {
    this.showLogin = true;
  }

  openSignUp() {
    this.showLogin = false;
  }
}
