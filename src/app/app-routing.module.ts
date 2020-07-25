import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PayrollComponent } from './payroll/payroll.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'employee', 
    loadChildren: "./attendanceportal/attendanceportal.module#AttendanceportalModule"
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
