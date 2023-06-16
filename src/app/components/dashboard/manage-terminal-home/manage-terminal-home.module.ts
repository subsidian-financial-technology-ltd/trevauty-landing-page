import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../manage-terminal/material.module';
import { RouterModule } from '@angular/router';
import { ManageTerminalHomeComponent } from './manage-terminal-home.component';
import { HOME_ROUTE } from './manage-terminal-routing.module';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [ManageTerminalHomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManageTerminalHomeModule { }
