import {
    getLoginSession
} from '../../../libs/auth/auth'
import {
    findUser
} from '../../../libs/auth/user'

export default async function user(req, res) {
    try {
        const session = await getLoginSession(req)
        const user = (session && (await findUser(session)))

        if (user) {
            delete user['hash']
            delete user['salt']
            res.status(200).json({
                user
            })
        } else {
            res.status(401).end('Please log in')
        }

    } catch (error) {

        res.status(401).end('error')
    }
}