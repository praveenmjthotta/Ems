import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'employeeManagement'; loadingRouteConfig: boolean;
  constructor(private router: Router, private _MatDialog: MatDialog) {

  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        this.loadingRouteConfig = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loadingRouteConfig = false;
      }
    });
    this.router.navigateByUrl('/login');
  }

  logout() {
    this.router.navigateByUrl('/login');
  }

  helpdesk() {

    debugger;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = "150px";
    dialogConfig.width = "500px";



    let dialogRef = this._MatDialog.open(HelpdeskComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
    });

  }



}
