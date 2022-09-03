import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
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
  subscription!: Subscription;

  constructor(private matDialog: MatDialog, private betService: BetService) {}

  updateBet(bet: Bet) {
    this.matDialog.open(BetModalComponent, {
      data: bet,
    });
  }

  getData() {
    this.betService.getBets().subscribe({
      next: (res) => {
        this.allBets = res;
      },
      complete: () => {
        this.myBets = this.allBets.filter((item) => {
          return item.email === localStorage.getItem('email');
        })
      },
    });
  }


  ngOnInit(): void {
    this.getData();
    this.subscription = this.betService.refresh$.subscribe(() => {
      this.getData();
    });
  }
}
