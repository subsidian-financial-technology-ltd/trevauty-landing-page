import { Component } from '@angular/core';
import { TerminalService } from 'src/app/services/terminal.service';

@Component({
  selector: 'app-deactivate-terminals',
  templateUrl: './deactivate-terminals.component.html',
  styleUrls: ['./deactivate-terminals.component.scss']
})
export class DeactivateTerminalsComponent {

  constructor(private terminalService: TerminalService){
  }

  data: any[] = []

  ngOnInit(): void {
  this.getActionTerminals();
  }

  getActionTerminals(){
    this.terminalService.getActionTerminals().subscribe({
      next:(items: any)=>{
          this.data = items;
      },
      error:(items:any)=>{

      }
    })
  }
  
}
