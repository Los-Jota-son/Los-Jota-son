import { newConnection } from "../database/db.js";

export const getAllUser = async (req,res) => {
    try {
        const connection = await newConnection();

        const [result] = await connection.query(`SELECT * FROM users`)

        res.status(200).json(result)

        connection.end()
    } catch (error) {
        console.error();
        return res.status(500).json({ msg: 'Error interno del servidor', error })
        
    }
}

export const getUserById = async (req,res) => {
    try {
        const id = parseInt(req.params.id)

        const connection = await newConnection();

        const sql = `SELECT * FROM users WHERE id = ?`;

        const [searchUser] = await connection.query(sql, id);

        if(!searchUser[0]) {
            return res.status(400).json({
                msg: 'El usuario no existe'
            })
        } else {
            res.status(200).json(searchUser[0])
        }


    } catch (error) {
        console.error(error)
        return res.status(500).json({msg: 'Error interno del servidor', error})
    }
}

export const uptadeUser = async (req,res) => {
    try {

        const id = parseInt(req.params.id)
        const { name, lastname, username, email, password  } = req.body

        const connection = await newConnection();

        const sql = `SELECT * FROM users WHERE id = ?`;

        const [searchUser] = await connection.query(sql, id);

        if(!searchUser[0]) {
            return res.status(400).json({
                msg: 'El usuario no existe'
            })
        }

        await connection.query(`UPDATE users SET name = ?, lastname = ?, username = ?, email = ?, password = ? WHERE id = ?`, [name, lastname, username, email, password, id])

        res.status(201).json({
            id: id,
            name,
            lastname,
            username,
            email,
            password
        })


    } catch (error) {
        console.error(error)
        return res.status(500).json({msg: 'Error interno del servidor', error})
    }
}

export const deleteUser = async (req,res) => {
    try {
        const id = parseInt(req.params.id);

        const connection = await newConnection();

        const [result] = await connection.query('SELECT * FROM users WHERE id = ?', [id]);
    
        if (result.length === 0) {
            return res.status(404).json( { msg: 'usuario no encontrado' });
        };

        await connection.query(`
            DELETE FROM users WHERE id = ?`, [id]
        );

        res.status(200).json({ msg: 'usuario eliminado' })

        connection.end();
    } catch (error) {
        console.error();
        return res.status(500).json({ msg: 'Error interno del servidor', error })
    }
}