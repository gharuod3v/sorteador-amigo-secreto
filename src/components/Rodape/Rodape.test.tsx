import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Rodape from '../Rodape/Rodape';
import { useListaDeParticipantes } from '../../state/hook/useListaDeParticipantes';

jest.mock('../../state/hook/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn()
  }
})

const mockDeNavegacao = jest.fn()
const mockSorteio = jest.fn()

jest.mock('../../state/hook/useSorteador', () => {
  return {
    useSorteador: () => mockSorteio
  }
})

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockDeNavegacao
  }
})

describe('onde não existe participantes suficientes', () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([])
  })
  test('a brincadeira não pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )

    const botao = screen.getByText('Iniciar brincadeira!')

    expect(botao).toBeDisabled()
  })
})

describe('quando existem participantes suficientes', () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(['Ana', 'Catarina', 'Josefina'])
  })
  test('a brincadeira pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )

    const botao = screen.getByText('Iniciar brincadeira!')

    expect(botao).not.toBeDisabled()
  })

  test('a brincadeira foi iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )

    const botao = screen.getByText('Iniciar brincadeira!')
      fireEvent.click(botao)
      expect(mockDeNavegacao).toHaveBeenCalledTimes(1)
      expect(mockDeNavegacao).toHaveBeenCalledWith('/sorteio')
      expect(mockSorteio).toHaveBeenCalledTimes(1)

  })
})