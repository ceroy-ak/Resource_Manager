import React from 'react';
import Title from "./Title";
import LeftColumn from "./LeftColumn"
import RightColumn from './RightColumn'
import ClientProvider from './Contexts/ClientProvider'

function App() {
  return (
    <div className="App">
      <ClientProvider>
        <Title />
        <LeftColumn />
        <RightColumn />
      </ClientProvider>

    </div>
  );
}

export default App;
