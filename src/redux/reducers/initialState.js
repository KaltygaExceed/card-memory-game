let hs = localStorage.getItem('highscore') ? localStorage.getItem('highscore') : 0;

export const initialState = {
  name: null,
  count: 0,
  highscore: hs,
};