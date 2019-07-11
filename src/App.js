import React from 'react';
import { Switch, Route } from 'react-router-dom';

//pages
import Home from './pages/Home/home.component';

//components
import Header from './components/Header/header.component';

export const App = () => {
  return (
    <div>
      <Header />
      <Switch>
          <Route exact path='/' component={Home} />
      </Switch>
    </div>
   
  );
}

export default App;