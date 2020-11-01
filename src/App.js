import React from "react";
import Routes from './routes';

// SERVICES
import { ToastContainer } from 'react-toastify';
import history from './services/history';

// REDUX
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import { store, persistor } from './store';

import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from '../src/styles/global';

function App() {

  return (
      <Provider store={store}>
        <GlobalStyles />
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Routes/>
            <ToastContainer autoClose={3000} />
          </Router>
        </PersistGate>
      </Provider>
  );
}

export default App;