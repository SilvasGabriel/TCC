import React, { useEffect } from 'react'

//Importando uma Postagem
import Postagem from '../Components/Postagem'

//React-Bootstrap
import { Row, Col } from 'react-bootstrap'

//React-Redux
import { useDispatch, useSelector } from 'react-redux'

//Redux Actions
import { listaPostagens } from '../Redux/Actions/postagemActions'

//Message e Loader componentes
import Message from '../Components/Message'
import Loader from '../Components/Loader'


const ArtigosScreen = () => {
  
    const dispatch = useDispatch()

    const postagemLista = useSelector(state => state.postagemLista)
    const { loading, error, postagens } = postagemLista

    useEffect(() => {

        dispatch(listaPostagens())

    }, [dispatch])

  
    return (
    <>
      <h1>Últimas postagens ...</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {postagens.map((postagem) => (
            <Col key={postagem._id} sm={12} md={6} lg={4} xl={3}>
              <Postagem  postagem={postagem} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default ArtigosScreen;
