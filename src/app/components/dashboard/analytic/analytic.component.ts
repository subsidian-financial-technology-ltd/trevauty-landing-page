import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { TerminalService } from 'src/app/services/terminal.service';
@Component({
  selector: 'app-analytic',
  templateUrl: './analytic.component.html',
  styleUrls: ['./analytic.component.scss']
})
export class AnalyticComponent {

  data: any[] = []

  constructor(private terminalService: TerminalService) {}

  ngOnInit(): void {
    this.getTerminals();
  }

  getTerminals(){
    this.terminalService.getTerminals().subscribe({
      next:(items: any)=>{
          this.data = items;
      },
      error:(items:any)=>{

      }
    })
  }

  // constructor(private decimalPipe: DecimalPipe) { }

  // public formatNumberWithCommas(number: number) {
  //   return this.decimalPipe.transform(number, '1.0-0');
  // }

}
