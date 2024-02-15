'use client'
import React, { useState } from 'react'
import { analizar } from './module/generador.js'

const HomePage = () => {
  const [txt, setTxt] = useState('');

  const inter = () => {
    //console.log(txt)
    analizar(txt)
  }

  return (
    <div>
      <h1>
        hola mundo
      </h1>
      <textarea 
        value = {txt}
        onChange={(e)=>{setTxt(e.target.value)}}
      
      /><br/>
      <button 
        onClick={inter}>
          Revisar
      </button>
    </div>
  )
}

export default HomePage