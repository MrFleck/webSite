import jwt from 'jsonwebtoken';

const JWT_OPT = {
    issuer: 'goalled',
    expiresIn: '24h'
}


const createToken = (user) => {
    if (!user) {
        return null;
    }
    return jwt.sign({ id: user.id, name: user.name, email: user.email }, process.env.SECRET, JWT_OPT)
}

const decode = (token) => {
    let decoded = jwt.decode(token);
    return decoded;
}

const verifyToken = (token) => {
    return jwt.verify(token, process.env.SECRET, JWT_OPT);
}

const getTokenFromHeaders = (token) => {
    if (token) {
        const arr = token.split(' ');
        if (arr[0] === 'Bearer' && arr[1]) {
            try {
                return verifyToken(arr[1])
            } catch (error) {
                return null
            }
        }
    }

    return null
}

const returnToken = (req) => {
    const token = req.headers.authorization;
    if (token) {
        const arr = token.split(' ');
        if (arr[0] === 'Bearer' && arr[1]) {
            try {
                return arr[1]
            } catch (error) {
                return null
            }
        }
    }
    return null
}

module.exports = {
    createToken,
    verifyToken,
    getTokenFromHeaders,
    decode,
    returnToken
}