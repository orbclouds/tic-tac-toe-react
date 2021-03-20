import React from 'react';
import type { FC } from 'react';

import useHooks from './Gamestate.hooks';
import Context from './Gamestate.context';
import { DEFAULT_GAME_STATE } from './Gamestate.const';

const Provider: FC = ({ children }) => {
  const gamestate = useHooks();

  return (
    <Context.Provider value={gamestate}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
