import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from 'src/app/employeeservice.service'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { UpdateemployeeComponent } from '../updateemployee/updateemployee.component';
import { employee } from '../Models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  allEmployees: any[] = [];
  modifyRecords: any[] = [];
  pageSize = 10;
  constructor(private _employeServices: EmployeeserviceService, private _MatDialog: MatDialog,

    private router: Router) { }

  ngOnInit(): void {

    this.allEmployees = [];
    this._employeServices.getAllEmployess().
      subscribe((x: any) => {
        debugger;
        this.allEmployees = x;

      });

    if (this.allEmployees.length === 0) {
      this.allEmployees = [{
        isSelected: false,
        empID: "01",
        name: "Praveen",
        designation: "Software Engineer",
        totalexperience: "3",
      },
      {
        isSelected: false,
        empID: "02",
        name: "kumara",
        designation: "Senoir Software Engineer",
        totalexperience: "3",
      },
      {
        isSelected: false,
        empID: "03",
        name: "Murugesan",
        designation: "Manager",
        totalexperience: "3",
      },
      ]
    }
  }

  changeStatus(event: any) {
    debugger;
    console.log(event);
    this.modifyRecords.push(event);

  }

  addEmployee() {
    debugger;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = "400px";
    dialogConfig.width = "600px";


    let dialogRef = this._MatDialog.open(AddemployeeComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      debugger;
      this.allEmployees.push(result);
    });
  }

  updateEmployee(dataItem: any) {
    console.log(dataItem);
    debugger;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = "400px";
    dialogConfig.width = "700px";
    //const updateItem = this.allEmployees.filter((x: employee) => x.isSelected);
    dialogConfig.data = dataItem;

    // const isRecordSelected = this.allEmployees.filter(x => x.isSelected)
    if (true) {
      let dialogRef = this._MatDialog.open(UpdateemployeeComponent, dialogConfig);
      dialogRef.afterClosed().subscribe((result: employee) => {
        debugger;
        if (result) {
          this.allEmployees.map((x: employee) => {
            if (x.empID === result.empID) {
              x.designation = result.designation;
              x.name = result.name;
              x.totalExperience = result.totalExperience;
            }
          })
        }
      });
    }
    else {

    }
  }

  deleteEmployee(dataItem: any) {
    debugger;
    this.allEmployees = this._employeServices.deleteEmployees(dataItem,this.allEmployees);
    this.modifyRecords = [];
  }


  payroll() {
    this.router.navigateByUrl('/payroll');
  }

  attendance() {
    debugger;
    this.router.navigateByUrl('/attendance')
  }
}
