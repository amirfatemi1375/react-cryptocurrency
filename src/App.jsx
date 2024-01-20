import * as React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import  { GuardedRoute } from "./guard/GuardedRoute";
const Auth = React.lazy(() => import('./features/Auth/Auth'));
const CryptoCurrency = React.lazy(() => import('./features/CryptoCurrency/CryptoCurrency'));
function App() {

  return (
    <Routes>
    <Route  index element={<Auth />} 
    
    />
    <Route  path="auth" element={<Auth />} 
    
    />
     <Route element={<GuardedRoute />}>
         
     <Route 
     path="/CryptoCurrency"
     element={
      <React.Suspense fallback={<>...</>}>
       <CryptoCurrency/>
      </React.Suspense>
    }
          />
     </Route>
  
  </Routes>
  )
}

export default App
