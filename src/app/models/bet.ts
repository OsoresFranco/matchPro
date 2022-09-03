import { Match } from "./match";

export interface Bet {
  match: Match,
  winner: string,
  id?: number,
}
