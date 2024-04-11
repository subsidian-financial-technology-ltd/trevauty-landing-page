import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomerDetails } from 'src/app/types/Type';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  showModal = false;
  // authForm: FormGroup;	  
  // showPassword: boolean = false;
  // password:string = "password";
  formSubmitted: boolean = false;
  // apiResponse:any;
  // message:string = "";
  otp: string = "";
  // otpObj: FormGroup;



  myform: FormGroup;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  password: string = "password";
  confirmPassword: string = "password";
  message: string = "";
  apiResponse: any;
  customerDetails: CustomerDetails = {
    country:"",
    bvn:"",
    nin:"",
    address: "098756",
    last4digits:"",
    first6digits:"",
    issuer:"",
    cardType:"",
    expiry:""

  };

  // constructor(private http: HttpClient,
  //   private formBuilder: FormBuilder,
  //   private authService: AuthService,
  //   private router: Router,
  //   private toast: NgToastService,
  //   private customerService: CustomerService


  // ) {
  //   this.myform = new FormGroup({
  //     country: new FormControl(this.customerDetails.country, [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')]),
  //     bvn: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
  //     address: new FormControl('', [Validators.required]),
  //     nin: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
  //     first6digits: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
  //     last4digits: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
  //     issuer: new FormControl('', [Validators.required]),
  //     cardType: new FormControl('', [Validators.required]),
  //     expiry: new FormControl('', [Validators.required]),
  //   });
  // }



  constructor(private http: HttpClient,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toast: NgToastService,
    private customerService: CustomerService,

  ) {
    this.myform = new FormGroup({
      country: new FormControl(this.customerDetails.country, [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')]),
      bvn: new FormControl(this.customerDetails.bvn, [Validators.required, Validators.pattern('^[0-9]{11}$')]),
      address: new FormControl(this.customerDetails.address, [Validators.required]),
      nin: new FormControl(this.customerDetails.nin, [Validators.required, Validators.pattern('^[0-9]{11}$')]),
      first6digits: new FormControl(this.customerDetails.first6digits, [Validators.required, Validators.pattern('^[0-9]{11}$')]),
      last4digits: new FormControl(this.customerDetails.last4digits, [Validators.required, Validators.pattern('^[0-9]{11}$')]),
      issuer: new FormControl(this.customerDetails.issuer, [Validators.required]),
      cardType: new FormControl(this.customerDetails.cardType, [Validators.required]),
      expiry: new FormControl(this.customerDetails.expiry, [Validators.required]),
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

  getCustomerDetails(){
    this.customerService.getCustomerDetails().subscribe({
      next: (res: any) => {
        this.customerDetails = res;
      }, 
      error: (err: any) => {
        console.error(err);
      this.showErrorResponse(this.message, "Customer Details", 3000);

      }
    })
  }

  ngOnInit() {
    console.log("hello world");
    this.getCustomerDetails();
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


      const reqBody = {
        country: this.myform.value.country,
        bvn: this.myform.value.bvn,
        address: this.myform.value.address,
        nin: this.myform.value.nin,
        cardRequest: {
          first6digits: this.myform.value.first6digits,
          last4digits: this.myform.value.last4digits,
          country: this.myform.value.country,
          issuer: this.myform.value.issuer,
          expiry: this.myform.value.expiry,
          cardType: this.myform.value.cardType
        }
      }

    console.log(reqBody);


      this.authService.addCustomerProfile(reqBody).subscribe({
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


  onSubmits(user: any): void {
    // this.toggleModal();

    // window.localStorage.setItem("token");
    // console.log(this.formSubmitted);
    // this.formSubmitted = true;
    if (this.myform.valid) {
      console.log({ user });
      this.authService.accountLogin(this.myform.value).subscribe({
        next: (response: any) => {
          console.log("response =>>>>", response);
          this.apiResponse = response;
          console.log(this.apiResponse);
          this.resetFormInputs();
          this.message = response?.response;
          window.localStorage.setItem("token", response?.token);
          this.showSuccessResponse(this.message, "Login", 3000);

          // this.toggleModal();

          // this.router.navigate(['login']);
        },
        error: (error: any) => {
          console.log("sign up failed", error);
          let errRes = error?.response;
          let errReason = error?.debugMessage;
          this.showErrorResponse(errRes + errReason || "Network  error", "Login Failed", 3000);
          this.router.navigate([]);
        }
      });
    } else {
      console.log(user);
      this.validateForm();
    }
  }


}
