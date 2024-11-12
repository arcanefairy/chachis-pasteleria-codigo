import React from 'react';
import './estilos/Carrito.css';
import exit from './icons/exit-dark-icon.png';
import cakeimg from './cakes/bday/bday-cake3.png';

function Carrito({ onClose }) {
    return (
        <div className="carrito-popup">
            <div className="carrito-header">
                <div className="header-content"></div>
                <p className='main-text-cart'>Carrito de compras</p>
                <button className="close-button-cart" onClick={onClose}>
                    <img src={exit} alt="Cerrar" className="close-icon-cart" />
                </button>
            </div>
            <div className='cart-content'>
            <div className='order-container'>
            <img src={cakeimg} alt='Pastel' className='cake-img'/> 
            </div>
            <p className='total-text'>Total</p>
            <button className='pagar-button'>Pagar</button>
            </div>
        </div>
    );
}

export default Carrito;
