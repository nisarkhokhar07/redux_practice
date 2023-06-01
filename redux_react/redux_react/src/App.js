import React from 'react';
import './App.css';
import {CakeView} from './features/cake/cakeView';
import { IcecreamView } from './features/icecream/icecreamView';

function App() {
  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
    </div>
  );
}

export default App;
