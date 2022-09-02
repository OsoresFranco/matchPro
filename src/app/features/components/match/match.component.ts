import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/core/services/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  redirect() {
    this.router.navigate(['bet']);
  }

  matches: any[] = [];

  constructor(private router: Router, private matchService: MatchService) {}

  ngOnInit(): void {
    this.matchService.getAllMatches().subscribe({
      next: (res) => (this.matches = res),
    });
  }
}
