import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';
import { TerminalService } from 'src/app/services/terminal.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent {

  // formGroup: FormGroup ;

  // constructor(private router: Router){

  //   console.log("entered the constructor");
  //   this.formGroup = new FormGroup({
  //     date: new FormControl('', [Validators.required]),
  //   })
  // }

  goToManageCard(){
    this.router.navigate(["dashboard/cards"])

  }






  showModal = false;
  formSubmitted: boolean = false;
  otp: string = "";

  myform: FormGroup;
  message: string = "";
  apiResponse: any;



  constructor(private http: HttpClient,
    private formBuilder: FormBuilder,
    private cardservice: TerminalService,
    private router: Router,
    private toast: NgToastService,

  ) {
    this.myform = new FormGroup({
      first6digits: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
      last4digits: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
      issuer: new FormControl('', [Validators.required]),
      cardType: new FormControl('', [Validators.required]),
      expiry: new FormControl('', [Validators.required]),
    });
  }

  get formData() { return this.myform?.controls; };

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

  onSubmit(user: any): void {
    console.log("this.myform.value");

    console.log(this.myform?.value);
    this.showSuccessResponse(this.message, "Sign Up", 3000);
    // this.showError(this.message + "heeee");
    this.toast.success({ detail: "hello", summary: "message", duration: 5000 });

    if (true) {

      this.cardservice.addCardPan(this.myform.value).subscribe({
        next: (response: any) => {
          console.log("response =>>>>", response);
          // this.resetFormInputs();
          this.myform.markAsPristine(); // Reset form state
          this.myform.markAsUntouched(); // Reset form state
          if (response?.message) {
            console.log("step 1")
            this.message = response?.message;
            this.showSuccessResponse(this.message, "Sign Up", 3000);
            alert(this.message);

          } else {
            console.log("step 2")

            // this.message = response?.debugMessage;
            this.showErrorResponse(response?.debugMessage, "Sign up", 3000);
            alert(response?.debugMessage);

          }

          // this.router.navigate(['login']);
        },
        error: (error: any) => {
          console.log("sign up failed", error);
          // Handle validation errors
          if (error.status === 400 && error.error && error.error.errors) {
            let errRes = error?.response;
            let errReason = error?.debugMessage;
            this.showErrorResponse(errRes + errReason, "Sign Up", 3000);
            // You can access the validation errors from the error object
            const validationErrors = error.error.errors;
            // Display the validation errors or handle them accordingly
          }
        }
      });
    } else {
      console.log(user);
      // this.validateForm();
    }
  }

}
