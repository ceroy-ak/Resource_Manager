import React from 'react';
import Title from "./Title";
import LeftColumn from "./LeftColumn"
import RightColumn from './RightColumn'
import {ClientProvider} from './Contexts/ClientProvider'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ClientDisplay from './ClientDisplay'
import AddClient from './AddClient'
import UpdateClient from './UpdateClient'

function App() {
  return (
    <div className="App">
      <ClientProvider>
        <Title />
        <LeftColumn />

        <BrowserRouter>
        <Route path="/clients" component={RightColumn} />
        <Route path="/clients/add" exact component={AddClient} />
        <Route path="/clients/:id" component={ClientDisplay} />
        </BrowserRouter>
        
      </ClientProvider>

    </div>
  );
}

export default App;
