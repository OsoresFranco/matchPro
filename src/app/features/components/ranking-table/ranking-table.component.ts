import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-ranking-table',
  templateUrl: './ranking-table.component.html',
  styleUrls: ['./ranking-table.component.scss'],
})
export class RankingTableComponent implements OnInit {
  displayedColumns = ['nombre', 'puntos'];
  jugadores!:any

  constructor(private userService:UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (res)=>{
        this.jugadores = res
      }
    })
  }
}
