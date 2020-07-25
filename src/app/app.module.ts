import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClient,HttpClientModule}from '@angular/common/http'
import { LoginComponent } from './login/login.component'; import { FlexLayoutModule } from '@angular/flex-layout';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PayrollComponent } from './payroll/payroll.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    PayrollComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,

    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
