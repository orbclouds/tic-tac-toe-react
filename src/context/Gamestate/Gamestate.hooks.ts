import {
  useMemo,
  useState,
  useEffect,
  useCallback,
} from 'react';

import type { Gamestate } from './Gamestate.context';
import {
  initializeBoard,
  shouldResetBoard,
  determinePlayerTurn,
} from './Gamestate.utils';

type Hooks = Gamestate;

const useHooks = (): Hooks => {
  const [board, setBoard] = useState(
    initializeBoard()
  );

  const turn = useMemo(
    () => determinePlayerTurn(board),
    [board]
  );

  const updateTurn = useCallback(
    (x: number, y: number) => {
      setBoard((prev) =>
        prev.map((row, i) =>
          row.map((player, j) => {
            if (x === j && y === i)
              return turn;
            return player;
          })
        )
      );
    },
    [turn]
  );

  // reset the board if game is done
  useEffect(() => {
    if (shouldResetBoard(board)) {
      alert('Game over!');
      setBoard(initializeBoard());
    }
  }, [
    board,
    initializeBoard,
    shouldResetBoard,
  ]);

  return {
    turn,
    board,
    updateTurn,
  };
};

export default useHooks;
