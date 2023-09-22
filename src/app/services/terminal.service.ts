import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {

  baseURL = `http://trevauty-pos-application-env.eba-gjfmg4zb.eu-west-1.elasticbeanstalk.com/`;
  // authToken = window.localStorage.getItem("token");
  authToken = `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NSIsImlhdCI6MTY5NTI4NjU5MCwiZXhwIjoxNjk1NDM2NTkwfQ.e0mHdiqaK_C2YTgWnIuAFHmbGoVJjuZbF4OJuSwgNvE`;

  constructor(private http: HttpClient) { }

  terminalRequest(userDetails:any){
    console.log("hello world");
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    return this.http.post<any>(this.baseURL + "terminal request", userDetails);
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
