import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //오직 하나의 컴포넌트만 렌더링함

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);