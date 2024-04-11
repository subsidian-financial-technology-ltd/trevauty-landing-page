import { Injectable } from '@angular/core';
import { baseURL } from './utils';
import { TokenService } from './token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomerDetails() : Observable<any>{
    console.log("hello world");

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TokenService.getToken()}`
    });
    return this.http.get<any>(`${baseURL}api/v1/customer/fetch-customer-data` ,{ headers:headers });
  }


}
