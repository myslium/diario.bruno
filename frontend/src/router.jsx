
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/entrar/index'

export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}