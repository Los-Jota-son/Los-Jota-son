import mongoose from 'mongoose';

const url = 'mongodb://localhost:27017/users'

export const connecDB = async () => {
    try {
        await mongoose.connect(url);
        console.log('Se conectó a la base de datos', mongoose.connection.name);
        return mongoose.connection;
    } catch (error) {
        console.error('Error de conexión a la base de datos', error);
        
    }
}