import React from 'react';
import './style.scss';
import AOS from "aos";
import "aos/dist/aos.css";
<<<<<<< HEAD
import PartOne from './components/Part1-components/PartOne';
import MenuSlider from './components/Menu-slider/MenuSlider';
import About from './components/About/about';
import AppSection from './components/App-section/AppSection';
import EmailSection from './components/Eamil-section/EmailSection';
import Logo from './components/Logo/Logo';
import Footer from './components/Footer/Footer';
=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './HomePage/Home';
import MenuPage from './InternalPages/menu/Menu';
import Login from './InternalPages/login/Login';
import ContactUs from './InternalPages/contact-us/ContactUs';
import AboutUs from './InternalPages/about-us/AboutUs';
import Register from './InternalPages/login/register/Register';
import ForgetPassword from './InternalPages/login/forget-password/ForgetPassword';
>>>>>>> 44d054d... added internal pages

export default function App() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
<<<<<<< HEAD
  })
  return (
    <>
      <PartOne />
      <MenuSlider />
      <About />
      <AppSection />
      <EmailSection />
      <Logo />
      <Footer />
=======
  }, []);

  return (
    <>
      <Router >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/login" component={Login} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/register" component={Register} />
          <Route path="/forget-password" component={ForgetPassword} />
        </Switch>
      </Router>
>>>>>>> 44d054d... added internal pages
    </>
  );
}