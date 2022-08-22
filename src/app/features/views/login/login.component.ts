import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginDialogComponent } from '../../components/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from '../../components/register-dialog/register-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  openLogin() {
    this.matDialog.open(LoginDialogComponent);
  }

  openRegister() {
    this.matDialog.open(RegisterDialogComponent);
  }

  constructor(public matDialog: MatDialog) {}

  ngOnInit(): void {}
}
