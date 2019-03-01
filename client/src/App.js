import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route path='/' exact component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
