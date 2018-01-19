import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { style, media } from 'typestyle';

const appStyle = style(
  { backgroundColor: 'red' },
  media({ minWidth: 500, maxWidth: 1000 }, { fontSize: '100px' })
);

ReactDOM.render(
  <div className={appStyle}>
    Hi
    <App />
  </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
