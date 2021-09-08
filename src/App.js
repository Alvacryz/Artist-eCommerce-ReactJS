import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import NavBar from './components/Navigation Bar/NavBar.jsx'
import ContainerItem from './components/ItemListContainer'
import ContainerDetail from './components/ItemDetailContainer.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path ='/'>
          <ContainerItem/>
        </Route>
        <Route exact path ='/category/:categoryid'>
          <ContainerItem/>
        </Route>
        <Route exact path = '/details/:id'>
          <ContainerDetail/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
