// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class ModalModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
      ModalComponent
    ],
    exports: [ModalComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class ModalModule { }
