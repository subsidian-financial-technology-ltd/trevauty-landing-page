import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

// these route are allowed to have the header and footer
  allowedRoutes: string[] = [
    '/home',
    '/nfc',
    '/about',
    '/receipt',
    '/card',
    '/pos',
    '/inventory',
    // '/signup',
    // '/login',
    // '/password-reset'
  ];

  showNavbar: boolean = false;
  showFooter: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.url;
        this.showNavbar = this.allowedRoutes.includes(currentRoute);
        //  event.url.includes('/login') || event.url.includes('/signup');
        this.showFooter = this.showNavbar;
      }
    });
  }
}

