import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Contents/Home';
import Footer from './components/Footer/Footer';
import GetStarted from './components/GetStarted/GetStarted';
import ThankYou from './components/Contents/Thank_you';
import ContactUs from './components/Contents/Contact_us';
import ContactingUs from './components/Contents/Contacting_us';
import Features from './components/Contents/Features';
import Join from './components/Contents/Join';
import YourPlan from './components/Contents/Your_plan';
import { ROUTES } from './constants/routes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={ROUTES.home} component={Home} />
          <Route exact path={ROUTES.about} component={Home} />
          <Route exact path={ROUTES.features} component={Features} />
          <Route exact path={ROUTES.yourPlan} component={YourPlan} />
          <Route exact path={ROUTES.join} component={Join} />
          <Route exact path={ROUTES.getStarted} component={GetStarted} />
          <Route exact path={ROUTES.thankYou} component={ThankYou} />
          <Route exact path={ROUTES.contactUs} component={ContactUs} />
          <Route exact path={ROUTES.contactingUs} component={ContactingUs} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
