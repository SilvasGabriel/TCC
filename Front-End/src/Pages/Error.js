import React from 'react'
import { Link } from 'react-router-dom'

export default function Error () {
    return (
        <section className="error-pagina section">
            <div className="error-container">   
                <h1>oops! ocorreu um erro!</h1>
                <Link to="/" className="btn">
                    Volte a página inicial
                </Link>
            </div>       
        </section>
    )
}