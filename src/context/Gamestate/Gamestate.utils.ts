import type {
  Turn,
  Board,
} from './Gamestate.context';

export const initializeBoard = () => {
  return new Array(3)
    .fill(null)
    .map(() => new Array(3).fill(''));
};

export const determinePlayerTurn = (
  board: Board
): Turn => {
  let x = 0;
  let o = 0;

  for (
    let i = 0;
    i < board.length;
    i++
  ) {
    const row = board[i];
    for (
      let j = 0;
      j < row.length;
      j++
    ) {
      if (row[j] === 'x') {
        x++;
      } else if (row[j] === 'o') {
        o++;
      }
    }
  }

  if (x === o) {
    return 'x' as const;
  } else {
    return 'o' as const;
  }
};

type WinConditionChecker = (
  board: Board
) => boolean;

const checker = (base: Turn) => (
  player: Turn
): boolean =>
  player !== '' && player === base;

const wonByRow = (
  board: Board
): boolean =>
  board.some((row) => {
    const check = checker(row[0]);

    return row.every((player) =>
      check(player)
    );
  });

const wonByCol = (
  board: Board
): boolean => {
  for (
    let i = 0;
    i < board[0].length;
    i++
  ) {
    const check = checker(board[0][i]);

    for (
      let j = 1;
      j < board.length;
      j++
    ) {
      if (!check(board[j][i])) break;
      if (j === board.length - 1)
        return true;
    }
  }

  return false;
};

const wonByDiagonal = (
  board: Board
): boolean => {
  // reference middle
  const checkDiagonal = checker(
    board[1][1]
  );

  // check both diagonals
  return (
    (checkDiagonal(board[0][0]) &&
      checkDiagonal(board[2][2])) ||
    (checkDiagonal(board[2][0]) &&
      checkDiagonal(board[0][2]))
  );
};

export const WIN_CONDITIONS = [
  wonByRow,
  wonByCol,
  wonByDiagonal,
];

export const shouldResetBoard = (
  board: Board
): boolean => {
  for (
    let i = 0;
    i < WIN_CONDITIONS.length;
    i++
  ) {
    if (WIN_CONDITIONS[i](board))
      return true;
  }

  return board.every((row) =>
    row.every((player) => player !== '')
  );
};
