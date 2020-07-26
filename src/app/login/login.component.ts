import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string = "";
  password: string = "";
  employee: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Adminlogin() {
    if (true) //this.userName === "emp01" && this.password === "welcome@123"
    {
      debugger;
      this.router.navigateByUrl('/dashboard');
      this.employee = true;
    }
  }
}
