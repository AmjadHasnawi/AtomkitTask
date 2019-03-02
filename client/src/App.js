import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import createCourse from './components/createCourse';


class App extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/createCourse' exact component={createCourse} />
            </Switch>
          </div>
        </BrowserRouter>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
