import React from 'react';
import type { FC } from 'react';

import { useGamestate } from '@app/context/Gamestate';

import Square from './Square';

import styles from './Board.module.css';

const Board: FC = () => {
  const { board } = useGamestate();

  return (
    <article
      className={styles.Container}
    >
      <table className={styles.Board}>
        <tbody>
          {board.map((row, i) => {
            return (
              <tr
                key={i}
                className={
                  styles.BoardRow
                }
              >
                {row.map(
                  (player, j) => {
                    return (
                      <td
                        key={j}
                        className={
                          styles.BoardSquare
                        }
                      >
                        <Square
                          x={j}
                          y={i}
                          player={
                            player
                          }
                        />
                      </td>
                    );
                  }
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </article>
  );
};

export default Board;
