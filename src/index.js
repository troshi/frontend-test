import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';

import './index.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
