export * from './messages'

export const loginRedirect = {
    redirect: {
        permanent: false,
        destination: "/login",
    }
}

export const dashboardRedirect = {
    redirect: {
        permanent: false,
        destination: "/dashboard",
    }
}

export const nullProps = {
    props: {}
}