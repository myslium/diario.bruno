import './index.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function Login() {

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')


    const Navegate = useNavigate()

    async function cadastro() {
        
        const novoUsuario = {
            "nome": nome,
            "senha": senha
        }

        const url = `http://localhost:2007/usuario`
        axios.post(url, novoUsuario)

        alert('Novo usuario')

        Navegate('/')
    }



    return (
        <div className='pagina-cadastro'>
             <main>
                <section className='login'>

                    

                    <div className='input'>
                        <label>Nome:</label>

                        <div>
                            <i className='fa fa-user icon'></i>
                            <input type="text" placeholder='Usuario' value={nome} onChange={e=> setNome(e.target.value)}/>
                        </div>
                    </div>

                    <div className='input'>
                        <label>Senha:</label>

                        <div>
                            <i className='fa fa-lock icon'></i>
                            <input type="password" placeholder='Senha' value={senha} onChange={e=> setSenha(e.target.value)}/>

                        </div>
                    </div>

                    <button onClick={cadastro}>Cadastrar</button>
                    
                </section>
            </main>
        </div>
    )
}