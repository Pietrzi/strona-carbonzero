import React from 'react';
import './scss/style.scss';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Info from './components/Info';
import AskForm from './components/AskForm';
import ServiceForm from './components/ServiceForm';
import Offer from './components/Offer';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends React.Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/onas' component={About} />
            <Route path='/galeria' component={Gallery} />
            <Route path='/oferta' component={Offer} />
            <Route path='/kontakt' component={Contact} />
            <Route path='/zapytanie' component={AskForm} />
            <Route path='/serwis' component={ServiceForm} />
          </Switch>
          <Info />
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
