import { checkUserCookie } from 'libs/auth/user';
import { dashboardRedirect, nullProps } from '@/constants/index'

import { Header } from '@/containers/Header'

import { LayoutThin } from '@/components/layouts/thin'
import { MainTitle } from '@/components/titles'
import { RegisterForm } from '@/containers/forms/RegisterForm'


function RegisterPage() {

    return (
        <>
            <Header />

            <LayoutThin>
                <MainTitle
                    text="Registration"
                />
                <RegisterForm />
            </LayoutThin>
        </>
    )
}

export default RegisterPage

export async function getServerSideProps(req) {
    const user = await checkUserCookie(req)

    return user ? dashboardRedirect : nullProps
}