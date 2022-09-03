import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap} from 'rxjs';
import { Bet } from 'src/app/models/bet';

@Injectable({
  providedIn: 'root',
})
export class BetService {

  private _refresh$ = new Subject<any>();

	get refresh$() {
		return this._refresh$;
	}

  constructor(private http: HttpClient) {}

  getBets(): Observable<Bet[]> {
    return this.http.get<Bet[]>('http://localhost:3000/bets');
  }

  postBet(bet: any): Observable<any> {
    return this.http.post('http://localhost:3000/bets', bet);
  }

  putBet(id: number, bet: any): Observable<any> {
    return this.http.put('http://localhost:3000/bets/' + id, bet)
    .pipe(
      tap(() => {
        this._refresh$.next(null);
      })
    );
  }
}
