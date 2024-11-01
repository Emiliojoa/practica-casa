import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className='flex min-h-screen w-full flex-col justify-center items-center gap-3'><h1 className='font-bold  '>No anda bombolo dirigite a una ruta que exista </h1>
            <Link to='/'> <button className='flex border rounded-xl p-1 border-black 
            hover:scale-125 transition duration-300 justify-center '>Volver al inicio </button></Link>

        </div>

    )
}
