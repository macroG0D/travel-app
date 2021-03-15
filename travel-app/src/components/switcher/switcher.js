import React, {useContext} from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Main from '../../pages/main';
import Country from '../../pages/country';
import ATTRACTION from '../../data/ATTRACTIONSEN.json';
import {ContextID} from "../context";

 const Switcher = ({filterVal}) => {
   const [id] = useContext(ContextID);

   const isCountryExists = ({history, match}) => {
    const idCountry = Number(match.params.id);
    console.log(idCountry)
    // setId(idCountry);
    if (
      idCountry < 0
      || idCountry >= ATTRACTION.length
      || (idCountry ^ 0) !== idCountry
    ) {
      return <Redirect to='/'/>
    }

    return <Country history={history} id={idCountry}/>
  }

  return (
    <Switch>
      <Route exact path='/' component={() => <Main filterVal={filterVal}/>}/>
      <Route path='/country/:id' component={(...props) => isCountryExists(...props)}/>
      <Redirect path='*' to='/'/>
    </Switch>
  );
}

export default Switcher;
