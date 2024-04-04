import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {



  showModal = false;
  // authForm: FormGroup;	  
  // showPassword: boolean = false;
  // password:string = "password";
  formSubmitted: boolean = false;
  // apiResponse:any;
  // message:string = "";
  otp:string  = "";
  // otpObj: FormGroup;



  myform: FormGroup;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  password: string = "password";
  confirmPassword: string = "password";
  message: string = "";
  apiResponse: any;



  constructor(private http: HttpClient,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toast: NgToastService,

  ) {
    this.myform = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.pattern('^.+@.+\..+$')]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\+?\d{1,3}[-\s]?\d{9,11}$/)]),
      password: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),

      //  cOption: new FormControl('',   [Validators.required]),
      //  agreeWithTermsAndCondition : new FormControl('',   [Validators.required]),

    });
  }

  get formData() { return this.myform?.controls; };

  validateForm() {

    for (let i in this.myform?.controls)
      this.myform?.controls[i].markAsTouched();

  }

  toggleShowPassword() {
    if (this.password === 'password') {
      this.password = 'text';
      this.showPassword = true;
    } else {
      this.password = 'password';
      this.showPassword = false;
    }
  }
  toggleShowConfirmPassword() {
    if (this.confirmPassword === 'password') {
      this.confirmPassword = 'text';
      this.showConfirmPassword = true;
    } else {
      this.confirmPassword = 'password';
      this.showConfirmPassword = false;
    }
  }

  // resetFormInputs() {
  //   this.myform.setValue({
  //     firstName: '',
  //     lastName: '',
  //     phoneNumber: '',
  //     password: '',
  //     email: '',
  //     cOption: '',
  //     optionsRadios: '',
  //     agreeWithTermsAndCondition: '',
  //     address: '',
  //     dateOfBirth: ''
  //   });
  // }


  showSuccessResponse(message: string, header: string, duration: number) {
    this.toast.success({ detail: message, summary: header, duration: duration });
  }
  showErrorResponse(message: string, header: string, duration: number) {
    this.toast.error({ detail: message, summary: header, duration: duration });
  }

  // onSubmit(user: any): void {
  //   if (this.myform.valid) {
  //     console.log({ user });
  //     this.authService.accountSignUp(this.myform.value).subscribe({
  //       next: (response) => {
  //         console.log("response =>>>>", response);
  //         this.resetFormInputs();
  //         this.router.navigate(['login']);
  //       },
  //       error: (error) => {
  //         console.log("sign up failed", error);
  //         this.router.navigate([]);
  //       }
  //     });
  //   } else {
  //     console.log(user);
  //     this.validateForm();
  //   }
  // }

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
    this.showSuccessResponse(this.message, "Sign Up", 3000);
    // this.showError(this.message + "heeee");
    this.toast.success({ detail: "hello", summary: "message", duration: 5000 });



    if (this.myform?.valid) {
      console.log({ user });
      this.authService.accountSignUp(this.myform.value).subscribe({
        next: (response) => {
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
        error: (error) => {
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
        next: (response) => {
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
        error: (error) => {
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

