import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss']
})
export class ConfirmPasswordComponent {


  showModal = true;
  authForm: FormGroup;
  showPassword: boolean = false;
  password: string = "password";
  formSubmitted: boolean = false;
  apiResponse: any;
  message: string = "";

  constructor(private http: HttpClient,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toast: NgToastService,


  ) {
    this.authForm = new FormGroup({
      confirmPassword: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),

    });
  }


  get formData() { return this.authForm.controls; };
  validateForm() {

    for (let i in this.authForm.controls)
      this.authForm.controls[i].markAsTouched();
  }

  showSuccess(message: string) {
    this.toast.success({ detail: message, summary: this.apiResponse?.displayMessage, duration: 5000 });
  }

  showError(message: string) {
    this.toast.error({ detail: message, summary: this.apiResponse?.displayMessage, duration: 5000 });
  }


  ngOnInit(): void {
    this.showSuccess(this.message);
    console.log(this.formSubmitted);
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

  resetFormInputs() {
    this.authForm.setValue({
      email: '',
      password: '',
      keepMeLoggedIn: '',
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
          this.showSuccess(this.message);

          this.toggleModal();

          // this.router.navigate(['login']);
        },
        error: (error) => {
          console.log("sign up failed", error);
          let errRes = error?.response;
          let errReason = error?.debugMessage;
          this.showError(errRes + errReason);
          this.router.navigate([]);
        }
      });
    } else {
      console.log(user);
      this.validateForm();
    }
  }


  toggleModal() {
    console.log("hello 45")
    this.showModal = !this.showModal;
    console.log(this.showModal);
  }

  handleToken(tokenValue: string) {
    // this.handleToken = !
  }


}
