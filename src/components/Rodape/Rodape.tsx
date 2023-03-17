import React from 'react'
import './Rodape.scss'
import { useNavigate } from 'react-router-dom';
import { useListaDeParticipantes } from '../../state/hook/useListaDeParticipantes';
import { useSorteador } from '../../state/hook/useSorteador';
import { useResetRecoilState } from 'recoil';
import { listaParticipantesState } from '../../state/atom';

export default function Rodape() {
  const participantes = useListaDeParticipantes()

  const navegarPara = useNavigate()

  const sortear = useSorteador()

  const resetList = useResetRecoilState(listaParticipantesState)

  const iniciar = () => {
    sortear()
    navegarPara('/sorteio')
  }

  return (
    <footer className='footerConfig'>
      <div className='divButton'>

        <button className='StartButton' disabled={participantes.length < 3} onClick={iniciar}>Iniciar brincadeira!</button>
        <button className='resetButton' onClick={resetList}>Resetar Lista</button>
      </div>
      <div>

        <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
      </div>
    </footer>
  )
}
