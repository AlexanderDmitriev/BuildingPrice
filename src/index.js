import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './utils/i18next';
import { store /* persistor */ } from './redux/store';
import { Provider } from 'react-redux';
/* import { PersistGate } from 'redux-persist/integration/react'; */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename="/BuildingPrice">
        <Provider store={store}>
          {/* <PersistGate loading={null} persistor={persistor}> */}
          <App />
          {/* </PersistGate> */}
        </Provider>
      </BrowserRouter>
  </React.StrictMode>
);
