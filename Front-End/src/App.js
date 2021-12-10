import React from 'react'

//React-Router-Dom
import {BrowserRouter as Router, Route} from 'react-router-dom'

//React-Bootstrap
import {Container} from 'react-bootstrap'

//Componentes
import Header from './Components/Header'
import Footer from './Components/Footer'

//Telas
import HomeScreen from './Screens/HomeScreen'
import PostScreen from './Screens/PostScreen'
import LoginScreen from './Screens/LoginScreen'
import RegistroScreen from './Screens/RegistroScreen'
import PerfilScreen from './Screens/PerfilScreen'


const App = () => {
  return (
    <Router>
      <Header/>
      <main className='py-4'>
        <Container>
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegistroScreen} />
            <Route path='/perfil' component={PerfilScreen} />
            <Route path='/postagem/:id' component={PostScreen}/>
            <Route exact path='/' component={HomeScreen}/>  
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App
