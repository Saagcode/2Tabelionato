import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home/index'
import Sobre from '../pages/sobre/index'
import Servicos from '../pages/servicos/index'
import Emolumentos from '../pages/emolumentos/index'
import Contato from '../pages/contato/index'

function router() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<Home />} path='/'/>
                <Route element={<Sobre />} path='/Sobre'/>
                <Route element={<Servicos />} path='/servicos'/>
                <Route element={<Emolumentos />} path='/emolumentos'/>
                <Route element={<Contato />} path='/contato'/>
            </Routes>
        </HashRouter>
    )
}

export default router;