import React from 'react';
import type { FC } from 'react';

import { useGamestate } from '@app/context/Gamestate';
import type { Gamestate } from '@app/context/Gamestate';

import useHooks from './Square.hooks';
import styles from './Square.module.css';
import { getBorder } from './Square.utils';

interface Props {
  x: number;
  y: number;
  player: Gamestate['turn'];
}

const Square: FC<Props> = ({
  x,
  y,
  player,
}) => {
  const {
    turn,
    updateTurn,
  } = useGamestate();
  const { makeMove } = useHooks(
    x,
    y,
    turn,
    updateTurn
  );

  return (
    <button
      onClick={makeMove}
      style={getBorder(x, y)}
      disabled={player !== ''}
      className={styles.Square}
    >
      <div
        className={`${styles.Inner} ${
          styles[player.toUpperCase()]
        }`}
      />
    </button>
  );
};

export default Square;
