import crypto from 'crypto'
import {
  getLoginSession
} from './auth'

import {
  dbUser
} from "@/db/index.js"


/**
 * User methods. The example doesn't contain a DB, but for real applications you must use a
 * db here, such as MongoDB, Fauna, SQL, etc.
 */

// Here you should lookup for the user in your DB
export async function findUser({
  email
}) {
  // This is an in memory store for users, there is no data persistence without a proper DB
  return await dbUser.findUser(email)
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex')
  const passwordsMatch = user.hash === inputHash
  return passwordsMatch
}

export async function checkUserCookie({
  req
}) {

  const session = await getLoginSession(req)
  const user = (session && (await findUser(session)))
  return user
}