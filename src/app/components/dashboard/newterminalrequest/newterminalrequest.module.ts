import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewterminalrequestComponent } from './newterminalrequest.component';
import { ModalComponent } from '../../modal/modal.component';
import { ModalModule } from '../../modal/modal.module';

@NgModule({
  declarations: [
    NewterminalrequestComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class NewterminalrequestModule { }
