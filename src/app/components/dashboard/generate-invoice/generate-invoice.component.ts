import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { NgToastService } from 'ng-angular-popup';
import { TerminalService } from 'src/app/services/terminal.service';
import html2canvas from 'html2canvas';


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
    name: "",
    phoneNumber: "",
    emailAddress: "",
    address: "",
    rows: [
      this.createRowObject('Item 1', 10, 2, 3)
    ],
    invoiceDate: "",
    invoiceNumber: "",
    paymentDueDate: ""

  }

  createRowObject(description: string, unitPrice: number, quantity: number, tax: number) {
    return {
      description: description,
      unitPrice: unitPrice,
      quantity: quantity,
      tax: tax,
      total: unitPrice * quantity
    };
  }

  getSubTotal(): number {
    let subTotal = 0;
    this.invoice.rows.map((item: any) => {
      subTotal = subTotal + item.total;
    });
    return subTotal;
  }

  getTaxSubTotal(): number {
    let subTotal = 0;
    this.invoice.rows.map((item: any) => {
      subTotal = subTotal + item.tax;
    });
    return subTotal;
  }

  getTotal(): number {
    return this.getSubTotal() - this.getTaxSubTotal();
  }


  goToManageCard() {
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
  }


  @ViewChild('pdfContent', { static: false }) pdfContent: ElementRef | any;

  generatePDF(): void {
    if (!this.pdfContent) {
      console.error("Element 'pdfContent' is not defined.");
      return;
    }

    html2canvas(this.pdfContent.nativeElement).then((canvas) => {
      const fileWidth = 210;
      const fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      const PDF = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, 297, '', 'FAST');
      PDF.save('angular-demo.pdf');
    });
  }

  toggleShowInvoicePdf() {
    this.showInvoicePdf = !this.showInvoicePdf;
    // this.generatePDF();

  }

  addRow() {
    console.log("add row");
    this.invoice.rows.push({ description: '', unitPrice: 0, quantity: 0, tax: 0, total: 0 });
  }

  removeRow(index: number) {
    this.invoice.rows.splice(index, 1);
  }
}
