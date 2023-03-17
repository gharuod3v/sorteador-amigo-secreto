import React, { useRef, useState } from 'react'
import { useAdicionarParticipante } from '../../state/hook/useAdicionarParticipante';
import { useMensagemDeErro } from '../../state/hook/useMensagemDeErro';
import './Formulario.scss'


export default function Formulario() {

  const [nome, setNome] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const adicionarNaLista = useAdicionarParticipante()

  const mensagemDeErro = useMensagemDeErro()


  const adicionarParticipante = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    adicionarNaLista(nome)
    setNome('')
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={adicionarParticipante}>
      <div className='inputButton'>
        <input
          ref={inputRef}
          value={nome}
          onChange={e => setNome(e.target.value)}
          type="text"
          placeholder='Insira os nomes dos participantes'
        />
        <button disabled={!nome}>Adicionar</button>
       
      </div>
      {mensagemDeErro && <p className='alert error' role='alert'>{mensagemDeErro}</p>}
    </form>
  )
}
