// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-terminal',
//   templateUrl: './terminal.component.html',
//   styleUrls: ['./terminal.component.scss']
// })
// export class TerminalComponent {

// }



import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent {
  @Input() terminal: any;
  @Output() addPerson = new EventEmitter<any>();
  @Output() editPerson = new EventEmitter<any>();
}