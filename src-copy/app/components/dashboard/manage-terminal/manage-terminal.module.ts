import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageTerminalComponent } from './manage-terminal.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from './material.module';
import { NewterminalrequestComponent } from '../newterminalrequest/newterminalrequest.component';

@NgModule({
  declarations: [ManageTerminalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [ManageTerminalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class ManageTerminalModule { }