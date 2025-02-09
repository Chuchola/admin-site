import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import routeConfiguration from './routing/routeConfiguration';
import store from './store';

import Routes from './routing/Routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PrimeReactProvider>
        <Routes routes={routeConfiguration()} />
      </PrimeReactProvider>
    </BrowserRouter>
  </Provider>
);
