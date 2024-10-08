import { newConnection } from '../database/db.js';
import { hashSync, compareSync } from 'bcrypt';
import { generarJWT } from '../helpers/generarJWT.js';


export const register = async (req, res) => {
    const { username, contrasenia, email } = req.body;

    const connection = await newConnection();

    const verificarUser = 'SELECT * FROM usuarios WHERE username = ? LIMIT 1'
    const [userExists] = await connection.query(verificarUser, [username]);

    if (userExists.length > 0) {
        return res.status(400).json({
            msg: 'El nombre de usuario ya existe'
            })
        }

    const sql = 'INSERT INTO usuarios (username, contrasenia, email) VALUES (?,?,?)';

    const hashContrasenia = hashSync(contrasenia, 10);

    await connection.query(sql, [username, hashContrasenia, email]);

    res.json({
        msg: 'Registrado correctamente'
    });
    connection.end()
}

export const login = async (req,res) => {
    const { username, contrasenia} = req.body;

    const connection = await newConnection();

    const sql = 'SELECT * FROM usuarios where username=? LIMIT 1';

    const [buscarUsuario] = await connection.query(sql, username);

    if(!buscarUsuario[0]) {
        return res.status(400).json({
            msg: 'El usuario no existe'
        })
    }
    const validarContrasenia = compareSync(contrasenia, buscarUsuario[0].contrasenia);

    if(!validarContrasenia) {
        return res.status(401).json({
            msg: 'El usuario o contraseña no coinciden'
        })
    }

    const token = await generarJWT({id_usuario: buscarUsuario[0].id_usuario});
    return res.json({
        msg: 'Inicio de sesión exitoso',
        token
    })
}