import crypto from 'crypto'

import {
    dbUser
} from '@/db/index'

export default async function signup(req, res) {
    try {
        const {
            email,
            password
        } = req.body

        const salt = crypto.randomBytes(16).toString('hex')

        const hashPassword = crypto
            .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
            .toString('hex')

        const model = {
            email: email,
            hashPassword,
            salt
        }

        dbUser.createUser(model)

        res.status(200).send({
            done: true
        })

    } catch (error) {
        console.error(error)
        res.status(500).end(error.message)
    }
}