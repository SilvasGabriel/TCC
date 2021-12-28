import React from 'react'

//React-Router-Dom
import {BrowserRouter as Router, Route} from 'react-router-dom'

//React-Bootstrap
import {Container} from 'react-bootstrap'

//Componentes
import Header from './Components/Header'
import Footer from './Components/Footer'

//Telas Usuário
import HomeScreen from './Screens/HomeScreen'
import PostScreen from './Screens/PostScreen'
import LoginScreen from './Screens/LoginScreen'
import RegistroScreen from './Screens/RegistroScreen'
import PerfilScreen from './Screens/PerfilScreen'

//Telas Administrador
import UsuariosScreen from './ScreensAdmin/UsuariosScreen'
import UsuariosEditarScreen from './ScreensAdmin/UsuariosEditarScreen'
import PostagensScreen from './ScreensAdmin/PostagensScreen'

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
              <Route path='/admin/usuarios' component={UsuariosScreen}/>
              <Route path='/admin/editar/:id' component={UsuariosEditarScreen}/>
              <Route path='/admin/postagens' component={PostagensScreen}/>
              <Route exact path='/' component={HomeScreen}/> 
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App
