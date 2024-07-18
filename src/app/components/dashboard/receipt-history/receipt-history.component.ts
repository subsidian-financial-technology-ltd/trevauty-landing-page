import { Component } from '@angular/core';
import { TerminalService } from 'src/app/services/terminal.service';
import { MenuItem, MessageService } from 'primeng/api';


@Component({
  selector: 'app-receipt-history',
  templateUrl: './receipt-history.component.html',
  styleUrls: ['./receipt-history.component.scss'],
  // providers: [MessageService]
})
export class ReceiptHistoryComponent {

  isLoading = false;
  showReceiptModal = false;
  showInvoiceModal = false;
  apiResponse: any;
  page: number = 0;
  size: number = 10;
  analyticsOverview: any;
  recieptDetail: any;
  receiptRef: string = ""
  filterParams : any = {
    
  }
  data: any[] = [];


  constructor(private terminalService: TerminalService,
    private messageService: MessageService,
    
    ) {}

  ngOnInit(){
    this.getReceipts();
    this.showMenu();
    // this.getAnalyticsOverview();
  }

  toggleReceiptModal(id: string): void {
    // this.showModal = !this.showModal;
    this.receiptRef = id;
    console.log(this.receiptRef);
    this.getTransactionByReceiptRef();
    this.showReceiptModal = !this.showReceiptModal;

  }

  toggleInvoiceModal(id: string): void {
    this.receiptRef = id;
    console.log(this.receiptRef);
    this.showInvoiceModal = !this.showInvoiceModal;
  }

  downloadReceipt(id: string){
    console.log("download btn clicked 1" + id);
    this.receiptRef = id;
    console.log(this.receiptRef);
    this.toggleReceiptModal(id);
  }
  
  downloadInvoice(id: string): void {
    console.log("download btn clicked 2");
    this.receiptRef = id;
    console.log(this.receiptRef);
    // this.toggleInvoiceModal();
  }

  getReceipts(): void{
    this.isLoading = false;
    console.log(this.page, this.size);
    this.terminalService.getTransactions(this.page, this.size).subscribe({
      next:(response: any)=>{
        this.isLoading = true;
          this.apiResponse = response;
          this.data = response?.data?.content;
      },
      error:(items:any)=>{
        this.isLoading = true;
      }
    })
  }

  getTransactionByReceiptRef(){
    this.isLoading = false;
    this.terminalService.getTransactionByReceiptRef(this.receiptRef).subscribe({
      next:(response: any) => {
        console.log(response);
        this.isLoading = true;
          this.recieptDetail = response?.data;
        console.log(this.recieptDetail);
      },
      error:(items:any)=>{
        this.isLoading = true;
      }
    })
  }

  pageIncrement(){
    console.log("hello 1", this.apiResponse?.data?.totalPages);
    if(this.page < this.apiResponse?.data?.totalPages){
      console.log("is true");
      this.page = this.page + 1;
    this.getReceipts();
    }
  }

  pageDecrement(){
    console.log("hello 2");
    if(this.page >= 1){
      this.page = this.page - 1;
    this.getReceipts();
    }
}

items: MenuItem[] | undefined;


  
showMenu() {
     this.items = [
         {
             label: 'Options',
             items: [
                 {
                     label: 'Update',
                     icon: 'pi pi-refresh',
                     command: () => {
                         this.update();
                     }
                 },
                 {
                     label: 'Delete',
                     icon: 'pi pi-times',
                     command: () => {
                         this.delete();
                     }
                 }
             ]
         },
         {
             label: 'Navigate',
             items: [
                 {
                     label: 'Angular',
                     icon: 'pi pi-external-link',
                     url: 'http://angular.io'
                 },
                 {
                     label: 'Router',
                     icon: 'pi pi-upload',
                     routerLink: '/fileupload'
                 }
             ]
         }
     ];
 }

 update() {
     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
 }

 delete() {
     this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
 }

}
