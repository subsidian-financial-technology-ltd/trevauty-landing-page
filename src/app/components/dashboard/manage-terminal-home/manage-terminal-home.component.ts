import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-terminal-home',
  templateUrl: './manage-terminal-home.component.html',
  styleUrls: ['./manage-terminal-home.component.scss']
})
export class ManageTerminalHomeComponent implements OnInit {
  title = 'angular-material-tab-router';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Overview',
            link: '/dashboard/manage-terminal/list',
            index: 0
        }, {
            label: 'Request New Terminal',
            link: '/dashboard/manage-terminal/request',
            index: 1
        }, {
            label: 'Deactivate Terminals',
            link: '/dashboard/manage-terminal/deactivate',
            index: 2
        },
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
