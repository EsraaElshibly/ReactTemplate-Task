import React, { Component } from 'react';
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom' ;
import Nav from './sharedCom/Navbar/Nav';
import Footer from './sharedCom/Footer/footer';
import Header from './sharedCom/Header/header';
import Home from './Components/Home';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Nav />
          <Route exact path = "/" component = {Home} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
