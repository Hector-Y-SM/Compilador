// Importamos useState de React
import { useState } from 'react';

const UI = ({ titulo, funcionPrincipal, contenido, actualizar, resultados }) => {
    const [lineas, setLineas] = useState(1);
    const [mostrarTerminal, setMostrarTerminal] = useState(false);

    // Función para contar las líneas en el textarea
    const contarLineas = (texto) => {
        const lineasTexto = texto.split('\n').length;
        setLineas(lineasTexto);
    };

    // Función para manejar la actualización del textarea
    const handleActualizar = (e) => {
        actualizar(e);
        contarLineas(e.target.value);
    };

    const abrirTerminal = () => { setMostrarTerminal(true); };
    const cerrarTerminal = () => { setMostrarTerminal(false); };

    return (
        <main className="h-screen w-screen bg-gray-800 flex flex-col relative">
            <section className="w-screen mx-auto flex items-start px-3 pt-2 pb-3 border-b border-gray-400">
                <div className="flex-grow">
                    <h1 className="text-2xl lg:text-4xl text-white p-1">{titulo}</h1>
                </div>
                <div>
                <button className='text-white p-2 ml-1'
                            onClick={()=>{abrirTerminal()}}    
                    >
                        Terminal
                    </button>
                    <button
                        className="text-white bg-green-400 rounded px-4 py-2"
                        onClick={() => {
                            funcionPrincipal();
                            abrirTerminal();
                        }}
                    >
                        ▶
                    </button>
                </div>
            </section>
            <div className="flex-grow bg-gray-800 w-full flex relative">
                <div className="flex flex-col justify-start items-end text-lg lg:text-xl pr-2 py-2">
                    {Array.from({ length: lineas }, (_, index) => (
                        <span key={index} className="text-gray-400">
                            {index + 1}
                        </span>
                    ))}
                </div>
                <textarea
                    className="flex-grow bg-transparent text-white text-lg lg:text-xl resize-none px-4 py-2 outline-none"
                    value={contenido}
                    onChange={handleActualizar}
                    placeholder="Escribe aquí..."
                />
            </div>
            {mostrarTerminal && (
                <div className={`transition-all text-2xl duration-200 bg-black text-white p-3 overflow-hidden fixed bottom-0 left-0 right-0 h-1/4`}>
                    Salida: {resultados}
                    <button className="text-white rounded px-4 py-2 absolute top-3 right-3 hover:text-red-500" 
                        onClick={cerrarTerminal}>
                        X
                    </button>
                </div>
            )}
        </main>
    );
};

export default UI;