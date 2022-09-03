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
  bet = {
    match: {
      id: 1,
      fase: 'Fase de Grupos',
      fecha: '20/11/2022',
      hora: '16:00',
      estadio: 'Al Bayt',
      equipo1: {
        nombre: 'Argentina',
        bandera:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/255px-Flag_of_Argentina.svg.png',
      },
      equipo2: {
        nombre: 'Qatar',
        bandera:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/125px-Flag_of_Qatar.svg.png',
      },
    },
    winner: 'Qatar',
    id: 1,
  };

  constructor(private matDialog: MatDialog) {}

  updateBet(bet: Bet) {
    this.matDialog.open(BetModalComponent, {
      data: bet.match,
    });
  }

  ngOnInit(): void {}
}
