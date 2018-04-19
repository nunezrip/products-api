import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';

injectGlobal`
  html: {
    font-size: 62.5%;
  }

  body {
    font-family: 'Arial';
    line-height: 1.3;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
`;

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
