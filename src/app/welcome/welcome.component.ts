import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  //This was used to login as modall!.. not useful
  /*
  auth() {
    const dialConfig = new MatDialogConfig();
    dialConfig.disableClose = false;
    dialConfig.autoFocus = true;
    dialConfig.width = '80%';
    dialConfig.height = '70%';
    this.dialog.open(AuthentificationComponent, dialConfig).afterClosed().subscribe((data) => {
    });
  }
  */

}
