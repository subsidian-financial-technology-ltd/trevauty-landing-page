import { Component } from '@angular/core';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent {

  section3 = [
    {
      id: 1,
      image: "/assets/images/check-small.png",
      label: "Cutting-Edge Technology: Our POS Terminal is built on state-of-art technology, ensuring speed, reliability, and secure for every transaction."
    },
    {
      id: 2,
      image: "/assets/images/check-small.png",
      label: "Streamlined Transaction: Say goodbye to long queues and delays. Our POS System streamlines transactions, allowing you to serve more customers quickly and efficiently. "
    },
    {
      id: 3,
      image: "/assets/images/check-small.png",
      label: "Scalability: Whether you run a small shop or a large retail chain, Trevauty POS can grow with your business, adapting to your changing needs."
    }
  ];

}
