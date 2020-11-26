import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import View from './pages/View'
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';
import Time from './pages/Time';
import Test from './pages/Test';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/view/:id' component={View} />
        <Route path='/admin' component={Admin} />
        <Route path='/time' component={Time} />
        <Route path='/test' component={Test} />
        <Route component={NotFound} />

      </Switch>
    </Router>
  );
}

export default App;
