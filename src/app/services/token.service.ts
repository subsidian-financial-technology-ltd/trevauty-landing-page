import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

export class TokenService {

  static getToken(): string | null {
    return localStorage.getItem('token'); // Example using localStorage
  }

  static setToken(val: string): void | null {
    return localStorage.setItem('token', val); // Example using localStorage
  }

  // static isTokenExpired(token: string): boolean {
  //   const decodedToken = this.decodeToken(token);
  //   const expirationDate = new Date(decodedToken?.exp * 1000); 
  //   return expirationDate < new Date(); 
  // }

  static isTokenExpired(): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.decodeToken(token);
      const expirationDate = new Date(decodedToken?.exp * 1000); 
      return expirationDate < new Date(); 
    }
    return true; 
  }


  static decodeToken(token: string): any {

    // return jwt_decode(token);
  }

  // static isAuthenticated(): boolean{
  //     return this.isTokenExpired(this.getToken());
  // }

  static isAuthenticated(): boolean {
    return !this.isTokenExpired();
  }

}


