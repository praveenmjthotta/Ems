import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { employee } from '../Models/employee';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {
employee:employee;
designation:string;
empid:string;
name:string;
totalexperience:string;
isSelected:false

  constructor(
    public dialogRef: MatDialogRef<AddemployeeComponent>) { }

  ngOnInit(): void {
  }

  save() {
    this.employee={
      designation:this.designation,
      empid:this.empid,
      name:this.name,
      totalexperience:this.totalexperience,
      isSelected:false

    }
    this.dialogRef.close(this.employee);
  }

  close() {
    this.dialogRef.close();
  }

}
