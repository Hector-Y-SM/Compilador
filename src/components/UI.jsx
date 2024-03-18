import ReactCodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import { useState } from 'react';

const UI = ({ titulo, funcionPrincipal, contenido, actualizar, resultados }) => {
    const [mostrarTerminal, setMostrarTerminal] = useState(false);
    const abrirTerminal = () => { setMostrarTerminal(true); };
    const cerrarTerminal = () => { setMostrarTerminal(false); };

    const temaPersonalizado = createTheme({
        settings: {
          background: '#1E212D',
          foreground: '#fff',
          caret: '#5d00ff',
          selection: '#4A4E69',
          selectionMatch: '#9A8C98',
          lineHighlight: '#4A4E69',
          gutterActiveForeground: '#fff',
          gutterBackground: '#1E212D',
          gutterForeground: '#fff',
          gutterBorder: 'transparent',
        },
        styles: [
          { tag: t.comment, color: '#787b80' },
          { tag: t.variableName, color: '#0080ff' },
          { tag: [t.string, t.special(t.brace)], color: '#5c6166' },
          { tag: t.number, color: '#5c6166' },
          { tag: t.bool, color: '#5c6166' },
          { tag: t.null, color: '#5c6166' },
          { tag: t.keyword, color: '#5c6166' },
          { tag: t.operator, color: '#5c6166' },
          { tag: t.className, color: '#5c6166' },
          { tag: t.definition(t.typeName), color: '#5c6166' },
          { tag: t.typeName, color: '#5c6166' },
          { tag: t.angleBracket, color: '#5c6166' },
          { tag: t.tagName, color: '#5c6166' },
          { tag: t.attributeName, color: '#5c6166' },
        ],
      });

    return (
        <main className="h-screen w-screen  flex flex-col relative" style={{ backgroundColor: '#1E212D' }}>
            <section className="w-full flex items-center justify-between px-3 py-2 ">
                <h1 className="text-2xl lg:text-4xl text-gray-100">{titulo}</h1>
                <div className="flex">
                    <button 
                        className="w-auto h-8  rounded flex items-center justify-center text-gray-200 px-3 m-1 "
                        onClick={() => {/* Agrega la función para este botón */}}
                    >
                        Limpiar
                    </button>
                    <button 
                        className="w-auto h-8 rounded flex items-center justify-center text-gray-200 px-3 m-1 "
                        onClick={abrirTerminal}
                    >
                        Terminal
                    </button>
                    <button 
                        className="w-auto h-8  rounded flex items-center justify-center text-gray-200 px-3 m-1 "
                        onClick={() => { funcionPrincipal(); abrirTerminal(); }}
                    >
                        Ejecutar
                    </button>
                </div>
            </section>
            <div className="flex-grow  w-full">
                <ReactCodeMirror
                    className="w-full text-base text-gray-100"
                    value={contenido}
                    onChange={actualizar}
                    theme={temaPersonalizado}
                />
            </div>
            {mostrarTerminal && (
                <div className="transition-all  text-gray-100 p-3 fixed bottom-0 left-0 right-0 h-1/4 rounded-t-xl bg-gray-700" >
                    Salida: <br />
                    {resultados}
                    <button 
                        className="text-gray-100 rounded px-4 py-2 absolute top-3 right-3 hover:text-red-500" 
                        onClick={cerrarTerminal}
                    >
                        X
                    </button>
                </div>
            )}
        </main>
    );
};

export default UI;
