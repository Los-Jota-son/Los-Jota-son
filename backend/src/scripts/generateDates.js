import { newConnection } from "../database/db.js";

import { faker }  from '@faker-js/faker';

const insertUserFalse = async () => {

    const connection = await newConnection()
    const name = faker.name.firstName();
    const lastname = faker.name.lastName();
    const username = faker.internet.userName(name, lastname);
    const email = faker.internet.email(name, lastname)
    const password = faker.internet.password();

    const query = `INSERT INTO users (name, lastname, username, email, password) VALUES (?,?,?,?,?)`

    return new Promise((resolve, rejecet) => {
        connection.query(query, [name, lastname, username, email, password], (err, results) => {
            if (err) {
                rejecet(err)
            } else {
                resolve(results.insertId)
            }
        })
    })
}

const insertarUsuarios = async () => {

    const connection = await newConnection()
    console.time('insertarUsuarios');

    const promesas = [];
    for (let i = 0; i < 92; i++) {
        promesas.push(insertUserFalse());
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