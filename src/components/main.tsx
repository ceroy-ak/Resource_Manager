import React from "react";
import Title from "./commons/title.component";
import LeftMenu from "./commons/leftNavigation.component";
import RightColumn from "./clients/client.rightColumn.component";
import { ClientProvider } from "./services/client.contextProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ClientDisplay from "./clients/client.display.component";
import FormClient from './clients/client.form.component'
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
          <LeftMenu />

          <BrowserRouter>
            <Route path="/clients" component={RightColumn} />
            <Switch>
              <Route path="/clients/:id/edit" exact component={FormClient} />
              <Route path="/clients/add" exact component={FormClient} />
              <Route path="/clients/:id" component={ClientDisplay} />
            </Switch>
          </BrowserRouter>
        </div>
      </ClientProvider>
    </div>
  );
}

export default App;
