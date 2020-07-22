import React, { Component } from 'react';
import Version from './components/version';
import NewsUi from './components/News/NewsUi';
import Nav from './components/navigation';
import About from './components/about';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import FormUI from './components/Form/FormUI';

class App extends Component{
  render(){
  return (
    <Router>
        <Nav />
        <Route path={"/about"} exact component={About} />
        <Route path={"/version"} exact component={Version} />
        <Route path={"/news"} exact component={NewsUi} />
        <Route path={"/search"} exact component={FormUI} />
        {/* <NewsUi /> */}
    </Router>
  );
  }
}

export default App;
