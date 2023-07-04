import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  myform: FormGroup;	  
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  password:string = "password";
  confirmPassword:string = "password";

  constructor( private http: HttpClient,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    
    ) {
    this.myform = new FormGroup({
       uName: new FormControl(	'',	[Validators.required]),
       mobile: new FormControl(	'',	[Validators.required,  Validators.pattern(/^\+?\d{1,3}[-\s]?\d{9,11}$/)]),
       password: new FormControl(  '',  [Validators.required]),
       eMail: new FormControl(  '',  [ Validators.pattern('^.+@.+\..+$')]),
       cOption: new FormControl('',   [Validators.required]),
       optionChecked : new FormControl('',   [Validators.required]),
  
    });  
  }

  get formData() { return this.myform.controls; };

validateForm() { 

for(let i in this.myform.controls)
  this.myform.controls[i].markAsTouched();

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
toggleShowConfirmPassword(){
  if (this.confirmPassword === 'password') {
    this.confirmPassword = 'text';
    this.showConfirmPassword = true;
  } else {
    this.confirmPassword = 'password';
    this.showConfirmPassword = false;
  }
}

resetFormInputs() {
  this.myform.setValue({
    uName: '',
    mobile: '',
    password: '',
    eMail: '',
    cOption: '',
    optionsRadios: '',
    optionChecked: '',
    address: '',
    dBirth: ''
  });
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



onSubmit(user: any): void {
  if (this.myform.valid) {
    console.log({ user });
    this.authService.accountSignUp(this.myform.value).subscribe({
      next: (response) => {
        console.log("response =>>>>", response);
        // this.resetFormInputs();
        this.myform.markAsPristine(); // Reset form state
        this.myform.markAsUntouched(); // Reset form state
        this.router.navigate(['login']);
      },
      error: (error) => {
        console.log("sign up failed", error);
        // Handle validation errors
        if (error.status === 400 && error.error && error.error.errors) {
          // You can access the validation errors from the error object
          const validationErrors = error.error.errors;
          // Display the validation errors or handle them accordingly
        }
      }
    });
  } else {
    console.log(user);
    this.validateForm();
  }
}

}

