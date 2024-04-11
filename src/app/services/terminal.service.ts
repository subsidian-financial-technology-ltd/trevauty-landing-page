import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { FormGroup } from '@angular/forms';
import { baseURL } from './utils';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {


  baseURL = `http://open-receipt.subsidian.net/`;
  authToken = TokenService.getToken();

  constructor(private http: HttpClient) { }


  addCardPan(userDetails:any): Observable<any>{
    console.log("hello world");

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TokenService.getToken()}`
    });
    return this.http.post<any>(`${baseURL}api/v1/customer/add-customer-profile`, userDetails ,{ headers:headers });
  }

  editCardPan(cardDetails: any) : Observable<any>{
    console.log("hello world");

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TokenService.getToken()}`
    });
    return this.http.put<any>(`${baseURL}api/v1/customer/update-pan`, cardDetails ,{ headers:headers });
  }


  getCardList(): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TokenService.getToken()}`
    });
    return this.http.get<any>(`${baseURL}api/v1/customer/fetch-all-card-pan`,{ headers:headers });
  }

  getCard(id:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TokenService.getToken()}`
    });

    return this.http.get<any>(baseURL + id, { headers:headers });
  }


  terminalRequest(userDetails:any){
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    return this.http.post<any>(`${this.baseURL}api/v1/terminal/terminal_request`, userDetails);
  }

  terminalRefundRequest(userDetails:any){
    console.log("hello world");
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    return this.http.post<any>(`${this.baseURL}api/v1/terminal/refund/terminal_refund_request`, userDetails);
  }

  accountLogin(authCredentials:any){
    console.log("hello world");
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    return this.http.post<any>(this.baseURL, authCredentials);
  }

  passwordReset(usersDetail:any){
    console.log("hello world");
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    return this.http.post<any>(this.baseURL, usersDetail);
  }

  getTerminals(): Observable<any> {
    return this.http.get<any>('assets/data/terminalData.json');
  }
  
  getActionTerminals(): Observable<any>{
    return this.http.get<any>('assets/data/actionTerminal.json');
  }


  getTransactions(page: number, size:number): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.get<any>(`${this.baseURL}api/v1/analytic/transactions?page=${page}&size=${size}`, { headers: headers });
  }
  
  getAnalyticsOverview(): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.get<any>(`${this.baseURL}api/v1/analytic/terminal_statistic`, { headers: headers });
  }
  
}
