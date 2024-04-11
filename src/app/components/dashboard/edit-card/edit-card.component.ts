import { NotExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { TerminalService } from 'src/app/services/terminal.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent {

  cardDetails: FormGroup;
  cardId: any;

  constructor(private router : Router,
    private cardService: TerminalService,
    private toast: NgToastService

  ){

    this.cardDetails = new FormGroup({
      name : new FormControl('', [Validators.required]),
      cardPan: new FormControl('',[Validators.required]),
      expiryMonth: new FormControl('', [Validators.required]),
      expiryYear: new FormControl('', [ Validators.required])
    })

  }

  validateForm() {
    for (let i in this.cardDetails.controls)
      this.cardDetails.controls[i].markAsTouched();
  }

  get formData() {
    return this.cardDetails.controls
  }

  getCardDetail(){
    this.cardService.getCard(this.cardId).subscribe({
      next: (res: any) => {
        console.log(res);

      }, error: (err:any) => {
        console.log(err);
      }
    })
  }

  ngOnInit(){
    // this.getCardDetail();
  }

  goToManageCard(){
    this.router.navigate(["dashboard/edit-card"])
  }

  showSuccessResponse(message: string, header: string, duration: number) {
    this.toast.success({ detail: message, summary: header, duration: duration });
  }
  showErrorResponse(message: string, header: string, duration: number) {
    this.toast.error({ detail: message, summary: header, duration: duration });
  }

  submit(){
    console.log(this.cardDetails.value);
    this.cardService.editCardPan(this.cardDetails.value).subscribe({
      next : (res: any) =>{
        this.showSuccessResponse(res, "Update Card Pan", 3000);
      }, 
      error: (err: any) => {
        this.showErrorResponse(err, "Update Card Pan", 3000);
        console.error(err);
      }
    })
  }

}
