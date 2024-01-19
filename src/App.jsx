import * as React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.scss';
const Auth = React.lazy(() => import('./features/Auth/Auth'));
const CryptoCurrency = React.lazy(() => import('./features/CryptoCurrency/CryptoCurrency'));
function App() {

  return (
    <Routes>
    <Route index element={<Auth />} />
    <Route
            path="cryptoCurrency"
            element={
              <React.Suspense fallback={<>...</>}>
               <CryptoCurrency/>
              </React.Suspense>
            }
          />
  </Routes>
  )
}

export default App
