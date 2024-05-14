'use client'
import React, { useState } from "react";
import Traductor from "../../components/Traductor"
import { createTheme } from '@uiw/codemirror-themes';
import { analizar, traducir } from "../../../module/generador.js";
import { limpiarComentarios } from "@/helper/comentarios";

const Page  = ()=>{
    const [entrada, setEntrada] = useState('');
    const [salida, setSalida] = useState('');
    const [mostrarTerminal, setMostrarTerminal] = useState(false);
    const [resultadoAnalisis, setResultadoAnalisis] = useState('');

    const tema = createTheme({
        settings: {
          background: '#1E212D',
          foreground: '#fff',
          caret: '#5d00ff',
          selection: '#4A4E69',
          selectionMatch: '#9A8C98',
          lineHighlight: '#4A4E69',
          gutterActiveForeground: '#fff',
          gutterBackground: 'transparent',
          gutterForeground: '#fff',
          gutterBorder: 'transparent',
        },
    });

    const generar = () => {
        const resultado = traducir(entrada);
        setSalida(resultado);
    }
    
    const actualizarTexto = (nuevoTexto) => { setEntrada(nuevoTexto); };
    const ejecutar = () => {
        const limpio = limpiarComentarios(salida)
        const txt = analizar(limpio);

        setResultadoAnalisis(txt);
        setMostrarTerminal(true);
    };

    const generarJasmin = () =>{
        const limpio = limpiarComentarios(salida)
        const txt = analizar(limpio);
        
    }


    const leerArchivo = (archivo) => {
        const lector = new FileReader();

        lector.onload = (e) =>{
            const contenido = e.target.result;
            setEntrada(contenido);
        }

        archivo ? lector.readAsText(archivo) : '';
    }

    const cargarDocumento = (e) => {
        const arc = e.target.files[0];
        leerArchivo(arc);
    }

    const soltarDocumento = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        leerArchivo(file);
    };

    const arrastrarDocumento = (e) => { e.preventDefault(); };
    const cerrarTerminal = () => { setMostrarTerminal(false);};
    const limpiarC = () => { setEntrada('') }
    const limpiarM = () => { setSalida('') }
    
    return(
        <Traductor 
            entrada={entrada}
            salida={salida}
            generar={generar}
            actualizarTexto={actualizarTexto}
            ejecutar={ejecutar}
            cargarDocumento={cargarDocumento}
            soltarDocumento={soltarDocumento}
            arrastrarDocumento={arrastrarDocumento}
            cerrarTerminal={cerrarTerminal}
            limpiarC={limpiarC}
            limpiarM={limpiarM}
            jasmin={generarJasmin}
            tema={tema}
            mostrarTerminal={mostrarTerminal}
            resultadoAnalisis={resultadoAnalisis}
        />
    )
}

export default Page;