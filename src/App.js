import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import { Switch,Route } from 'react-router-dom';
import Header from './components/header/header.component'
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInSignUpPage}/>
      </Switch>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
