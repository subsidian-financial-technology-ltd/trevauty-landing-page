// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class TerminalModule { }


import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from './terminal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ManageTerminalService } from 'src/app/services/manage-terminal.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [TerminalComponent],
  providers: [ManageTerminalService],
  exports: [TerminalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TerminalModule {}