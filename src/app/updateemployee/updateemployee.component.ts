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
  empID: string;
  name: string;
  totalExperience: string;
  isSelected: false;
  constructor(
    public dialogRef: MatDialogRef<UpdateemployeeComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.designation = data.designation;
    this.empID = data.empID;
    this.name = data.name;
    this.totalExperience = data.totalExperience;




  }

  ngOnInit(): void {
  }

  save() {
    this.employee = {
      designation: this.designation,
      empID: this.empID,
      name: this.name,
      totalExperience: this.totalExperience,
      isSelected: false

    }
    this.dialogRef.close(this.employee);
  }

  close() {
    this.dialogRef.close();
  }


}
