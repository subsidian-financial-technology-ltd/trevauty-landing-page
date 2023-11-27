import { Component } from '@angular/core';

@Component({
  selector: 'app-cardpayment',
  templateUrl: './cardpayment.component.html',
  styleUrls: ['./cardpayment.component.scss']
})
export class CardpaymentComponent {

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


  section4 = [
    {
      id: 1,
      image: "/assets/images/check-small.png",
      header:"Customer Retention:",
      label: "One of the primary benefits of loyalty programs is improved customer retention. When customers know they can earn rewards, they are more likely to choose your business over competitors."
    },
    {
      id: 2,
      image: "/assets/images/check-small.png",
      header:"Stronger Customer Relationships:",
      label: "Loyalty programs create a sense of community and appreciation among customers. They feel valued and recognized, fostering a stronger emotional connection to your brand."
    },
    {
      id: 3,
      image: "/assets/images/check-small.png",
      header:"Competitive Edge:",
      label: "Loyalty programs set your business apart from competitors. They show that you value your customers and are willing to reward their loyalty."
    }
  ];

}
