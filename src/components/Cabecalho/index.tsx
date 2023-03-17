import './estilos.scss'

export function Cabecalho() {

    return (
        <header className="cabecalho">
            <div className="imagem-logo" role="img" aria-label='Logo do Sorteador'></div>
            <img className='participante' src="/imagens/participa.png" alt="Participante com um presente na mão" />
        </header>
    )
}

