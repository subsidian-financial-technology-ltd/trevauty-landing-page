import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  myform: FormGroup;	  
  constructor( private http: HttpClient) {
    this.myform = new FormGroup({
       uName: new FormControl(	'',	[Validators.required]),
       mobile: new FormControl(	'',	[Validators.required,  Validators.pattern(/^\+?\d{1,3}[-\s]?\d{9,11}$/)]),
       password: new FormControl(  '',  [Validators.required]),
       eMail: new FormControl(  '',  [Validators.required, Validators.pattern('^.+@.+\..+$')]),
       cOption: new FormControl('',   [Validators.required]),
       optionsRadios : new FormControl('',   [Validators.required]),
       optionChecked : new FormControl('',   [Validators.required]),
       address: new FormControl('', 	[Validators.required]),
       dBirth : new FormControl('',   [Validators.required])
    });  
  }

   get formData() { return this.myform.controls; };

validateForm() { 

for(let i in this.myform.controls)
  this.myform.controls[i].markAsTouched();

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

onSubmit (user: any): void  {
console.log(user);    
// this.myform.reset(); // for clearing the inputs field
// this.resetFormInputs();
  if (this.myform.valid) {
  let url = "https://reqres.in/api/users";     
      const headers = new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
    this.http.post(url, user).subscribe((res:any) => console.log("Data Post Done"));
  
}
else{this.validateForm()}
}

}

