import React from 'react'
import Formulario from '../components/Formulario/Formulario';
import ListaParticipantes from '../components/ListaParticipantes';
import Rodape from '../components/Rodape/Rodape';
import { Card } from '../components/Card/index';

export default function Configuracao() {
  return (
    <Card>
      <section>
        <h2>Vamos começar? (Min: 3 participantes)</h2>
        <Formulario />
        <ListaParticipantes />
        <Rodape />
      </section>
    </Card>
  )
}
