import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-refund-transaction-home',
  templateUrl: './refund-transaction-home.component.html',
  styleUrls: ['./refund-transaction-home.component.scss']
})
export class RefundTransactionHomeComponent{

  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Overview',
            link: '/dashboard/refund-transaction/list',
            index: 0
        }, {
            label: 'New Refund Form',
            link: '/dashboard/refund-transaction/refund',
            index: 1
        }
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
