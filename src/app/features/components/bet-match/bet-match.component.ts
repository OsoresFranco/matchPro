import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BetService } from 'src/app/core/services/bet.service';
import { Bet } from 'src/app/models/bet';
import { BetModalComponent } from '../bet-modal/bet-modal.component';

@Component({
  selector: 'app-bet-match',
  templateUrl: './bet-match.component.html',
  styleUrls: ['./bet-match.component.scss'],
})
export class BetMatchComponent implements OnInit {
  allBets: Array<Bet> = [];
  myBets: Array<Bet> = [];

  constructor(private matDialog: MatDialog, private betService: BetService) {}

  updateBet(bet: Bet) {
    this.matDialog.open(BetModalComponent, {
      data: bet,
    });
  }

  ngOnInit(): void {
    this.betService.getBets().subscribe({
      next: (res) => {
        this.allBets = res;
      },
      complete: () => {
        this.allBets.map((item) => {
          if (item.email === localStorage.getItem('email')) {
            this.myBets.push(item);
          }
        });
      },
    });
  }
}
