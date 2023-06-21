import { Component } from '@angular/core';
import { NgxOtpInputConfig } from 'ngx-otp-input';


@Component({
  selector: 'app-profile-auth',
  templateUrl: './profile-auth.component.html',
  styleUrls: ['./profile-auth.component.scss']
})
export class ProfileAuthComponent {


  showModal = false;
  showOtpModal = false;
  showResetPasswordModal = false;

  toggleModal(){
    this.showModal = !this.showModal;
  }
  toggleOtpModal(){
    this.showOtpModal = !this.showOtpModal;
    this.showModal = false;
  }
  toggleResetPasswordModal(){
    this.showResetPasswordModal = !this.showResetPasswordModal;
    this.showOtpModal = false;
  }


  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,
    autofocus: true,
    classList: {
      inputBox: 'my-super-box-class',
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disable-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class',
    },
  };

  handeOtpChange(value: string[]): void {
    console.log(value);
  }

  handleFillEvent(value: string): void {
    console.log(value);
  }

}
