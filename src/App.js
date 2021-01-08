import React, { Component } from 'react';
import Version from './components/version';
import NewsUi from './components/News/NewsUi';
import Nav from './components/nav/navigation';
import About from './components/about';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import FormUI from './components/Form/FormUI';
import {Div} from './style'

class App extends Component{
  render(){
  return (
    <Router>
      <Div>
        <Nav />
        <Route path={"/about"} exact component={About} />
        <Route path={"/version"} exact component={Version} />
        <Route path={"/news"} exact component={NewsUi} />
        <Route path={"/"} exact component={FormUI} />
        {/* <NewsUi /> */}
      </Div>
    </Router>
  );
  }
}

export default App;
