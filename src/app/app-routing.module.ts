import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SinginComponent } from './components/auth/singin/singin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { AnalyticComponent } from './components/dashboard/analytic/analytic.component';
import { PasswordresetComponent } from './components/auth/passwordreset/passwordreset.component';
import { ManageTerminalComponent } from './components/dashboard/manage-terminal/manage-terminal.component';
import { ManageTerminalHomeComponent } from './components/dashboard/manage-terminal-home/manage-terminal-home.component';
import { OverviewterminalListComponent } from './components/dashboard/overviewterminal-list/overviewterminal-list.component';
import { NewterminalrequestComponent } from './components/dashboard/newterminalrequest/newterminalrequest.component';
import { DeactivateTerminalModule } from './components/dashboard/deactivate-terminal/deactivate-terminal.module';
import { DeactivateTerminalsComponent } from './components/dashboard/deactivate-terminal/deactivate-terminals.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: SinginComponent },
  { path: 'password-reset', component: PasswordresetComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'overview', component: OverviewComponent },
    { path: 'analytic', component: AnalyticComponent },
    { path: 'manage-terminal', component: ManageTerminalComponent, children:[
      { path: '', component: ManageTerminalHomeComponent, children:[
        { path:"", redirectTo: 'list', pathMatch: 'full'},
        { path:"list", component: OverviewterminalListComponent },
        { path:"request", component: NewterminalrequestComponent },
        { path:"deactivate", component: DeactivateTerminalsComponent }
      ]},
    ] },
  ]},
  { path: '**', redirectTo: 'login' } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
