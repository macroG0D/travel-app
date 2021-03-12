import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Main from '../../pages/main';
import CountryPage from '../../pages/country';
// import ExchangeRates from "../exchange-rates";
// import Weather from "../weather";

const App = () => {
  return (
    <div className="app">
      <Header isMain="true" />
      {/* <Main /> */}
      <CountryPage id="0" />
      <Footer />
    </div>
  );
};

export default App;
