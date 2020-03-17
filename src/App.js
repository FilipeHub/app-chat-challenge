import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';

import GlobalStyle from "./styles/global";
import GlobalLayout from './pages/_layouts/global';

function App() {
  return (
      <GlobalLayout>
        <Router history={history}>
            <Routes />
            <GlobalStyle />
        </Router>
      </GlobalLayout>
  );
}

export default App;
