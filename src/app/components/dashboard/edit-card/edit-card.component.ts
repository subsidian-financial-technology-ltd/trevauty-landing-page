import { NotExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  id = this.route.snapshot.params['id'];
  cardEntity: any;


  constructor(private router : Router,
    private cardService: TerminalService,
    private toast: NgToastService,
    private route: ActivatedRoute


  ){

    this.cardDetails = new FormGroup({
      // name : new FormControl('', [Validators.required]),
      cardPan: new FormControl(this.cardEntity?.cardPan,[Validators.required]),
      cardOwner: new FormControl(this.cardEntity?.cardOwner,[Validators.required]),
      cardType: new FormControl(this.cardEntity?.cardType,[Validators.required]),

      // expiryMonth: new FormControl('', [Validators.required]),
      // expiryYear: new FormControl('', [ Validators.required]),
      first6digits: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
      last4digits: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
      country: new FormControl('Nigeria', [Validators.required]),
      issuer: new FormControl('', [Validators.required]),
      expiry: new FormControl(this.cardEntity?.expiry, [Validators.required]),
    })

  }

  // {
  //   "first6digits": "string",
  //   "last4digits": "string",
  //   "country": "string",
  //   "issuer": "string",
  //   "expiry": "string",
  //   "cardType": "VISA"
  // }

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
    this.getCardByPan(this.id);
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


  getCardByPan(cardPan : string){
    this.cardService.getCardBy(cardPan).subscribe({
      next: (res: any) => {
        this.cardEntity = res.data;
          console.log(res);
      }, error: (err: any) => {
          console.log(err);
      }
    })
  }

}
