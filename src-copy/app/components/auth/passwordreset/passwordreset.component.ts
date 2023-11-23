import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.scss']
})
export class PasswordresetComponent {
  passwordResetForm: FormGroup;	  
  apiResponse:any;
  showSuccessResponse : boolean = false;


  constructor( private http: HttpClient,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toast: NgToastService
    
    ) {
    this.passwordResetForm = new FormGroup({
      email: new FormControl(  '',  [Validators.required, Validators.pattern('^.+@.+\..+$')]),
    }); 
  }

get formData() { return this.passwordResetForm.controls; };

validateForm() { 
for(let i in this.passwordResetForm.controls)
  this.passwordResetForm.controls[i].markAsTouched();
}

showSuccess() {
  this.toast.success({detail:"SUCCESS",summary:this.apiResponse?.displayMessage ,duration:5000});
}

ngOnInit(): void {
  this.showSuccess();
}

resetFormInputs() {
  this.passwordResetForm.setValue({
    email: '',
  });
}
navigateToLogin(){
  this.router.navigate(["/login"]);
}

onSubmit(user: any): void {
  if (this.passwordResetForm.valid) {
    console.log({ user });
    this.authService.passwordReset(this.passwordResetForm.value).subscribe({
      next: (response) => {
        console.log("response =>>>>", response);
        this.apiResponse = response.data;
        console.log(this.apiResponse);
        this.resetFormInputs();
        this.showSuccess()
        this.showSuccessResponse = true;
        
        // this.router.navigate(['login']);
      },
      error: (error) => {
        console.log("sign up failed", error);
        this.router.navigate([]);
      }
    });
  } else {
    console.log(user);
    this.validateForm();
  }
}
}
