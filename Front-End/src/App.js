import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Importando as páginas
import Home from './Pages/Home'
import About from './Pages/About'
import Error from './Pages/Error'

//Importando os componentes
import Header from './Components/Header'


function App() {
  return (
   
    <Router>

      <Header/>

      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/about">
          <About/>
        </Route>

        <Route path="*">
          <Error/>
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
