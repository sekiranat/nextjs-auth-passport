import Local from 'passport-local'
import {
  findUser,
  validatePassword
} from './user'

export const localStrategy = new Local.Strategy({
  usernameField: 'email'
}, function (
  email,
  password,
  done
) {
  findUser({
      email
    })
    .then((user) => {
      if (user && validatePassword(user, password)) {
        delete user['hash']
        delete user['salt']
        done(null, user)
      } else {
        done(new Error('Invalid username and password combination'))
      }
    })
    .catch((error) => {
      done(error)
    })
})