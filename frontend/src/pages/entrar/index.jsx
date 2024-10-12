import './index.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function Home(){

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const Navegation = useNavigate()

    async function acessar() {
        const usuario = {
            "nome": nome,
            "senha": senha
        }

        const url = `http://localhost:2007/entrar`
        let resposta = await axios.post(url, usuario)
    }

    return (
        <div className='pagina-login'>
            
            <main>
                <section className='login'>

                    <div className='input'>
                        <label>Nome:</label>
                        <input type="text" placeholder='Usuario' />
                    </div>

                    <div className='input'>
                        <label>Senha:</label>
                        <input type="password" placeholder='Senha' />
                    </div>

                    <button>Entrar</button>
                    
                </section>
            </main>
        </div>
    )
}