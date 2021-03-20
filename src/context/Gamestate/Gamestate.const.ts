import { initializeBoard } from './Gamestate.utils';
import type { Gamestate } from './Gamestate.context';

export const DEFAULT_GAME_STATE: Gamestate = {
  updateTurn: (
    x: number,
    y: number
  ) => () => {},
  board: initializeBoard(),
  turn: 'x',
};
