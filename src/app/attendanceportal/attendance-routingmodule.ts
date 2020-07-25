import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtendancedetailsComponent } from './atendancedetails/atendancedetails.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';

const routes: Routes = [
  {
    path:'',component:EmployeeDetailsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class attendanceRoutingModule { }
