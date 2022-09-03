import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { BetService } from 'src/app/core/services/bet.service';

@Component({
  selector: 'app-bet-modal',
  templateUrl: './bet-modal.component.html',
  styleUrls: ['./bet-modal.component.scss'],
})
export class BetModalComponent implements OnInit, AfterViewInit {
  bet!: FormGroup;
  match!: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private betService: BetService,
    private alertsService: AlertsService
  ) {}

  ngOnInit(): void {
    if (this.data.winner) {
      this.match = this.data.match;
    } else {
      this.match = this.data;
    }

    this.bet = this.fb.group({
      match: this.match,
      winner: ['', Validators.required],
      email: '',
    });
  }

  ngAfterViewInit(): void {
    this.bet.get('email')?.setValue(localStorage.getItem('email'));
  }

  postBet() {
    if (this.data.winner) {
      this.betService.putBet(this.data.id, this.bet.value).subscribe({
        next: (res) => {
          this.alertsService.confirmAlert(
            'Apuesta modificada con exito!',
            'Puedes volver a modificar tu apuesta si lo necesitas'
          );
        },
      });
    } else {
      this.betService.postBet(this.bet.value).subscribe({
        next: (res) => {
          this.alertsService.confirmAlert(
            'Apuesta creada con exito!',
            'Puedes modificar tu apuesta si lo necesitas'
          );
        },
      });
    }
  }
}
