export interface Round {
  turn: number;
  phase: 'start' | 'cast' | 'attack' | 'end';
}
