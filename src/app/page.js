'use client'
import React, { useState } from 'react'
import { analizar } from './module/generador.js'
import { limpiarComentarios } from '../helper/comentarios.js';
import UI from '../components/UI.jsx';
import Traductor from '@/components/Traductor.jsx';
import Link from 'next/link.js';

const HomePage = () => {
  const [txt, setTxt] = useState('');
  const [resultado, setResultado] = useState([]);

  const inter = () => {
    console.log('esto tiene: ',txt)

    const sinComentarios = limpiarComentarios(txt);
    if(sinComentarios == 'Error en sintaxis de comentarios'){ return setResultado('Error en sintaxis de comentarios')}


      const muestras = analizar(sinComentarios)
      setResultado(muestras);
  }

  const actualizarTexto = (nuevoTexto) => {
    setTxt(nuevoTexto);
  };

  return (
    <Traductor />
    // <UI
    //  titulo={'chucho.bt'}
    //  funcionPrincipal={inter}
    //  contenido={txt}
    //  actualizar={actualizarTexto}
    //  resultados={resultado}
    // />
  )
}

export default HomePage