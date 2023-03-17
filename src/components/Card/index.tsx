import React, { ReactNode } from "react"

import './estilos.scss'

interface Props {
  children: ReactNode
}

export function Card({ children }: Props)  {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export default Card