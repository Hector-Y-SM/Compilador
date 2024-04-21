'use client'
import { useRouter } from 'next/navigation';
import * as React from 'react';

const Header = () => {
    const router = useRouter();

    const cambiarOpcion = (event) => {
        const seleccion = event.target.value;
        router.push(seleccion);
    };

    return (
        <div style={{ backgroundColor: '#1E212D' }}>
            <select onChange={cambiarOpcion} className='text-white' style={{ backgroundColor: '#1E212D' }}>
                <option value="">Selecciona una opción</option>
                <option value="/aux/codigo">Compilador</option>
                <option value="/aux/traductor">Traductor</option>
            </select>
        </div>
    );
};

export default Header;