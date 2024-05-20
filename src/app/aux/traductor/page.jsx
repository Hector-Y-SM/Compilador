'use client'
import React, { useState } from "react";
import Traductor from "../../components/Traductor"
import { createTheme } from '@uiw/codemirror-themes';
import { analizar } from "../../../module/generador.js";
import { limpiarComentarios } from "@/helper/comentarios";
import { traducir } from "../../../module/traductor.js";

const Page  = () => {
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
        console.log('si pasamos')
        const resultado = traducir(entrada);
        //console.log('estttt ', resultado)
        setSalida(resultado);
        console.log('aqqqq')
    }
    
    const actualizarTexto = (nuevoTexto) => { setEntrada(nuevoTexto); };
    const ejecutar = () => {
        const limpio = limpiarComentarios(salida);
        const txt = analizar(limpio);

        setResultadoAnalisis(txt.mensaje == undefined? txt : txt.mensaje);
        setMostrarTerminal(true);
    };

    const generarJasmin = () => {
        const limpio = limpiarComentarios(salida);
        const txt = analizar(limpio);
        setSalida(txt.jasmin);
    }

    const ejecutarJasmin = () => {
        console.log('esto deberia ', salida)
        fetch('http://localhost:8080/jasmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({codigoJasmin: salida}),
        })
        .then(res => res.text())
        .then(data => setResultadoAnalisis(data))
        .catch(err => setResultadoAnalisis(err));
        setMostrarTerminal(true);
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
            ejecutarJasmin={ejecutarJasmin}
            tema={tema}
            mostrarTerminal={mostrarTerminal}
            resultadoAnalisis={resultadoAnalisis}
        />
    )
}

export default Page;