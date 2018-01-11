import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EosTextParagraphComponent from './EosTextParagraphComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <EosTextParagraphComponent />,
  document.getElementById('root')
);

registerServiceWorker();
