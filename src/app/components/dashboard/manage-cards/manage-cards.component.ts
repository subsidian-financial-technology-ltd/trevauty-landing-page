import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TerminalService } from 'src/app/services/terminal.service';
import { CardResponse } from 'src/app/types/Type';

@Component({
  selector: 'app-manage-cards',
  templateUrl: './manage-cards.component.html',
  styleUrls: ['./manage-cards.component.scss']
})
export class ManageCardsComponent{
  formGroup: FormGroup ;
  cardList: CardResponse[] = [];
  

  constructor(private router: Router,
    private cardService: TerminalService
  ){

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

  goToEditCard(){
    this.router.navigate(["dashboard/edit-card"])
  }

  ngOnInit(){
    this.getCardList();
  }

  getCardList(){
    this.cardService.getCardList().subscribe({
      next: (response: any) => {
        console.log(response);
        this.cardList = response.data;
      },
      error: (err: any) => {

      }
    })
  }


}
