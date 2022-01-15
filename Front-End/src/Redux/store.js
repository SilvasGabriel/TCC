//Redux
import { createStore, combineReducers, applyMiddleware } from 'redux'

//redux-thunk
import thunk from 'redux-thunk'

//redux-devtools
import { composeWithDevTools } from 'redux-devtools-extension'

//postagensReducer
import {
    postagemListaReducer,
    postagemDetalhesReducer,
    postagemInscricaoReducer,
    //usuarios administradores
    postagemDeletarReducer,
    postagemCriarReducer,
    postagemAtualizarReducer,
} from './Reducers/postagemReducers'

//usuariosReducer
import {
    //usuarios
    usuarioLoginReducer,
    usuarioRegisterReducer,
    usuarioDetalhesReducer,
    usuarioAtualizarReducer,
    //usuários administradores
    usuarioListarReducer,
    usuarioDeletarReducer,
    usuarioEditarReducer,
} from './Reducers/usuarioReducers'

const reducer = combineReducers({

    //Reducers para postagem
    postagemLista: postagemListaReducer,
    postagemDetalhes: postagemDetalhesReducer,
    postagemInscricao: postagemInscricaoReducer,
    //Reducer para postagem Administradores
    postagemDeletar: postagemDeletarReducer,
    postagemCriar: postagemCriarReducer,
    postagemAtualizar: postagemAtualizarReducer,
    //Reducers para usuarios
    usuarioLogin: usuarioLoginReducer,
    usuarioRegister: usuarioRegisterReducer,
    usuarioDetalhes: usuarioDetalhesReducer,
    usuarioAtualizar: usuarioAtualizarReducer,
    //Reducers para usuarios administradores
    usuarioListar: usuarioListarReducer,
    usuarioDeletar: usuarioDeletarReducer,
    usuarioEditar: usuarioEditarReducer,
})


const userInfoFromStorage = localStorage.getItem('usuarioInfo') ? JSON.parse(localStorage.getItem('usuarioInfo')) : null

const initialState = {
    usuarioLogin: { usuarioInfo: userInfoFromStorage},
}

const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)

export default store