import React, { Component, version } from 'react';
import Version from './components/version';
import Api from './components/newsdata';
import Form from './components/form';
import Nav from './components/navigation';
import About from './components/about';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component{
  render(){
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/version" exact component={Version} />
        </Switch>
        <Form />
        <Api />
      </div>
    </Router>
  );
  }
}

export default App;
