import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss'],
})
export class RegisterDialogComponent implements OnInit {
  user!: FormGroup;

  data: any;

  passRepeat:string = ''

  setPassRepeat(event:any){
    this.passRepeat = event.target.value
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public matDialog: MatDialog,
    private fb: FormBuilder,
    private userService:UserService
  ) {}

  ngOnInit(): void {
    this.user = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register() {
    if(this.passRepeat === this.user.get('password')?.value){
      this.userService.postUser(this.user.value).subscribe({
        next: (res)=>{
          console.log(res)
        }
      })
    } else {
      console.log(' No funciona lcoo')
    }
  }
}
