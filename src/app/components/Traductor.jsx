import React from "react";
import ReactCodeMirror from "@uiw/react-codemirror";

const Traductor = ({ generar, limpiarC, cargarDocumento, soltarDocumento, arrastrarDocumento, tema, entrada, actualizarTexto, ejecutar, limpiarM, jasmin, salida, mostrarTerminal, resultadoAnalisis, cerrarTerminal}) => {
    return (
        <main className="min-h-screen w-full flex flex-col items-center" style={{ backgroundColor: '#1E212D' }}>
            <header className="my-4">
                <h1 className="text-2xl text-white">Traduce tu código</h1>
            </header>
            <section className="flex gap-4 w-full text-base text-gray-100 p-5">
                <div className="w-full md:w-1/2">   
                    <button className="text-white px-4 py-2 mb-1" onClick={generar}>Traducir</button>
                    <button className="text-white px-4 py-2 mb-1" onClick={limpiarC}>Limpiar</button>
                    <label htmlFor="fileInput" className="text-white px-4 py-2 mb-1 cursor-pointer">
                        archivo
                    </label>
                    <input
                        id="fileInput"
                        type="file"
                        className="hidden"
                        onChange={cargarDocumento}
                    />
                    <div
                        className="border rounded-xl flex-grow w-full p-2"
                        onDrop={soltarDocumento}
                        onDragOver={arrastrarDocumento}
                    >
                        <h1>C</h1>
                        <ReactCodeMirror 
                            theme={tema}
                            value={entrada}
                            onChange={actualizarTexto}
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <button className="text-white px-4 py-2 mb-1" onClick={ejecutar}>Ejecutar</button>
                    <button className="text-white px-4 py-2 mb-1" onClick={limpiarM}>Limpiar</button>
                    <button className="text-white px-4 py-2 mb-1" onClick={jasmin}>Generar Jasmin</button>
                    <div className="border rounded-xl flex-grow w-full p-2 relative">
                        <h1>Mi Lenguaje</h1>
                        <ReactCodeMirror 
                            theme={tema}
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
    );
}

export default Traductor;