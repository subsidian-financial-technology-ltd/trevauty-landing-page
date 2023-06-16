import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageTerminalHomeComponent } from './manage-terminal-home.component';
import { Route } from '@angular/router';


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class ManageTerminalRoutingModule { }




export const HOME_ROUTE: Route = {
  path: '',
  component: ManageTerminalHomeComponent,
  // children: [
  //   {
  //     path: 'list',
  //     loadChildren: () => import('../overviewterminal-list/overviewterminal-list.module').then(m => m.OverviewterminalListModule)
  //   },
  //   {
  //     path: 'request',
  //     loadChildren: () => import('../newterminalrequest/newterminalrequest.module').then(m => m.NewterminalrequestModule)
  //   },
  //   {
  //     path: 'activate',
  //     loadChildren: () => import('../deactivate-terminal/deactivate-terminal.module').then(m => m.DeactivateTerminalModule)
  //   }
  // ]
};
