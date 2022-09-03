import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BetService } from 'src/app/core/services/bet.service';
import { Match } from 'src/app/models/match';

@Component({
  selector: 'app-bet-modal',
  templateUrl: './bet-modal.component.html',
  styleUrls: ['./bet-modal.component.scss'],
})
export class BetModalComponent implements OnInit {
  bet!:FormGroup;
  match!: Match;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Match, private fb:FormBuilder, private betService:BetService) {}

  ngOnInit(): void {
    this.match = this.data;

    this.bet = this.fb.group({
      match: this.match,
      winner: ['', Validators.required]
    })
  }

  postBet(){
    this.betService.postBet(this.bet.value).subscribe({
      next: (res)=>{
        console.log(res)
      },
      error: (error) =>{
        console.log(error)
      }
    })
  }
}
