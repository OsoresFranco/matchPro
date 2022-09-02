import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  redirect() {
    this.router.navigate(['bet']);
  }

  matches = [
    {
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
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
