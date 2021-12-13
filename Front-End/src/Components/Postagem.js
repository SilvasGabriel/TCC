import React from 'react'

//React-Bootstrap
import { Card } from 'react-bootstrap'

//React-Router-Dom
import {Link} from 'react-router-dom'

const Postagem = ({postagem}) => {
    return (
        <Card className='my-3 py-3 rounded' >
            <Link to={`/postagem/${postagem._id}`}>
                <Card.Img  className='containerImg' src={postagem.image} variant='top'/>
            </Link>

            <Card.Body>
            <Link to={`/postagem/${postagem._id}`}>
                <Card.Title as='div'>
                    <h4><strong>{postagem.name}</strong></h4>
                </Card.Title>
            </Link>

            <Card.Text as='h6'>
                    {postagem.createdAt}
            </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Postagem
