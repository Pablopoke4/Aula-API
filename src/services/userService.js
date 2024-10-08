const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');

const SECRET_KEY = 'sua_chave_secreta';

class UserService{
    async register(username, password){
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userRepository.createUser({ username, password: hashedPassword });
        return user;
    }
}


module.exports = new UserService();