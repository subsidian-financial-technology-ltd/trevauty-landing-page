import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ModalService } from 'src/app/services/modal.service';
import { TerminalService } from 'src/app/services/terminal.service';


@Component({
  selector: 'app-new-refund-form',
  templateUrl: './new-refund-form.component.html',
  styleUrls: ['./new-refund-form.component.scss']
})
export class NewRefundFormComponent {

  bodyText: string = "";
  showModal = false;
  terminalRequestForm: FormGroup;
  apiResponse: any;


  constructor(
    private modalService: ModalService, 
    private router:Router,
    private terminalService: TerminalService,
    private toast: NgToastService

    ) {
    this.terminalRequestForm = new FormGroup({
      customersFirstName: new FormControl(  '',  [Validators.required]),
      customersLastName: new FormControl(  '',  [Validators.required]),
      locationOfTerminal : new FormControl('',   [Validators.required]),
      nameOfTerminal: new FormControl('', [Validators.required]),
      customersPhoneNumber: new FormControl('', [Validators.required]),
      noteToTreVauty: new FormControl('', [Validators.required]),
      operatorsName: new FormControl('', [Validators.required]),
      disputedAMount: new FormControl('', [Validators.required]),
      dateAndTimeOfTransaction: new FormControl('', [Validators.required]),
    })
   }

   get formData() { return this.terminalRequestForm.controls; };

   validateForm() { 

    for(let i in this.terminalRequestForm.controls)
      this.terminalRequestForm.controls[i].markAsTouched();
    }

    resetFormInputs() {
      this.terminalRequestForm.setValue({
        customersFirstName: '',
        customersLastName: '',
        locationOfTerminal: '',
        nameOfTerminal: '',
        customersPhoneNumber: '',
        noteToTreVauty: '',
        operatorsName: '', 
        disputedAMount:'', 
        dateAndTimeOfTransaction:''

      });
    }

    showSuccess() {
      this.toast.success({detail:"SUCCESS",summary:this.apiResponse.displayMessage ,duration:5000});
    }

    onSubmit(user: any): void {
        if (this.terminalRequestForm) {
          console.log({ user });
          this.terminalService.terminalRefundRequest(this.terminalRequestForm.value).subscribe({
            next: (response: any) => {
              console.log("response =>>>>", response);
              this.apiResponse = response;
              console.log(this.apiResponse);
              this.resetFormInputs();
              this.showSuccess()
              this.toggleModal();
              
              // this.router.navigate(['login']);
            },
            error: (error: any) => {
              console.log("sign up failed", error);
              this.router.navigate([]);
            }
          });
        } else {
          console.log(user);
          this.validateForm();
        }
      }

  ngOnInit() {
      this.bodyText = 'This text can be updated in modal 1';
  }

  openModal(id: string) {
      this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
  }

}
