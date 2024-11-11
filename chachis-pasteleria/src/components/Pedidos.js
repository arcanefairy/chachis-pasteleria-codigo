import './estilos/Pedidos.css';
import React, {useState} from 'react';


function Perfil() {
    const [categoria, setCategoria] = useState(''); 
    const [sabor, setSabor] = useState(''); 
    const [relleno, setRelleno] = useState(''); 
    const [tamaño, setTamaño] = useState(''); 

    const categorias = [
        {label: "Cumpleaños", value: 1},
        {label: "Infantil", value: 2},
        {label: "Boda", value: 3},
        {label: "Personalizado", value: 4}
    ]

    const sabores = [
        {label: "Chocolate", value: 1},
        {label: "Vainilla", value: 2},
        {label: "Fresa", value: 3},
        {label: "Red velvet", value: 4}
    ]

    const rellenos = [
        {label: "Fresas", value: 1},
        {label: "Frutos rojos", value: 2},
        {label: "Chocolate", value: 3},
        {label: "Cajeta", value: 4},
        {label: "Bavaria", value: 5},
        {label: "Sin relleno", value: 6}
    ]

    const tamaños = [
        {label: "Chico", value: 1},
        {label: "Mediano", value: 2},
        {label: "Grande", value: 3}
    ]


    return (
        <div className="pedidos-container">
        <p className='pedidos-title'>REALIZAR PEDIDO</p>
        <p className='pedidos-texto'>1.- C A T E G O R Í A:</p>
        <select id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}> 
            <option value="">Escoge tu ocasión</option> 
            {categorias.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))} 
        </select>
        <p className='pedidos-texto'>2.- S A B O R:</p>
        <select id="sabor" value={sabor} onChange={(e) => setSabor(e.target.value)}> 
            <option value="">Escoge el sabor</option> 
            {sabores.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))} 
        </select>
        <p className='pedidos-texto'>3.- R E L L E N O:</p>
        <select id="relleno" value={relleno} onChange={(e) => setRelleno(e.target.value)}> 
            <option value="">Escoge el relleno</option> 
            {rellenos.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))} 
        </select>
        <p className='pedidos-texto'>4.- T A M A Ñ O:</p>
        <select id="tamaño" value={tamaño} onChange={(e) => setTamaño(e.target.value)}> 
            <option value="">Escoge el tamaño</option> 
            {tamaños.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))} 
        </select>
    </div>
    );
}

export default Perfil;