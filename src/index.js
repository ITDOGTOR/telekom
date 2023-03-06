import './index.css';

import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Loader from 'shared/ui/loader';

import reportWebVitals from './reportWebVitals';

const App = lazy(() => import('app/index'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>,
);

reportWebVitals(console.log);
