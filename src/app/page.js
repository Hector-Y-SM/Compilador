'use client'
import React, { useState } from 'react'
import { analizar } from './module/generador.js'
import { limpiarComentarios } from '../helper/comentarios.js';
import UI from '../components/UI.jsx';

const HomePage = () => {
  const [txt, setTxt] = useState('');
  const [resultado, setResultado] = useState([]);

  const inter = () => {
    const sinComentarios = limpiarComentarios(txt);
    if(sinComentarios == 'Error en sintaxis de comentarios'){ return setResultado('Error en sintaxis de comentarios')}

    const muestras = analizar(sinComentarios)
    setResultado(muestras);
  }

  return (
    <UI
      titulo={'Compilador'}
      funcionPrincipal={inter}
      contenido={txt}
      actualizar={(e)=>{setTxt(e.target.value)}}
      resultados={resultado}
    />
  )
}

export default HomePage