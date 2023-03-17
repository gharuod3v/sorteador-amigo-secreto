
import { useListaDeParticipantes } from '../state/hook/useListaDeParticipantes';
import { useState } from 'react';
import { useResultadoSorteio } from '../state/hook/useResultadoSorteio';
import './Sorteio.scss'
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/Card/index';

export default function Sorteio() {
  const participantes = useListaDeParticipantes()

  const [participanteDaVez, setParticipanteDaVez] = useState('')
  const [amigoSecreto, setAmigoSecreto] = useState('')

  const resultado = useResultadoSorteio()

  const navigate = useNavigate()

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!)
    }
  }

  return (
    <Card>
      <section className='sorteio'>
        <form onSubmit={sortear}>
          <select
            required
            name="participanteDaVez"
            id="participanteDaVez"
            placeholder='Selecione o seu nome'
            value={participanteDaVez}
            onChange={evento => setParticipanteDaVez(evento.target.value)}
          >
            <option>Selecione seu nome</option>
            {participantes.map(participante => <option key={participante}>{participante}</option>)}

          </select>
          <div>
            <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
            <button className='botao-sortear'>Sortear</button>
            <button className='botao-voltar' onClick={() => navigate('/')}>Voltar</button>
          </div>
        </form>

        {amigoSecreto && <p className='textResult'>Seu amigo secreto é:</p>}
        {amigoSecreto && <p className='resultado' role='alert'>{amigoSecreto}</p>}
        <footer>
          <img src="/imagens/aviao.png" className='aviao' alt="Aviao" />
        </footer>
      </section>
    </Card>
  )
}
