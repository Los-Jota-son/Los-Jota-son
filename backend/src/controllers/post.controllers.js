import { newConnection } from "../database/db.js";

export const getAllPost = async (req,res) => {
    try {
        const connection = await newConnection();

        const [result] = await connection.query(`SELECT * FROM post`)

        res.status(200).json(result)

        connection.end()
    } catch (error) {
        console.error();
        return res.status(500).json({ msg: 'Error interno del servidor', error })
        
    }
}

export const getPostById = async (req,res) => {

    try {
        const id = parseInt(req.params.id)

        const connection = await newConnection()

        const [result] = await connection.query(`SELECT * FROM post WHERE id = ?`, [id]);

        if(result.length === 0) {
            res.status(404).json({ msg: 'publicación no encontrada' })
        }

        res.status(200).json(result[0])

        connection.end()
    } catch (error) {
        console.error();
        return res.status(500).json({ msg: 'Error interno del servidor', error })
    }

    
}

export const createPost = async (req,res) => {

    try {
        const { imagen,video,description } = req.body;

        const id_usuario = req.user.id;

        const connection = await newConnection()

        const [result] = await connection.query(`INSERT INTO post
        (imagen,video,description,id_usuario)
        VALUES (?,?,?)`, [imagen, description,video, id_usuario]);

        res.status(201).json({
            id: result.insertId,
            imagen,
            video,
            description,
            id_usuario
    })

        connection.end()
    } catch (error) {
        console.error();
        return res.status(500).json({ msg: 'Error interno del servidor', error })
    }
    
}

export const updatePost = async (req,res) => {

    try {
        const id = parseInt(req.params.id)

        const { imagen,video, description } = req.body

        const connection = await newConnection()

        const [result] = await connection.query(`SELECT * FROM post WHERE id = ?`)

        if (result.length === 0) {
            return res.status(404).json( { msg: 'publicación no encontrada' });
        };

        await connection.query(`
            UPDATE post SET imagen = ?, video = ?, description = ? WHERE id = ?`, [imagen,video, description, id]
    );

        res.status(201).json({
            id: id,
            imagen,
            video,
            description
    });

    connection.end();
    } catch (error) {
        console.error();
        return res.status(500).json({ msg: 'Error interno del servidor', error })
    }
    
} 

export const deletePost = async (req,res) => {

    try {
        const id = parseInt(req.params.id);

        const connection = await newConnection();

        const [result] = await connection.query('SELECT * FROM post WHERE id = ?', [id]);
    
        if (result.length === 0) {
            return res.status(404).json( { msg: 'publicación no encontrada' });
        };

        await connection.query(`
            DELETE FROM post WHERE id = ?`, [id]
        );

        res.status(200).json({ msg: 'publicación eliminada' })

        connection.end();
    } catch (error) {
        console.error();
        return res.status(500).json({ msg: 'Error interno del servidor', error })
    }
    
}