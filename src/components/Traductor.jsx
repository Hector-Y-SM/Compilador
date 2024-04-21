import React, { useState } from "react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { createTheme } from '@uiw/codemirror-themes';
import { analizar, traducir } from "../app/module/generador.js";

const Traductor = () => {
    const [entrada, setEntrada] = useState('');
    const [salida, setSalida] = useState('');
    const [mostrarTerminal, setMostrarTerminal] = useState(false);
    const [resultadoAnalisis, setResultadoAnalisis] = useState('');

    const temaPersonalizado = createTheme({
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

        setEntrada(entrada);
        setSalida(resultado);
    }
    
    const actualizarTexto = (nuevoTexto) => {
        setEntrada(nuevoTexto);
    };

    const ejecutar = () => {
        const txt = analizar(salida);


        setResultadoAnalisis(txt);
        setMostrarTerminal(true);
    };

    const cerrarTerminal = () => {
        setMostrarTerminal(false);
    };

    return (
        <main className="min-h-screen w-full flex flex-col items-center" style={{ backgroundColor: '#1E212D' }}>
            <header className="my-4">
                <h1 className="text-2xl text-white">Traduce tu código</h1>
            </header>
            <section className="flex gap-4 w-full text-base text-gray-100 p-5">
                <div className="w-full md:w-1/2">   
                    <button className="text-white px-4 py-2  mb-1" onClick={generar}>Traducir</button>
                    <button className="text-white px-4 py-2  mb-1">Limpiar</button>
                    <div className="border rounded-xl flex-grow w-full p-2">
                        <h1>C</h1>
                        <ReactCodeMirror 
                            theme={temaPersonalizado}
                            value={entrada}
                            onChange={actualizarTexto}
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <button className="text-white px-4 py-2  mb-1" onClick={ejecutar}>Ejecutar</button>
                    <button className="text-white px-4 py-2  mb-1">Limpiar</button>
                    <div className="border rounded-xl flex-grow w-full p-2 relative">
                        <h1>Mi Lenguaje</h1>
                        <ReactCodeMirror 
                            theme={temaPersonalizado}
                            value={salida}
                        />
                    </div>
                </div>
            </section>
        {mostrarTerminal && (
            <div className="transition-all text-gray-100 p-3 fixed bottom-0 left-0 right-0 h-1/4 md:h-1/3 lg:h-1/4 rounded-t-xl bg-gray-700">
                Salida del análisis: <br />
                {resultadoAnalisis}
                <button 
                    className="text-gray-100 rounded px-4 py-2 absolute top-3 right-3 hover:text-red-500" 
                    onClick={cerrarTerminal}
                >
                    X
                </button>
            </div>
        )}
    </main>
    )
}

export default Traductor;
