import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BaseProvider } from "./providers/Base.provider";
import {NavProvider} from "./providers/Navigation.provider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BaseProvider>
          <NavProvider>
              <App />
          </NavProvider>
      </BaseProvider>
  </React.StrictMode>
);