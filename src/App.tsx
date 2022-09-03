import React from 'react';
import './App.css';
import First from './page/First';
import {AlertContextProvider} from './context/Provider';

function App() {
  return (
    <div className="App mt-5">
      <AlertContextProvider>
        <h1 >App context react</h1>
        <First />
        
      </AlertContextProvider>
    </div>
  );
}

export default App;
