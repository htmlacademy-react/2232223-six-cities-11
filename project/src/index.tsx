import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  CitiesNumber: 6,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App CitiesNumber={Setting.CitiesNumber}/>
  </React.StrictMode>,
);
