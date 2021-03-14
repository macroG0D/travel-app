import React, { useState, useEffect } from 'react';
import { Context, ContextID } from '../context';
import Header from '../header';
import Footer from '../footer';
import Main from '../../pages/main';
import Country from '../../pages/country';

const App = () => {
  const selectedLang = localStorage.getItem('lang') || 'en';
  const [lang, setLang] = useState(selectedLang);
  const [filterVal, setFilterVal] = useState('');
  const saveLang = () => localStorage.setItem('lang', lang);

  useEffect(() => {
    window.addEventListener('unload', saveLang);
    return () => window.removeEventListener('unload', saveLang);
  });

  const id = 5;

  return (
    <Context.Provider value={[lang, setLang]}>
      <div className="app">
        <Header isMain="true" updateFilter={setFilterVal} />
        <Main filterVal={filterVal} />
        <ContextID.Provider value={id}>
          <Country value='5'/>
        </ContextID.Provider>
        <Footer />
      </div>
    </Context.Provider>
  );
};

export default App;
