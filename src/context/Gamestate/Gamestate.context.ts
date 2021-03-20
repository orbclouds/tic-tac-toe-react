import {
  useContext,
  createContext,
} from 'react';
import type { MouseEventHandler } from 'react';

import { DEFAULT_GAME_STATE } from './Gamestate.const';

export type Turn = '' | 'x' | 'o';
export type Board = Turn[][];

export interface Gamestate {
  updateTurn: (
    x: number,
    y: number
  ) => void;
  turn: Turn;
  board: Board;
}

const Context = createContext<Gamestate>(
  DEFAULT_GAME_STATE
);

export const useGamestate = () =>
  useContext(Context);

export default Context;
