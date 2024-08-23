import { newConnection } from "../src/database/db.js";
import { faker } from '@faker-js/faker';

const insertUserFalse = async (connection) => {
    const username = faker.internet.userName();
    const contrasenia = faker.internet.password();
    const email = faker.internet.email();

    const query = `INSERT INTO usuarios (username, contrasenia, email) VALUES (?,?,?)`;

    return new Promise((resolve, reject) => {
        connection.query(query, [username, contrasenia, email], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results.insertId);
            }
        });
    });
};

const insertarUsuarios = async () => {
    const connection = await newConnection();
    console.time('insertarUsuarios');

    const promesas = [];
    for (let i = 0; i < 21; i++) {
        promesas.push(insertUserFalse(connection));
    }

    try {
        await Promise.all(promesas);
        console.log('Inserción de 1000 usuarios completada.');
    } catch (err) {
        console.error('Error durante la inserción:', err);
    } finally {
        connection.end();
        console.timeEnd('insertarUsuarios');
    }
};

insertarUsuarios();
