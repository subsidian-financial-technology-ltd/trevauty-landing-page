import { Component } from '@angular/core';
import { TerminalService } from 'src/app/services/terminal.service';

@Component({
  selector: 'app-receipt-history',
  templateUrl: './receipt-history.component.html',
  styleUrls: ['./receipt-history.component.scss']
})
export class ReceiptHistoryComponent {


  constructor(private terminalService: TerminalService) {}

  ngOnInit(): void {
    this.getTerminals();
    // this.getAnalyticsOverview();
  }

  apiResponse: any;
  page: number = 0;
  size: number = 10;
  analyticsOverview: any;
  filterParams : any = {
    
  }
  data: any[] = [

    {
      id:1,
      invoiceNumber:"10000000",
      customerName:"John Doe",
      date:"13-04-2023",
      amount:"500",
      email:"johnDoe@gmail.com",
      productId:60,
      status:'approve'
    },
    {
      id:2,
      invoiceNumber:"10000000",
      customerName:"John Doe",
      date:"13-04-2023",
      amount:"500",
      email:"johnDoe@gmail.com",
      productId:60,
      status:'decline'
    },
    {
      id:3,
      invoiceNumber:"10000000",
      customerName:"John Doe",
      date:"13-04-2023",
      amount:"500",
      email:"johnDoe@gmail.com",
      productId:60,
      status:'approve'
    },
    {
      id:4,
      invoiceNumber:"10000000",
      customerName:"John Doe",
      date:"13-04-2023",
      amount:"500",
      email:"johnDoe@gmail.com",
      productId:60,
      status:'decline'
    },

  ];


  getTerminals(): void{
    console.log(this.page, this.size);
    this.terminalService.getTransactions(this.page, this.size).subscribe({
      next:(response: any)=>{
          this.apiResponse = response;
          this.data = this.apiResponse?.content;
          console.log(this.data);
      },
      error:(items:any)=>{

      }
    })
  }


  pageIncrement(){
    console.log("hello 1");
    if(this.page < this.apiResponse?.totalPages){
      this.page + 1;
    this.getTerminals();
    }
  }
  pageDecrement(){
    console.log("hello 2");
    if(this.page > 1){
      this.page - 1;
    this.getTerminals();
    }
}

}
