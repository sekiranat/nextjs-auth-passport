import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useUser } from "libs/auth/hooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from './style.module.scss'
import Head from 'next/head'
import { setUser } from '@/containers/User/userSlice'

import { UserHeaderProfile } from '@/components/UserHeaderProfile'

export const Header = ({ title }) => {

    const dispatch = useDispatch()
    const user = useUser({ redirectTo: '/', redirectIfFound: false })

    useEffect(() => {
        dispatch(setUser(user))
    })

    return (
        <>
            <Head >
                <title>{title}</title>
            </Head>

            <div className={styles.header}>
                <div className={styles.container}>

                    {user &&
                        <UserHeaderProfile user={user} />
                    }

                    {!user &&
                        <div className={styles.menu}>
                            <a href="/register">Register</a>
                            <a href="/login">Login</a>
                        </div>
                    }
                </div>
            </div>

            <ToastContainer autoClose={4000} />
        </>
    )
}