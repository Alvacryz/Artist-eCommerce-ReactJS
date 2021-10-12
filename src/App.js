import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { CartContextProvider } from './context/CartContext.jsx';

import Header from './components/Header/Header.jsx'
import NavBar from './components/Navigation Bar/NavBar.jsx'
import ContainerDetail from './components/ItemDetailContainer.jsx';
import Cart from './components/Cart.jsx'
import Home from './pages/Home.jsx';
import Commission from './pages/Commission.jsx';
import Footer from './components/Footer/Footer.jsx'
import Policy from './pages/Policy.jsx';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path = '/'>
            <Home/>
          </Route>
          <Route exact path = '/commission'>
            <Commission/>
          </Route>
          <Route exact path = '/commission/category/:categoryid'>
            <Commission/>
          </Route>
          <Route exact path = '/details/:id'>
            <ContainerDetail/>
          </Route>
          <Route exact path = '/policy'>
            <Policy/>
          </Route>
          <Route exact path = '/cart'>
            <Cart/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  )
} export default App;