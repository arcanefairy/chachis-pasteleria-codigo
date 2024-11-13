import React from 'react';
import './estilos/Carrito.css';
import exit from './icons/exit-dark-icon.png';
import cakeimg from './cakes/bday/bday-cake3.png';

function Carrito({ onClose }) {
    return (
        <div className="carrito-popup">
            <div className="carrito-header">
                <p className='main-text-cart'>Carrito de compras</p>
                <button className="close-button-cart" onClick={onClose}>
                    <img src={exit} alt="Cerrar" className="close-icon-cart" />
                </button>
            </div>
            
            {/* Única cart-content con desplazamiento para todos los elementos */}
            <div className="cart-content">
                <div className="product-item">
                    <img src={cakeimg} alt="Producto" className="cake-img" />
                    <div className="product-details">
                        <p className='product-name'>PASTEL</p>
                        <p className='product-description'>Descripción</p>
                        <p className='product-price'>Precio</p>
                    </div>
                </div>
                <div className="product-item">
                    <img src={cakeimg} alt="Producto" className="cake-img" />
                    <div className="product-details">
                        <p className='product-name'>PASTEL</p>
                        <p className='product-description'>Descripción</p>
                        <p className='product-price'>Precio</p>
                    </div>
                </div>
                <div className="product-item">
                    <img src={cakeimg} alt="Producto" className="cake-img" />
                    <div className="product-details">
                        <p className='product-name'>PASTEL</p>
                        <p className='product-description'>Descripción</p>
                        <p className='product-price'>Precio</p>
                    </div>
                </div>
                {/* Agrega más items de la misma manera si es necesario */}
            </div>

            <p className='items-cart'>1 artículo(s) en el carrito</p>
            
            <div className="footer-fixed">
                <p className='total-text'>$TOTAL</p>
                <button className='pagar-button'>Pagar</button>
            </div>
        </div>
    );
}

export default Carrito;