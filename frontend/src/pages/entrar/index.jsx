import './index.scss'
import { useState } from 'react'


export default function Home(){

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