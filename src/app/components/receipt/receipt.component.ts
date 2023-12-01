import { Component } from '@angular/core';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent {

  section3 = [
    {
      id: 1,
      image: "/assets/images/check-small.png",
      header:"Streamlined Loyalty Tracking:",
      label: "With NFC Card Payments, every transaction becomes an opportunity to earn loyalty points or stamps. Customers don't need to remember to bring physical loyalty cards; it's all automatic."
    },
    {
      id: 2,
      image: "/assets/images/check-small.png",
      header:"Instant Rewards:",
      label: "Loyalty points earned through NFC Card Payments are instantly credited to customers' accounts. No more waiting to redeem rewards."
    },
    {
      id: 3,
      image: "/assets/images/check-small.png",
      header:"Boosted Customer Engagement:",
      label: "Integrating NFC Card Payments and Loyalty Programs encourages customers to engage more with your business, leading to increased loyalty."
    }
  ];

}
