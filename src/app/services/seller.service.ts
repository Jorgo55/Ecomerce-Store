import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from 'src/data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
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
        console.log('result', result);
      });
    // console.log('service call');
  }

  // reloadSeller(){
  //   if(localStorage.getItem('seller')){
  //     this.
  //   }
  // }
}
