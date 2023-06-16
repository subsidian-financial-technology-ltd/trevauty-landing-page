import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';




export const routes: Routes = [
  /* See home-routing.component for main route.
     Add additional routes here... For example:
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
  */
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, {
//       enableTracing: true
//     })
//   ],
//   exports: [RouterModule]
// })
export class ManageTerminalRouteModule { }

