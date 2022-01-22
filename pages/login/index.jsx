import { checkUserCookie } from 'libs/auth/user';
import { Header } from '@/containers/Header'
import { LayoutThin } from '@/components/layouts/thin'
import { MainTitle } from '@/components/titles'
import { LoginForm } from '@/containers/forms/LoginForm'
import { dashboardRedirect, nullProps } from '@/constants/index'


function LoginPage() {

    return (
        <div>
            <Header title='login' />
            <LayoutThin>
                <MainTitle
                    text="Login"
                />
                <LoginForm />
            </LayoutThin>
        </div>
    )
}

export default LoginPage

export async function getServerSideProps(req) {
    const user = await checkUserCookie(req)

    return user ? dashboardRedirect : nullProps

}

