import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtendancedetailsComponent } from './atendancedetails/atendancedetails.component';
import { attendanceRoutingModule } from './attendance-routingmodule';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { UpdateemployeeComponent } from '../updateemployee/updateemployee.component';
import {MatDialogModule} from "@angular/material/dialog";
import { GridModule } from '@progress/kendo-angular-grid';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AtendancedetailsComponent, 
    EmployeeDetailsComponent,
    AddemployeeComponent,
    UpdateemployeeComponent],
  imports: [
    CommonModule,
    attendanceRoutingModule,MatDialogModule,GridModule, FormsModule,
  ] ,entryComponents: [UpdateemployeeComponent,AddemployeeComponent]
})
export class AttendanceportalModule { }
