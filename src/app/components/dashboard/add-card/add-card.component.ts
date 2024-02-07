import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent {

  formGroup: FormGroup ;

  constructor(private router: Router){

    console.log("entered the constructor");
    this.formGroup = new FormGroup({
      date: new FormControl('', [Validators.required]),
    })
  }

  goToManageCard(){
    this.router.navigate(["dashboard/cards"])

  }
}
