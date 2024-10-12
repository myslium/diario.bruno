
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/entrar/index'
import Login from './pages/login'

export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}