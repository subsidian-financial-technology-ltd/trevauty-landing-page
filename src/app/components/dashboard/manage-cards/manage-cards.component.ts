import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-cards',
  templateUrl: './manage-cards.component.html',
  styleUrls: ['./manage-cards.component.scss']
})
export class ManageCardsComponent{
  formGroup: FormGroup ;

  constructor(private router: Router){

    console.log("entered the constructor");
    this.formGroup = new FormGroup({
      date: new FormControl('', [Validators.required]),
    })
  }

  // ngOnInit() {
  //     this.formGroup = new FormGroup({
  //         date: new FormControl<Date | null>(null)
  //     });
  // } 

  goToAddCard(){
    this.router.navigate(["dashboard/add-card"])
  }
}
