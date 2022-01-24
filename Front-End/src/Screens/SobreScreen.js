import React from 'react';

import { Container } from 'react-bootstrap'

const SobreScreen = () => {
    return (
        <>
            <Container fluid className='text-center'>
                
                <p className='textoSobre'>
                    A Universidade do Estado de Minas Gerais é uma instituição superior de ensino publica do estadual.Possuindo vários campos educacionais em diversas cidades do estado.
                </p>

                <p className='textoSobre'>
                    O curso que estará disponibilizando as aulas de dança será o curso de Educação Física.
                </p>

                <p className='textoSobre'>
                    Na cidade de Ituiutaba é onde será realizado as aulas para sociedade com o intuito de uma melhora de qualidade de vida e socialização das com a instituição.
                </p>

                <p className='textoSobre'>
                    Abaixo será informado o endereço da instituição. 
                </p>

                <iframe title='Mapa_da_UEMG' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0962586141604!2d-49.45062444989277!3d-18.971355814048803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a231f85a27dc17%3A0xec47d16b1b2658fa!2sUEMG%20Unidade%20Ituiutaba!5e0!3m2!1spt-BR!2sbr!4v1642906917486!5m2!1spt-BR!2sbr" width="600" height="420" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
            </Container>
        </>
    );
};

export default SobreScreen;
