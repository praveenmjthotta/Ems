import { Injectable } from '@angular/core';
import{employee} from 'src/app/Models/employee'
import{HttpClient,HttpClientModule}from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private _http:HttpClient) { }

  allEmployee:employee[]=[
    // {
    //   isSelected:false,
    //   empid : "01",
    //   name : "Praveen",
    //   designation : "Software Engineer",
    //   totalexperience :"3" ,
    // },
    // {
    //   isSelected:false,
    //   empid : "02",
    //   name : "kumara",
    //   designation : "Senoir Software Engineer",
    //   totalexperience :"3" ,
    // },
    // {
    //   isSelected:false,
    //   empid : "03",
    //   name : "Murugesan",
    //   designation : "Manager",
    //   totalexperience :"3" ,
    // },
    
  ]


  getAllEmployess(){
  //  let result= this._http.get('https://employeebackend.azurewebsites.net/api/employees').
  //  subscribe((x:any)=>{
  //    debugger;
  //   this.allEmployee=x;
  //   console.log(x);
  //   console.log("first");
  //  console.log(this.allEmployee);
   
  //  });
  //  debugger;
  //  console.log("second");
  //  console.log(this.allEmployee);
  //  return this.allEmployee ;

  return this._http.get('https://employeebackend.azurewebsites.net/api/employees');
  
     
  }


  deleteEmployees(item:employee){

   this.allEmployee = this.allEmployee.filter(x=>x.empid != item.empid);
   return this.allEmployee;
  }
}
