import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './containers/App';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import store from './store/index.js'
import GlobalStyle from './core/style'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <GlobalStyle/>
        <App />
      </Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
