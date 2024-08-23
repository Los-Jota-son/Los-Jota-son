import { createConnection } from "mysql2/promise";

export const newConnection = async () => {
    try {
        return await createConnection({
            host:'localhost',
            user: 'root',
            password: '',
            database: 'hackaton'
    })
    } catch (error) {
        console.error('Error de conexión a la base de datos');
    }
    
}