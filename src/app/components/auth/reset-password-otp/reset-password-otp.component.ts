import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgOtpInputConfig } from 'ng-otp-input';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password-otp',
  templateUrl: './reset-password-otp.component.html',
  styleUrls: ['./reset-password-otp.component.scss']
})
export class ResetPasswordOtpComponent {

  showModal = false;
  authForm: FormGroup;	  
  showPassword: boolean = false;
  password:string = "password";
  formSubmitted: boolean = false;
  apiResponse:any;
  message:string = "";
  otp:string  = "";
  otpObj: FormGroup;

  constructor( private http: HttpClient,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toast: NgToastService,
  
    
    ) {
    this.authForm = new FormGroup({
      email: new FormControl(  '',  [Validators.required, Validators.pattern('^.+@.+\..+$')]),
       password: new FormControl(  '',  [Validators.required]),
       keepMeLoggedIn : new FormControl(false),
  
    }); 

    this.otpObj = new FormGroup({
      otp: new FormControl('', [Validators.required, Validators.maxLength(6), Validators.minLength(6)])
    })
    
    // this.authForm = this.formBuilder.group({
    //   email: ['', [Validators.required, Validators.pattern('^.+@.+\..+$')]],
    //   password: ['', [Validators.required]],
    //   keepMeLoggedIn: ['', [Validators.required]],
    // });
  }


   get formData() { return this.authForm.controls; };

validateForm() { 

for(let i in this.authForm.controls)
  this.authForm.controls[i].markAsTouched();
}

// showSuccess(message: string) {
//   this.toast.success({detail:message,summary:this.apiResponse?.displayMessage ,duration:5000});
// }

// showError(message: string) {
//   this.toast.error({detail:message,summary:this.apiResponse?.displayMessage ,duration:5000});
// }


showSuccessResponse(message: string, header: string, duration: number) {
  this.toast.success({ detail: message, summary: header, duration: duration });
}
showErrorResponse(message: string, header: string, duration: number) {
  this.toast.error({ detail: message, summary: header, duration: duration });
}


ngOnInit(): void {
  // this.showSuccess(this.message);
console.log(this.formSubmitted);
}


toggleShowPassword(){
  if (this.password === 'password') {
    this.password = 'text';
    this.showPassword = true;
  } else {
    this.password = 'password';
    this.showPassword = false;
  }
}

// resetFormInputs() {
//   this.authForm.setValue({
//     email: '',
//     password: '',
//     keepMeLoggedIn: '',
//   });
// }

resetFormInputs() {
  this.authForm.reset();
  Object.keys(this.authForm.controls).forEach(key => {
      this.authForm.get(key)?.setErrors(null); 
  });
}

onSubmit(user: any): void {
  this.toggleModal();

  // window.localStorage.setItem("token");
console.log(this.formSubmitted);
  this.formSubmitted = true;
  if (this.authForm.valid) {
    console.log({ user });
    this.authService.accountLogin(this.authForm.value).subscribe({
      next: (response) => {
        console.log("response =>>>>", response);
        this.apiResponse = response;
        console.log(this.apiResponse);
        this.resetFormInputs();
        this.message = response?.response;
        window.localStorage.setItem("token", response?.token);
        this.showSuccessResponse(this.message, "Login", 3000);

        this.toggleModal();
        
        // this.router.navigate(['login']);
      },
      error: (error) => {
        console.log("sign up failed", error);
        let errRes = error?.response;
        let errReason = error?.debugMessage;
        this.showErrorResponse(errRes + errReason || "Netword error", "Login Failed", 3000);
        this.router.navigate([]);
      }
    });
  } else {
    console.log(user);
    this.validateForm();
  }
}



  otpConfig :NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 5,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles:{
      'display':'flex',
      'minWidth': '55px',
      'minHeight': '55px',
      'marginRight':'2rem'
    },
    containerStyles:{
      'display':'flex'
    },
    inputClass:'each_input',
    containerClass:'all_inputs'
  };

  handeOtpChange(value: any): void {
    console.log(value);

    if(this.otp.length === 6){
      console.log("correct");
      this.otp = value.join();
      let optObj = {
        otp:this.otp
      }
      this.authService.validateToken(optObj).subscribe({
        next:(res: any)=>{
          // console.log("================")
          // UtilService.setUserDetails(res.data);
          console.log(res)
  
        },
        error:(err: any)=>{
          console.log(err);
        }
      })
    }


  }

  handleFillEvent(value: string): void {
    if(value.length === 6){
      console.log("correct");
      // this.otp = value.join();
      let optObj = {
        otp:value
      }
      this.authService.validateToken(JSON.stringify(optObj)).subscribe({
        next:(res: any)=>{
          console.log(res);
          // UtilService.setUserDetails(res.data);
          this.router.navigate(['dashboard']);
          window.localStorage.setItem('token', res?.token);
          this.showSuccessResponse(this.message, "Login", 3000);

          console.log("success");
        },
        error:(err: any)=>{
          console.log(err);
          this.router.navigate(['login']); 
          console.log("failure");
        }
      })
    }
    console.log(value);
  }

  toggleModal(){
    this.showModal = !this.showModal;
  }

  handleToken(tokenValue: string){
    // this.handleToken = !
  }




}
