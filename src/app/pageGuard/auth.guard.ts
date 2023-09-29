import { CanActivateFn } from '@angular/router';
import { TokenService } from '../services/token.service';

export const authGuard: CanActivateFn = (route, state) => {
  const token = TokenService.getToken();

  if (token) {
    // Check if the token is not expired
    const isTokenValid = !TokenService.isTokenExpired(token);

    if (isTokenValid) {
      return true; // Allow access to the route
    }
  }

  // // If the token is missing or expired, redirect to the login page
  // return state.url !== '/login' ? ['/login'] : true;
  return true;
};
