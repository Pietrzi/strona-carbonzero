import React from 'react';
import './scss/style.scss';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

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
import SideMenu from './components/SideMenu';
import Cookies from './components/Cookies';
import Rodo from './components/Rodo';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sideMenu: false,
      cookie: true,
      dataChecked: false,
      rodo: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  sideMenuClickHandler = () => {
    this.setState(prevState => {
      return { sideMenu: !prevState.sideMenu }
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

  rodOnClickHandler = () => {
    this.setState({
      rodo: true
    })
  }

  rodOffClickHandler = () => {
    this.setState({
      rodo: false
    })
  }

  render() {

    let cookie;
    if (this.state.cookie) {
      cookie = <Cookies click={this.cookieClickHandler}/>
    }

    let rodo;
    if (this.state.rodo) {
      rodo = <Rodo click={this.rodOffClickHandler}/>
    }

    return (
      <>
        {cookie}
        {rodo}
        {/* {cookieBackdrop} */}
        <BrowserRouter>
          <Navbar menuHandler={this.sideMenuClickHandler} />
          <SideMenu show={this.state.sideMenu} click={this.sideMenuClickHandler}/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/galeria' component={Gallery} />
            <Route path='/powietrznepompy' component={Gallery1} />
            <Route path='/gruntowepompy' component={Gallery2} />
            <Route path='/rekuperacja' component={Gallery3} />
            <Route path='/ogrzewaniepodlogowe' component={Gallery4} />
            <Route path='/oferta' component={Offer} />
            <Route path='/kontakt' component={Contact} />
            <Route path='/zapytanie' render={(props) => <AskForm {...props} handle={this.handleInputChange} checked={this.state.dataChecked}/>}></Route>
            <Route path='/serwis' render={(props) => <ServiceForm {...props} handle={this.handleInputChange} checked={this.state.dataChecked}/>}></Route>
            <Route path='/send'component={Send} />
          </Switch>
          <Partners />
          <Info click={this.rodOnClickHandler}/>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
