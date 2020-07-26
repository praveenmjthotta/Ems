import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { LoginComponent } from './login/login.component'; import { FlexLayoutModule } from '@angular/flex-layout';

import { MatDialogModule } from "@angular/material/dialog";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PayrollComponent } from './payroll/payroll.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    PayrollComponent,
    DashboardComponent,
    HelpdeskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule, MatDialogModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HelpdeskComponent]

})
export class AppModule { }
