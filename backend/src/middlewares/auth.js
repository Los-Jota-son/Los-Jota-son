import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ msg: 'No se proporcionó un token' });
    }

    try {
        const decoded = jwt.verify(token, 'my_secret');
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ msg: 'Token no válido', error });
    }
};