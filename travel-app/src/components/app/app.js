import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Context from '../context';
import Switcher from '../navigation';
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

  return (
    <Context.Provider value={[lang, setLang]}>
      <BrowserRouter>
        <div className="app">
          <Header isMain="true" updateFilter={setFilterVal}/>
          <Main filterVal={filterVal}/>
          <Footer/>
          <Switcher/>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;
