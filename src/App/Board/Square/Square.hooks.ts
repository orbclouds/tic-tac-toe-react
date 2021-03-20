import { useCallback } from 'react';
import type { MouseEventHandler } from 'react';

import type { Gamestate } from '@app/context/Gamestate';

interface Hooks {
  makeMove: MouseEventHandler;
}

const useHooks = (
  x: number,
  y: number,
  turn: Gamestate['turn'],
  updateTurn: Gamestate['updateTurn']
): Hooks => {
  const makeMove = useCallback(
    (e) => {
      updateTurn(x, y);
    },
    [turn, updateTurn]
  );

  return {
    makeMove,
  };
};

export default useHooks;
