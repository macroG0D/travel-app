import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Context from '../context';
import Switcher from '../navigation';
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

  return (
    <Context.Provider value={[lang, setLang]}>
      <BrowserRouter>
        <div className="app">
          <Header isMain="true" updateFilter={setFilterVal}/>
          <Switcher  filterVal={filterVal} />
          <Footer/>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;
