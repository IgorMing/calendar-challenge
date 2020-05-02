import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import App from './App';
import * as serviceWorker from './serviceWorker';

Modal.setAppElement('#root');
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
