import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import '../node_modules/boxicons/css/boxicons.min.css'

import Layout from './components/Layout'
import './sass/index.scss';
;

ReactDOM.render(
  <React.StrictMode>
    <Layout/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
