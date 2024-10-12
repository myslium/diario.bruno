
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/entrar/index'
import Login from './pages/login'
import CadastroDiario from './pages/cadastrar'
import Buscar from './pages/buscar'

export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/cadastrar' element={<CadastroDiario/>}/>
                <Route path='/cadastrar/:id' element={<CadastroDiario/>}/>

                <Route path='/buscar' element={<Buscar/>}/>
            </Routes>
        </BrowserRouter>
    )
}