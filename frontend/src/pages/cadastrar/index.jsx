import './index.scss'
import { useEffect, useState } from 'react'
import moment from 'moment'
import axios from 'axios'

import { Link, useNavigate, useParams } from 'react-router-dom'

export default function CadastroDiario() {

    const [token, setToken] = useState(null)
    const [data, setData] = useState('')
    const [conteudo, setConteudo] = useState('')

    const navegation = useNavigate()
    const {id} = useParams()

    async function salvarDiario() {

        const novaNota ={
            "dia": data,
            "conteudo": conteudo
        }

        if (id === undefined) {
             const url = `http://localhost:2007/diario?x-access-token=${token}`
            let resp = await axios.post(url, novaNota)
            alert('Nota do diário adicionada! ' + resp.data.id)
        }
        else {
            const url = `http://localhost:2007/diario/${id}?x-access-token=${token}`;
            let resp = await axios.put(url, novaNota);
            alert('Nota do diário alterada!');
        }
       

    }

    async function buscar(token) {
        if (id !== undefined) {
            const url = `http://localhost:2007/diario/${id}?x-access-token=${token}`;
            let resp = await axios.get(url);

            let data = moment(resp.data.dt_dia).format('YYYY-MM-DD')

            setData(data)
            setConteudo(resp.data.ds_conteudo)
         
        }
    }

    useEffect( () => {
        let token = localStorage.getItem('USUARIO')
        setToken(token)

        if (token == 'null') {
            navegation('/login')
        }

        buscar(token)
    }, [])

    return (
        <div className='pagina-diario'>

            <Link to='/'>
                        <i id='voltar' className='fa fa-arrow-left icon'></i>

            </Link>

            <main>
                <section>
                    <div className='cadastro'>

                        <div className='titulo'>
                            <i className='fa fa-book icon'></i>
                            <h1>Querido Diário...</h1>
                        </div>
                       
                        <div className='div'>
                            <label>Data</label>
                            <input type="date" value={data} onChange={e => setData(e.target.value)}/>
                        </div>

                        <div className='div'>
                            <label>Conteúdo</label>
                            <textarea value={conteudo} onChange={e=> setConteudo(e.target.value)}></textarea>
                        </div>
                        
                       
                       <div className='botao'>
                            <button onClick={salvarDiario}>Salvar</button>
                       </div>
                        

                    </div>
                    <Link to='/buscar'>
                    <button>Consultar</button>

                    </Link>
                </section>
            </main>
        </div>
    )
}