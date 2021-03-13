import React from 'react';
import Header from "../header";
import Footer from "../footer";
import Main from "../../pages/main";

const App = () => {
  return(
    <div className="app">
        <Header isMain="true" />
        <Main />
        <Footer />
    </div>
  )
};

export default App;
