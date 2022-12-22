import './App.css';
import React from 'react';
import Sheet from './organisms/sheet/sheet';
import StoreProvider from './provider/provider';

const App: React.FC = () => {
  return (
    <StoreProvider>
    <div className="App">
      <Sheet />
    </div>
    </StoreProvider>
  );
};

export default App;
