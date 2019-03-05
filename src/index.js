import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorkker.unregister();
