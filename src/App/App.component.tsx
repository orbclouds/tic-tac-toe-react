import React from 'react';
import type { FC } from 'react';

import Orb from '@app/Orb';
import { useGamestate } from '@app/context/Gamestate';

import Board from './Board';

import styles from './App.module.css';

const App: FC = () => {
  const { turn } = useGamestate();

  return (
    <>
      <Orb />
      <main
        className={styles.Container}
      >
        <h1 className={styles.Heading}>
          &lsquo;{turn}&rsquo; to move!
        </h1>
        <Board />
      </main>
    </>
  );
};

export default App;
