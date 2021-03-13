import React, { useState, useEffect } from 'react';
import Context from '../context';
import Header from '../header';
import Footer from '../footer';
// import Main from '../../pages/main';
import Country from '../../pages/country';

const App = () => {
  const selectedLang = localStorage.getItem('lang') || 'en';
  const [lang, setLang] = useState(selectedLang);
  const saveLang = () => localStorage.setItem('lang', lang);

  useEffect(() => {
    window.addEventListener('unload', saveLang);
    return () => window.removeEventListener('unload', saveLang);
  });

  return (
    <Context.Provider value={[lang, setLang]}>
      <div className="app">
        <Header isMain="true" />
        {/* <Main /> */}
        <Country id="1" />
        <Footer />
      </div>
    </Context.Provider>
  );
};

export default App;
