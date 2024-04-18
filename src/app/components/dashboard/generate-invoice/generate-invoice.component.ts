import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { TerminalService } from 'src/app/services/terminal.service';


interface RowData {
  description: string;
  unitPrice: number;
  quantity: number;
  tax: number;
  total: number;
}

@Component({
  selector: 'app-generate-invoice',
  templateUrl: './generate-invoice.component.html',
  styleUrls: ['./generate-invoice.component.scss']
})
export class GenerateInvoiceComponent {

  invoice = {
    name:"",
    phoneNumber:"",
    emailAddress:"",
    address:"",
    rows : [
      this.createRowObject('Item 1', 10, 2, 3)
    ],
    invoiceDate:"",
    invoiceNumber:"",
    paymentDueDate:""

  }

  createRowObject(description: string, unitPrice: number, quantity:number, tax: number) {
    return {
      description: description,
      unitPrice: unitPrice,
      quantity: quantity,
      tax: tax,
      total: unitPrice * quantity
    };
  }

  getSubTotal(): number{
    let subTotal = 0;
      this.invoice.rows.map((item : any)=>{
      subTotal = subTotal + item.total;
  });
  return subTotal;
}

getTaxSubTotal(): number{
  let subTotal = 0;
    this.invoice.rows.map((item : any)=>{
    subTotal = subTotal + item.tax;
});
return subTotal;
}

getTotal(): number{
  return this.getSubTotal() - this.getTaxSubTotal();
}


  goToManageCard(){
    this.router.navigate(["dashboard/cards"])

  }

  showModal = false;
  formSubmitted: boolean = false;
  otp: string = "";

  myform: FormGroup;
  message: string = "";
  apiResponse: any;
  showInvoicePdf: boolean = false;



  constructor(private http: HttpClient,
    private formBuilder: FormBuilder,
    private cardservice: TerminalService,
    private router: Router,
    private toast: NgToastService,

  ) {
    this.myform = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
      emailAddress: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      invoiceDate: new FormControl('', [Validators.required]),
      invoiceNumber: new FormControl('', [Validators.required]),
      paymentDueDate: new FormControl('', [Validators.required]),

    });
  }

  get formData() { 
    return this.myform?.controls;
   };

  validateForm() {

    for (let i in this.myform?.controls)
      this.myform?.controls[i].markAsTouched();

  }


  showSuccessResponse(message: string, header: string, duration: number) {
    this.toast.success({ detail: message, summary: header, duration: duration });
  }
  showErrorResponse(message: string, header: string, duration: number) {
    this.toast.error({ detail: message, summary: header, duration: duration });
  }

  ngOnInit() {
    console.log("hello world");
    this.toast.success({ detail: "hello", summary: "message", duration: 5000 });

  }

  resetFormInputs() {
    this.myform.reset();
    Object.keys(this.myform.controls).forEach(key => {
      this.myform.get(key)?.setErrors(null);
    });
  }

  onSubmit(): void {
    console.log(this.invoice);
    this.toggleShowInvoicePdf();
    // console.log("this.myform.value");

    // console.log(this.myform?.value);
    // this.showSuccessResponse(this.message, "Sign Up", 3000);
    // this.toast.success({ detail: "hello", summary: "message", duration: 5000 });


    //   this.cardservice.addCardPan(this.myform.value).subscribe({
    //     next: (response: any) => {
    //       console.log("response =>>>>", response);
    //       this.myform.markAsPristine(); 
    //       this.myform.markAsUntouched(); 
    //       if (response?.message) {
    //         console.log("step 1")
    //         this.message = response?.message;
    //         this.showSuccessResponse(this.message, "Sign Up", 3000);
    //         alert(this.message);

    //       } else {
    //         console.log("step 2")

    //         this.showErrorResponse(response?.debugMessage, "Sign up", 3000);
    //         alert(response?.debugMessage);

    //       }

    //     },
    //     error: (error: any) => {
    //       console.log("sign up failed", error);
    //       if (error.status === 400 && error.error && error.error.errors) {
    //         let errRes = error?.response;
    //         let errReason = error?.debugMessage;
    //         this.showErrorResponse(errRes + errReason, "Sign Up", 3000);
    //         const validationErrors = error.error.errors;
    //       }
    //     }
    //   });
  }

  toggleShowInvoicePdf(){
    this.showInvoicePdf = !this.showInvoicePdf;
  }



  addRow() {
    console.log("add row");
    this.invoice.rows.push({ description: '', unitPrice: 0, quantity: 0, tax: 0, total: 0 });

    console.log(this.invoice.rows);
  }

  removeRow(index: number) {
    this.invoice.rows.splice(index, 1);
  }


}
