import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BetService {
  constructor(private http: HttpClient) {}


  postBet(bet: any): Observable<any> {
    return this.http.post('http://localhost:3000/bets', bet);
  }

  putBet(id: number, bet: any): Observable<any> {
    return this.http.put('http://localhost:3000/bets/' + id, bet);
  }
}
