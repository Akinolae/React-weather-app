import React, { Component } from 'react';
import Api from './components/newsdata';
import Form from './components/form';
import Nav from './components/navigation';

class App extends Component{
  render(){
  return (
    <div>
      <Nav />
      <Form />
      <Api />
    </div>
  );
  }
}

export default App;
