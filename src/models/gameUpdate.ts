import {Round} from './round';
import {Card} from './card';

export interface GameUpdate {
  round: Round;
  actionPoints: {[username: string]: number};
  playerTurn: string;
  handCards: Card[];
  opponentHandCards: number[];
  boardCards: {[username: string]: Card[]};
  healthPoints: {[username: string]: number};
  forPlayer: string;
}
