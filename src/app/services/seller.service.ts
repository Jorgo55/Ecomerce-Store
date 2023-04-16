import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, SignUp } from 'src/data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isLoginError = new EventEmitter<boolean>(false);
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {}

  userSingup(data: SignUp) {
    this.http
      .post('http://localhost:3000/seller', data, {
        observe: 'response',
      })
      .subscribe((result) => {
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
        // console.log('result', result);
      });
    // console.log('service call');
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }

  userLogin(data: Login) {
    console.log(data);
    // apo call code
    this.http
      .get(
        `http://localhost:3000/seller?email${data.email}&password=${data.password}`,
        {
          observe: 'response',
        }
      )
      .subscribe((result: any) => {
        if (result && result.body && result.body.length) {
          console.log('usser logged in ');
          this.isSellerLoggedIn.next(true);
          this.router.navigate(['seller-home']);
        } else {
          // console.log('user failed to log in');
          this.isLoginError.emit(true);
        }
        console.log('result', result);
      });
  }
}
