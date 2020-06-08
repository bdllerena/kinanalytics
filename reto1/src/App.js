import React, { Component } from 'react';
import Header from './layouts/Header';
import StickyFooter from './layouts/Footer';
import Slider from './components/Slider';
import ClientCarousel from './components/ClientCarousel';
import News from './components/News';
import Contact from './components/Contact';
import Alert from 'react-bootstrap/Alert'
import './styles/_Contact.scss';
import './App.css';


class App extends Component {
  render() {
    return (
      <div id="body">
        <Header/>
        <Slider/>
        <AlertM/>
        <ClientCarousel/>
        <News/>
        <Contact/>
        <StickyFooter/>
      </div>
    );
  }
}
function AlertM()
{
  return(
    <Alert variant="dark">
      <Alert.Heading>Our Clients</Alert.Heading>
    </Alert>
  );
}
export default App;
