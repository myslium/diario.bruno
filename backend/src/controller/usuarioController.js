import * as db from '../repository/usuarioRepository.js'

import { gerarToken } from '../utils/jwt.js'
import { Router } from 'express'

const endpoints = Router()


endpoints.post('/entrar', async (req, resp) => {
    try {
        let usuario = req.body

        let pessoa = await db.validacao(usuario)

        if (pessoa == null) {
            resp.send({ erro: "Usuário ou senha incorreto(s)" })
        }
        else {
            let token = gerarToken(pessoa)
            resp.send({
                "token": token
            })
        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/usuario', async (req, resp) => {

    try {
        let usuario = req.body

        let id = await db.inserirUsuario(usuario)

        resp.send({
            id: id
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints