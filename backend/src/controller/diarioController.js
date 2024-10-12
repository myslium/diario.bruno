import * as db from '../repository/diarioRepository.js'

import { autenticar } from '../utils/jwt.js'

import { Router } from 'express'
const endpoints = Router()

endpoints.post('/diario', autenticar, async(req, resp) => {

    try {
        let diario = req.body
        diario.id_usuario = req.user.id

        let id = await db.inserirConteudo(diario)

        resp.send({
            id: id
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/diario', autenticar, async(req, resp) => {

    try {
        let id_usuario = req.user.id
        let registros = await db.buscarConteudo(id_usuario)

    
        resp.send(registros)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/diario/:id', autenticar, async (req, resp) => {

    try {
        let id = req.params.id
        let registros = await db.buscarConteudoPorID(id)

        resp.send(registros)

    } catch (err) {
         resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints

