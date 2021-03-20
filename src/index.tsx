import React, {
  StrictMode,
} from 'react';
import { render } from 'react-dom';
import ReactGA from 'react-ga';

import '@app/global.css';
import App from '@app/App';
import Gamestate from '@app/context/Gamestate';

const target = document.getElementById(
  'app'
);

render(
  <StrictMode>
    <Gamestate>
      <App />
    </Gamestate>
  </StrictMode>,
  target
);

ReactGA.initialize(
  import.meta.env
    .SNOWPACK_PUBLIC_GOOGLE_ANALYTICS_ID
);
ReactGA.pageview(
  window.location.pathname +
    window.location.search
);
