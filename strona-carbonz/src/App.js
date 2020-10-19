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
import Gallery1 from './components/Gallery1';
import Gallery2 from './components/Gallery2';
import Gallery3 from './components/Gallery3';
import Gallery4 from './components/Gallery4';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Partners from './components/Partners';
import News from './components/News';
import Subsidies from './components/Subsidies.js';
import Backdrop from './components/Backdrop';
import CookieBackdrop from './components/CookieBackdrop';


class App extends React.Component {
  state = {
    sideMenu: false,
    cookieBackdrop: false
  }

  sideMenuClickHandler = () => {
    this.setState(prevState => {
      return { sideMenu: !prevState.sideMenu }
    })
  }

  backdropClickHandler = () => {
    this.setState({
      sideMenu: false
    })
  }

  cookieBackdropClickHandler = () => {
    this.setState({
      cookieBackdrop: false
    })
  }

  render() {

    let backdrop;
    if (this.state.sideMenu) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    let cookieBackdrop;
    if (this.state.sideMenu) {
      cookieBackdrop = <CookieBackdrop click={this.cookieBackdropClickHandler}/>
    }

    return (
      <>
        {backdrop}
        {cookieBackdrop}
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/onas' component={About} />
            <Route path='/galeria' component={Gallery} />
            <Route path='/powietrznepompy' component={Gallery1} />
            <Route path='/gruntowepompy' component={Gallery2} />
            <Route path='/rekuperacja' component={Gallery3} />
            <Route path='/ogrzewaniepodlogowe' component={Gallery4} />
            <Route path='/oferta' component={Offer} />
            <Route path='/kontakt' component={Contact} />
            <Route path='/zapytanie' component={AskForm} />
            <Route path='/serwis' component={ServiceForm} />
            <Route path='/aktualnosci' component={News} />
            <Route path='/dotacje' component={Subsidies} />
          </Switch>
          <Partners />
          <Info />
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
