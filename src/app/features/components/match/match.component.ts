import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BetService } from 'src/app/core/services/bet.service';
import { MatchService } from 'src/app/core/services/match.service';
import { Bet } from 'src/app/models/bet';
import { Match } from 'src/app/models/match';
import { BetModalComponent } from '../bet-modal/bet-modal.component';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  redirect() {
    this.router.navigate(['bet']);
  }

  matches: Match[] = [];

  constructor(
    private router: Router,
    private matchService: MatchService,
    private dialog: MatDialog,
  ) {}

  betDialog(match: Match) {
    this.dialog.open(BetModalComponent, {
      data: match,
    });
  }

  getData() {
    this.matchService.getAllMatches().subscribe({
      next: (res) => (this.matches = res),
    });
  }

  ngOnInit(): void {
    this.getData();
  }
}
