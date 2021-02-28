import 'overlayscrollbars/css/OverlayScrollbars.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import OverlayScrollbars from 'overlayscrollbars';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

OverlayScrollbars(document.body, {
  nativeScrollbarsOverlaid: {
      initialize: false
  }
});
