import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  constructor(private http: HttpClient) {}

  userSingup(data: any) {
    return this.http.post('http://localhost:3000/seller', data);
    // console.log('service call');
  }
}
