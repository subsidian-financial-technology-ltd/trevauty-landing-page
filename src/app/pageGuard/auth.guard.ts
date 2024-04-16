import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../services/token.service';
import { Injectable, inject } from '@angular/core';

// export const authGuard: CanActivateFn = (route, state) => {
//   const token = TokenService.getToken();
//   let allowAccess : boolean = false;

//   // get current page

//   // const currentPage = route.url[0].path;
//   const router = inject(Router);
//   // if (currentPage == "nameOfPage"){
//   //   return true;
//   // }
//   // else{
//   //   alert("Access denied");
//   //   return false;
//   // }

//   if (token) {
//     // Check if the token is not expired
//     const isTokenValid = !TokenService.isTokenExpired(token);

//     if (isTokenValid) {
//       allowAccess = true;
//       return allowAccess; // Allow access to the route
//     }
//   }else{
//     router.navigate(['']);
//     allowAccess = false;
//     return allowAccess;
//   }

//   // // If the token is missing or expired, redirect to the login page
//   // return state.url !== '/login' ? ['/login'] : true;
//       // allowAccess = true;
//   // console.log("allowAccess =====>>>>>", allowAccess)
//   return false;
// };

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router) {}
//   // constructor(private tokenService: TokenService, private router: Router) {}


//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): boolean {
//     if (TokenService.isAuthenticated()) {
//       return true;
//     } else {
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }





@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    if (url.includes('signup') || url.includes('login') || url.includes('password-reset')) {
      return true;
    }

    if (TokenService.isAuthenticated()) {
      return true; 
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
}





// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): boolean {
//     const token = TokenService.getToken();

//     if (!token) {
//       this.router.navigate(['/login']); // Redirect to login if token is missing
//       return false;
//     }

//     if (TokenService.isTokenExpired()) {
//       this.router.navigate(['/login']); // Redirect to login if token is expired
//       return false;
//     }

//     return true; // User is authenticated and token is valid, allow access
//   }
// }