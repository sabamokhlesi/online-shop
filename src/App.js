import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch,Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    hats
  </div>
)
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
      </Switch>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
