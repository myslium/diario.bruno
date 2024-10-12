import './index.scss'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
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
        let resp = await axios.post(url, usuario)

        if(resp.data.erro !== undefined) {
            alert(resp.data.erro)
        }
        else{
            localStorage.setItem('USUARIO', resp.data.token)
            Navegation('/cadastrar')
        }
    }

    return (
        <div className='pagina-login'>
            
            <main>
                <section className='login'>

                    

                    <div className='input'>
                        <label>Nome:</label>

                        <div>
                            <i className='fa fa-user icon'></i>
                            <input type="text" placeholder='Usuario' value={nome} onChange={e => setNome(e.target.value)} />
                        </div>
                    </div>

                    <div className='input'>
                        <label>Senha:</label>

                        <div>
                            <i className='fa fa-lock icon'></i>
                            <input type="password" placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)}/>

                        </div>
                    </div>

                    <Link to='/login'><p>Não possui cadastro? Cadastrar</p></Link>

                    <button onClick={acessar}>Entrar</button>
                    
                </section>
            </main>
        </div>
    )
}