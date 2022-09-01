import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking-table',
  templateUrl: './ranking-table.component.html',
  styleUrls: ['./ranking-table.component.scss'],
})
export class RankingTableComponent implements OnInit {
  displayedColumns = ['nombre', 'puntos'];
  jugadores: any[] = [
    { nombre: 'Juan', puntos: 35 },
    { nombre: 'Jose', puntos: 14 },
    { nombre: 'Franco', puntos: 28 },
    { nombre: 'Dario', puntos: 8 },
    { nombre: 'Juan', puntos: 35 },
    { nombre: 'Jose', puntos: 14 },
    { nombre: 'Franco', puntos: 28 },
    { nombre: 'Dario', puntos: 8 },
    { nombre: 'Juan', puntos: 35 },
    { nombre: 'Jose', puntos: 14 },
    { nombre: 'Franco', puntos: 28 },
    { nombre: 'Dario', puntos: 8 },
    { nombre: 'Juan', puntos: 35 },
    { nombre: 'Jose', puntos: 14 },
    { nombre: 'Franco', puntos: 28 },
    { nombre: 'Dario', puntos: 8 },
    { nombre: 'Juan', puntos: 35 },
    { nombre: 'Jose', puntos: 14 },
    { nombre: 'Franco', puntos: 28 },
    { nombre: 'Dario', puntos: 8 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
