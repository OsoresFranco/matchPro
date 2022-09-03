import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent implements OnInit {
  user!: FormGroup;
  data: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public matDialog: MatDialog,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    let userList: any;
    this.authService.login().subscribe({
      next: (res) => {
        userList = res;
      },
      complete: () => {
        userList?.map((item: any) => {
          if (this.user.get('email')?.value === item.email) {
            this.router.navigate(['home']);
          }
        });
      },
    });
  }
}
