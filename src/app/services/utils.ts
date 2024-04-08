export  const baseURL = "http://open-receipt.subsidian.net/";


import { Injectable } from '@angular/core';


export class UtilService {

    
    constructor() { }


  static setUserDetails(value: string): void | null {
    return localStorage.setItem('userDetails', JSON.stringify(value));
  }

  static setEmailAddress(value: string): void | null {
    return localStorage.setItem('email', value);
  }

  static getEmailAddress(): string | null{
    return localStorage.getItem('email');
  }

  static getUserDetails():any {
    let userDetails;
    if (localStorage.getItem('userDetails')) {
      userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
    } 
    return userDetails;
  }

  static formatBase64(base64: string): string {
    console.log("ans",base64)

   let res = base64.split(",")[1];
    //  let res = base64?.replace("data:image/png;base64,", "");
     console.log("ans",res)
     return res;
  }

  static clearStorage(): void{
    return localStorage.clear();
  }

}
