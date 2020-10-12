import React from 'react';

import GlobalStyle from './styles/global';

import { Landing } from './pages/index';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Landing/>
    </div>
  );
}

export default App;
