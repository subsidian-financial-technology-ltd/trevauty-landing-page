import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';
import { TerminalService } from 'src/app/services/terminal.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent {

  id = this.route.snapshot.params['id'];
  cardEntity: any;
  cardDetails: any;


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
    private route: ActivatedRoute
  ) {
    // this.myform = new FormGroup({
    //   first6digits: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
    //   last4digits: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
    //   country: new FormControl('Nigeria', [Validators.required]),
    //   issuer: new FormControl('', [Validators.required]),
    //   cardType: new FormControl('', [Validators.required]),
    //   expiry: new FormControl('', [Validators.required]),
    // });
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
    this.getCardByPan(this.id);

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

      this.cardservice.updateCardPan(this.myform.value).subscribe({
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

  initForm() {
    this.myform = new FormGroup({
      cardPan: new FormControl(this.cardEntity?.cardPan, [Validators.required]),
      cardOwner: new FormControl(this.cardEntity?.cardOwner, [Validators.required]),
      cardType: new FormControl(this.cardEntity?.cardType, [Validators.required]),
      first6digits: new FormControl(this.cardEntity?.cardPan.slice(0,6), [Validators.required, Validators.pattern('^[0-9]{11}$')]),
      last4digits: new FormControl(this.cardEntity?.cardPan.slice(6,10), [Validators.required, Validators.pattern('^[0-9]{11}$')]),
      country: new FormControl('Nigeria', [Validators.required]),
      issuer: new FormControl('', [Validators.required]),
      expiry: new FormControl(this.cardEntity?.expiry, [Validators.required]),
    });
  }
  

  getCardByPan(cardPan : string){
    this.cardservice.getCardBy(cardPan).subscribe({
      next: (res: any) => {
        this.cardEntity = res.data;
        this.initForm();
          console.log(res);

      }, error: (err: any) => {
          console.log(err);
      }
    })
  }

}
