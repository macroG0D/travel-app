import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Switcher from '../switcher';
import { Context, ContextID } from '../context';
import Header from '../header';
import Footer from '../footer';

const App = () => {
  const selectedLang = localStorage.getItem('lang') || 'en';
  const [lang, setLang] = useState(selectedLang);
  const [filterVal, setFilterVal] = useState('');
  const saveLang = () => localStorage.setItem('lang', lang);

  useEffect(() => {
    window.addEventListener('unload', saveLang);
    return () => window.removeEventListener('unload', saveLang);
  });

  const [id, setId] = useState(0);
  return (
    <Context.Provider value={[lang, setLang]}>
      <BrowserRouter>
        <div className="app">
          <Header updateFilter={setFilterVal}/>
          <ContextID.Provider value={[id, setId]}>
          <Switcher  filterVal={filterVal}/>
          </ContextID.Provider>
          <Footer/>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;
