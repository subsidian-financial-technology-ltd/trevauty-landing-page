import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent {

  processes = [
    {
      id:1,
      img:"/assets/images/processImg1.png",
      number:"01",
      text:"You Ask"
    },
    {
      id:2,
      img:"/assets/images/processImg2.png",
      number:"02",
      text:"We Proceed"
    },
    {
      id:3,
      img:"/assets/images/processImg3.png",
      number:"03",
      text:"Negotiate"
    },
    {
      id:1,
      img:"/assets/images/processImg4.png",
      number:"04",
      text:"You Get"
    }
  ];


  section1 = [
    {
      id: 1,
      image: "/assets/images/check-small.png",
      label: "Total Transactions"
    },
    {
      id: 2,
      image: "/assets/images/check-small.png",
      label: "Transaction History"
    },
    {
      id: 3,
      image: "/assets/images/check-small.png",
      label: "Payments Method"
    },
    {
      id: 4,
      image: "/assets/images/check-small.png",
      label: "Notification and Alert"
    },
    {
      id: 5,
      image: "/assets/images/check-small.png",
      label: "Analytics"
    },
    {
      id: 6,
      image: "/assets/images/check-small.png",
      label: "Terminal Management"
    },
    {
      id: 7,
      image: "/assets/images/check-small.png",
      label: "Refund Transactions"
    }
  ];
  

   section2 = [
    {
      id: 1,
      image: "/assets/images/check-small.png",
      label: "Card withdrawals"
    },
    {
      id: 2,
      image: "/assets/images/check-small.png",
      label: "Bank Transfers"
    },
    {
      id: 3,
      image: "/assets/images/check-small.png",
      label: "Pay with Transfers"
    },
    {
      id: 4,
      image: "/assets/images/check-small.png",
      label: "Deposit [Fund wallets]"
    }
  ];

  section3 = [
    {
      id: 1,
      image: "/assets/images/check-small.png",
      label: "View Payment ID"
    },
    {
      id: 2,
      image: "/assets/images/check-small.png",
      label: "Total TerminalTransactions"
    },
    {
      id: 3,
      image: "/assets/images/check-small.png",
      label: "Payment Method"
    },
    {
      id: 4,
      image: "/assets/images/check-small.png",
      label: "Refunded Payment"
    }
  ];

  



  



}
