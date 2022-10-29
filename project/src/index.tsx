import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { CITIES_NUMBER } from './mocks';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      CitiesNumber={CITIES_NUMBER}
    />
  </React.StrictMode>,
);
