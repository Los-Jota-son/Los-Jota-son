import express  from 'express';
import  morgan from 'morgan'
import cors from 'cors'
import { authRouter } from './routes/auth.routes.js';
import { postRouter } from './routes/post.routes.js';
import { userRouter } from './routes/user.routes.js';

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(morgan('dev'));
app.use(cors())
app.use(authRouter);
app.use(postRouter);
app.use(userRouter);

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto 3000');
})