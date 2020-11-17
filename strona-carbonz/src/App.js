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
import Send from './components/Send';
import Footer from './components/Footer';
import Partners from './components/Partners';
import News from './components/News';
import Subsidies from './components/Subsidies.js';
import Backdrop from './components/Backdrop';
import SideMenu from './components/SideMenu';
import Cookies from './components/Cookies';
//import CookieBackdrop from './components/CookieBackdrop';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sideMenu: false,
      cookie: true,
      dataChecked: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
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

  cookieClickHandler = () => {
    this.setState({
      cookie: false
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      dataChecked: value
    });
  }

  // cookieBackdropClickHandler = () => {
  //   this.setState({
  //     cookieBackdrop: false
  //   })
  // }

  render() {

    let backdrop;
    if (this.state.sideMenu) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    let cookie;
    if (this.state.cookie) {
      cookie = <Cookies click={this.cookieClickHandler}/>
    }

    // let cookieBackdrop;
    // if (this.state.sideMenu) {
    //   cookieBackdrop = <CookieBackdrop click={this.cookieBackdropClickHandler}/>
    // }

    return (
      <>
        {backdrop}
        {cookie}
        {/* {cookieBackdrop} */}
        <BrowserRouter>
          <Navbar menuHandler={this.sideMenuClickHandler} />
          <SideMenu show={this.state.sideMenu} click={this.backdropClickHandler}/>
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
            <Route path='/zapytanie' render={(props) => <AskForm {...props} handle={this.handleInputChange} checked={this.state.dataChecked}/>}></Route>
            <Route path='/serwis' component={ServiceForm} />
            <Route path='/send'component={Send} />
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
