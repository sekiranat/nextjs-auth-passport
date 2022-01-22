import { checkUserCookie } from 'libs/auth/user';
import { loginRedirect, nullProps } from '@/constants/index'
import { useSelector } from 'react-redux';
import { Header } from '@/containers/Header'


const DashBoardPage = () => {
    const user = useSelector(state => state.user)

    return (
        <>
            <Header title='Dashboard' />
            {user &&
                <div>
                    <h1>{user.email}</h1>
                    {user && (
                        <>
                            <p>Your id:</p>
                            <pre>{user.id}</pre>
                        </>
                    )}
                </div>}

        </>
    )
}

export default DashBoardPage

export async function getServerSideProps(req) {
    const user = await checkUserCookie(req)

    return !user ? loginRedirect : nullProps

}
