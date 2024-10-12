import con from "./connection.js";

export async function inserirConteudo(diario) {

    const comando = `
    insert into tb_diario (dt_dia, ds_conteudo, id_usuario) 
    values (?, ?, ?)
    `

    let resposta = await con.query(comando, [diario.dia, diario.conteudo, diario.id_usuario])
    let info = resposta[0]

    return info.insertId
    
}

export async function buscarConteudo(idUsuario) {
    
    const comando = `
    SELECT
        diario.id_diario,
        diario.dt_dia,
        diario.ds_conteudo,
        usuario.nm_usuario
    FROM 
        tb_diario AS diario
    JOIN 
        tb_usuario AS usuario 
        ON diario.id_usuario = usuario.id_usuario
    where usuario.id_usuario = ?
    `
    let resposta = await con.query(comando, [idUsuario])

    let info = resposta[0]

    return info
}

export async function buscarConteudoPorID(id) {
    
    const comando = `
    SELECT
        diario.id_diario,
        diario.dt_dia,
        diario.ds_conteudo,
        usuario.nm_usuario
    FROM 
        tb_diario AS diario
    JOIN 
        tb_usuario AS usuario 
        ON diario.id_usuario = usuario.id_usuario
    where diario.id_diario = ?
    `
    let [resposta] = await con.query(comando, [id])

    let info = resposta[0]

    return info
}

export async function removerDiario(id) {
    const comando = `
        delete from tb_diario
         where id_diario = ?
    `

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function alterarDiario(id, diario) {
    const comando = `
         update tb_diario 
            set dt_dia = ?,
                ds_conteudo = ?
            where id_diario = ?;
    `

    let resposta = await con.query(comando, [diario.dia, diario.conteudo, id])
    let info = resposta[0];

    return info.affectedRows;
}
