import './index.scss'
import { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'


export default function Buscar(){

    const [token, setToken] = useState(null)
    const [diario, setDiario] = useState([])

    const navigate = useNavigate()

    async function buscar() {
        const url = `http://localhost:2007/diario?x-access-token=${token}`;
        let resp = await axios.get(url);
        setDiario(resp.data);
    }

    
    async function excluir(id) {
        const url = `http://localhost:2007/diario/${id}?x-access-token=${token}`;
        await axios.delete(url)

        await buscar()
    }


    async function sair() {
        localStorage.setItem('USUARIO', null)
        navigate('/')
    }

    useEffect(() => {
        let token = localStorage.getItem('USUARIO')
        setToken(token)

        if (token === 'null') {
            navigate('/login')
        }
    }, [])


    return (
        <div className='pagina-busca'>
            <main>
                <div className='but'>
                    <Link to = '/'>
                    <i onClick= {sair} className='fa fa-arrow-left'></i>

                    </Link>
                <button onClick={buscar}>Buscar</button>
                </div>
               
                <section>

                    {diario.map((item, pos) => 
                    <div key={pos} className='notas-diario'>
                        <h1>De: {item.nm_usuario}</h1>
                        <h2>Data:{new Date(item.dt_dia).toLocaleDateString()}</h2>
                        <p>{item.ds_conteudo}</p>
                    
                    <div className='botao'>
                        <button onClick ={() => excluir(item.id_diario)}className='deletar'><i className='fa fa-trash icon'></i></button>
                        <Link to ={`/cadastrar/${item.id_diario}`}>
                        <button className='alterar'><i className='fa fa-pencil icon'></i></button>
                        </Link> 
                    </div>

                    </div>
                            
                    
                    
                    )}
                   
                </section>
            </main>
        </div>
    )
}