import { useState } from 'react';

const UI = ({titulo, funcionPrincipal, contenido, actualizar, resultados}) => {
    const [mostrarResultados, setMostrarResultados] = useState(false);

    const toggleMostrarResultados = () => {
        setMostrarResultados(!mostrarResultados);
    };

    return(
        <main className="h-screen w-screen bg-gray-800 flex flex-col justify-between">
            <section className="w-screen mx-auto flex items-start px-3 pt-2 pb-3 border-b border-gray-400">
                <div className="flex-grow">
                    <h1 className="text-2xl lg:text-4xl text-white">{titulo}</h1>
                </div>
                <div>
                    <button className="text-white bg-green-400 rounded px-4 py-2" 
                            onClick={() => { funcionPrincipal(); toggleMostrarResultados(); }}
                    >
                    ▶ </button>
                </div>
            </section>
            <div className="flex-grow bg-gray-800 w-full">
                <textarea
                    className="w-full h-full bg-transparent text-white text-lg lg:text-xl resize-none px-4 py-2"
                    value={contenido}
                    onChange={actualizar}
                    placeholder="Escribe aquí..."
                >
                 </textarea>
            </div>
            {mostrarResultados && (
                <div className={`transition-all text-2xl duration-200 bg-black text-white p-3 overflow-hidden relative h-1/2`}>
                    <button className="text-white  rounded px-4 py-2 absolute top-3 right-3" 
                            onClick={toggleMostrarResultados}>X</button>
                    {resultados}
                </div>
            )}
        </main>
    );
}

export default UI;
