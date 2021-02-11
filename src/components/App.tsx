import React from "react";
import Title from "./Title";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import { ClientProvider } from "./Contexts/ClientProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ClientDisplay from "./ClientDisplay";
import AddClient from "./AddClient";
import UpdateClient from "./UpdateClient";
import "../scss/App.scss";
import { initializeIcons } from "@uifabric/icons";
import "@fluentui/react/dist/css/fabric.min.css";

initializeIcons();

function App() {
  return (
    <div className="App ms-Grid">
      <ClientProvider>
        <Title />

        <div className="ms-Grid-row" dir="ltr">
          <LeftColumn />

          <BrowserRouter>
            <Route path="/clients" component={RightColumn} />
            <Switch>
              <Route path="/clients/:id/edit" exact component={UpdateClient} />
              <Route path="/clients/add" exact component={AddClient} />
              <Route path="/clients/:id" component={ClientDisplay} />
            </Switch>
          </BrowserRouter>
        </div>
      </ClientProvider>
    </div>
  );
}

export default App;
