export interface Match {
  locals: {
    teamId: number,
  };
  matchDate: string,
  matchId: number,
  results: {},
  stadiums: {
    stadiumId: number,
  };
  stages: {
    stageId: number,
  };
  visitors: {
    teamId: number,
  };
}
