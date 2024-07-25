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
  isLoading: boolean = false;
  skeletonItems = Array(2).fill(0); 
  

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

  goToGetCard(id: String){
    this.router.navigate(["dashboard/get-card/" + id])
  }

  ngOnInit(){
    this.getCardList();
  }

  getCardList(){
    this.isLoading = true;
    this.cardService.getCardList().subscribe({
      next: (response: any) => {
        console.log(response);
        this.cardList = response.data;
        this.isLoading = false;

      },
      error: (err: any) => {
        this.isLoading = false;
      }
    })
  }


}
