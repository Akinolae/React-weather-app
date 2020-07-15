import React, { Component } from 'react';
import Version from './components/version';
import NewsUi from './components/News/NewsUi';
import Nav from './components/navigation';
import About from './components/about';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FormUI from './components/Form/FormUI';

class App extends Component{
  render(){
  return (
    <Router>
      <React.Fragment>
        <Nav />
        <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/version" exact component={Version} />
        </Switch>
        <FormUI />
        <NewsUi />
      </React.Fragment>
    </Router>
  );
  }
}

export default App;
