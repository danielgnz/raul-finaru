import React from 'react';
import { Switch, Route } from 'react-router-dom';

//pages
import HomePage from './pages/HomePage/homepage.component';
import HirePage from './pages/HirePage/hirepage.component';
import HTCPage from './pages/HTCPage/htc-page.component';

//components
import Header from './components/Header/header.component';

export const App = () => {
  return (
    <div>
      <Header />
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hire' component={HirePage} />
          <Route path='/what-is-a-high-ticket-closer' component={HTCPage} />
      </Switch>
    </div>
   
  );
}

export default App;