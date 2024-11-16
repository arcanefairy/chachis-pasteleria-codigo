import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import MenuHeader from './components/Menu-Header.js';
import Menu from './components/Menu.js';
import Main from './components/Main';
import ChatBotIcon from './components/ChatBotIcon';
import ChatBot from './components/ChatBotPopUp';
import Cumple from './components/Menu-cumple.js';
import Infantil from './components/Menu-infantil.js';
import Perfil from './components/PerfilUser.js';
import Cambiar from './components/CambiarContra.js';
import Pedido from './components/Pedidos.js';
import Personalizado from './components/Pedidos.js';
import Wedding from './components/Menu-Wedding.js';
import Agregar from './components/addCarrito.js';
import PP from './components/ProcederPago.js';
import './App.css';

function App() {

    return (
        <Router>
            <div className="App">
                <ConditionalHeader />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/chatbot" element={<ChatBot />} />
                    <Route path="/bday" element={<Cumple />} />
                    <Route path="/infantil" element={<Infantil />} />
                    <Route path='/perfil' element={<Perfil />} />
                    <Route path='/cambiar' element={<Cambiar />} />
                    <Route path='/pedidos' element={<Pedido />} />
                    <Route path='/personalizado' element={<Personalizado />} />
                    <Route path='/wedding' element={<Wedding />} />
                    <Route path='/add' element={<Agregar />}/>
                    <Route path='/PP' element= {<PP />}/>
                </Routes>

                <ChatBotIcon />
            </div>
        </Router>
    );
}


function ConditionalHeader() {
    const location = useLocation();

    if (location.pathname === "/menu") {
        return <MenuHeader />;
    }
    return <Header />;
}

export default App;