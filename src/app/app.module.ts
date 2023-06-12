import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SinginComponent } from './components/auth/singin/singin.component';

import { SidenavComponent } from './components/dashboard/sidenav/sidenav.component';
import { SublevelMenuComponent } from './components/dashboard/sidenav/sublevel-menu.component';
import { PasswordresetComponent } from './components/auth/passwordreset/passwordreset.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { AnalyticComponent } from './components/dashboard/analytic/analytic.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BodyComponent } from './components/dashboard/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SinginComponent,
    SidenavComponent,
    SublevelMenuComponent,
    PasswordresetComponent,
    OverviewComponent,
    AnalyticComponent,
    DashboardComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
