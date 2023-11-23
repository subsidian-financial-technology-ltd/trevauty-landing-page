import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    constructor() { }

    isShowDivIf = true;
    istoggleNavOpen : boolean = window.innerWidth > 568 ? true : false;


    toggleResponsiveNavbar(){
      if(window.innerWidth < 568){
        this.istoggleNavOpen = !this.istoggleNavOpen;
        console.log(this.istoggleNavOpen);
      }else{
        // this.istoggleNavOpen = true;
      }
    }
    

    toggleDisplayDivIf() {
      this.isShowDivIf = !this.isShowDivIf;
    }
    
    ngOnInit(): void {}
}
