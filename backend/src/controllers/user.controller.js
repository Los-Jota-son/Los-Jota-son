import { newConnection } from "../database/db.js";
import {hashSync, compareSync} from 'bcrypt';
import { generarJWT } from "../helpers/generarJWT.js";

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

export const register = async (req,res) => {
    try {

        const { name, lastname, username, email, password } = req.body;

        const connection = await newConnection();

        const sql = `INSERT INTO users (name, lastname, username, email, password) VALUES (?,?,?,?,?)`;

            const hashPassword = hashSync(password, 10)

            await connection.query(sql, 
                [name, 
                lastname, 
                username,
                email, 
                hashPassword])

            res.status(201).json({msg: 'Registrado correctamente'})

            connection.end()
    } catch (error) {
        console.error(error)
        return res.status(500).json({msg: 'Error interno del servidor', error})
    }
    
}

export const login = async (req,res) => {
    try {
        const { username, password } = req.body;

        const connection = await newConnection();

        const sql = `SELECT * FROM users WHERE username =?`;

        const [searchUser] = await connection.query(sql, username);

        if(!searchUser[0]) {
            return res.status(400).json({
                msg: 'El usuario no existe'
            })
        }

        const valPassword = compareSync(password, searchUser[0].password)

        if(!valPassword) {
            return res.status(401).json({
                msg: 'El usuario o contraseña no coinciden'
            })
        }

        connection.end()
   
    const token = await generarJWT({ id: searchUser[0].id })

    return res.json({
        msg: 'inicio de sesión exitoso',
        token,
    })

} catch (error) {
    console.error(error)
    return res.status(500).json({msg: 'Error interno del servidor', error})
    
}

};

export const uptadeUser = async (req,res) => {
    try {
        const { username, password } = req.body

        const connection = await newConnection();

        const sql = `SELECT * FROM users WHERE username = ?`;

        const [searchUser] = await connection.query(sql, username);

        if(!searchUser[0]) {
            return res.status(400).json({
                msg: 'El usuario no existe'
            })
        }


    } catch (error) {
        
    }
}
