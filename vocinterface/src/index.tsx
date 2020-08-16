import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';


// @ts-ignore
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
            <App/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
