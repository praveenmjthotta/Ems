import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { employee } from '../Models/employee';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.scss']
})
export class UpdateemployeeComponent implements OnInit {
  employee: employee;
  designation: string;
  empid: string;
  name: string;
  totalexperience: string;
  isSelected: false
  constructor(
    public dialogRef: MatDialogRef<UpdateemployeeComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.designation = data.designation;
    this.empid = data.empid;
    this.name = data.name;
    this.totalexperience = data.totalexperience;




  }

  ngOnInit(): void {
  }

  save() {
    this.employee = {
      designation: this.designation,
      empid: this.empid,
      name: this.name,
      totalexperience: this.totalexperience,
      isSelected: false

    }
    this.dialogRef.close(this.employee);
  }

  close() {
    this.dialogRef.close();
  }


}
