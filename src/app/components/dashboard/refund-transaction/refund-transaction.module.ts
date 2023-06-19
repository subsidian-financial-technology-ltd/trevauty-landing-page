import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from '../manage-terminal/material.module';
import { RefundTransactionComponent } from './refund-transaction.component';

@NgModule({
  declarations: [RefundTransactionComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap:[RefundTransactionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class RefundTransactionModule { }
