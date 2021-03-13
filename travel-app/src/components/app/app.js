import React, {useState} from 'react';
import Header from "../header";
import Footer from "../footer";
import Main from "../../pages/main";

const App = () => {
  const [filterVal, setFilterVal] = useState('');

  return(
    <div className="app">
        <Header isMain="true" updateFilter={setFilterVal}/>
        <Main filterVal={filterVal}/>
        <Footer />
    </div>
  )
};

export default App;
