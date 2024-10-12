import diarioController from '../src/controller/diarioController.js'
import usuarioController from '../src/controller/usuarioController.js'

export default function Rotas(servidor) {

    servidor.use(diarioController)
    servidor.use(usuarioController)
    

}