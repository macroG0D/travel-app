import React from 'react';
import Header from "../header";
import Main from "../../pages/main";

const App = () => {
  return(
    <div className="app">
        <Header isMain="true" />
        <Main />
    </div>
  )
};

export default App;
