import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { CartContextProvider } from './context/CartContext.jsx';

import NavBar from './components/Navigation Bar/NavBar.jsx'
import ContainerItem from './components/ItemListContainer'
import ContainerDetail from './components/ItemDetailContainer.jsx';
import Cart from './components/Cart.jsx'

function App() {
  return (
    <CartContextProvider>
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
          <Route exact path = '/cart'>
            <Cart/>
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
