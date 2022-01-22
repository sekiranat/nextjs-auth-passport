import {
    getDB
} from '../db';

import {
    userModel
} from './model/userModel.';

const {
    db
} = getDB();

export class User {
    async createUser({
        email,
        hashPassword,
        salt
    }) {
        await db.none('INSERT INTO users(id, email, hash, salt) VALUES(DEFAULT, ${email}, ${hashPassword}, ${salt})', {
            email,
            hashPassword,
            salt
        });
    }

    async findUser(email) {
        const user = await db.one('SELECT * FROM users WHERE email = ${email}', {
            email
        });
        return userModel.formatOne(user)
    }
}