import { checkUserCookie } from 'libs/auth/user';
import { loginRedirect, nullProps } from '@/constants/index'

import { useSelector } from 'react-redux';
import { Header } from '@/containers/Header'


const ProfilePage = () => {

  const user = useSelector(state => state.user)

  return (

    <>

      <Header title='profile' />

      <h1>Profile</h1>
      {user && (
        <>
          <p>Your session:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}

    </>
  )
}

export default ProfilePage

export async function getServerSideProps(req) {
  const user = await checkUserCookie(req)

  return !user ? loginRedirect : nullProps

}