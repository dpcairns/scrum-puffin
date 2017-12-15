import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routing />, document.getElementById('root'));
registerServiceWorker();
