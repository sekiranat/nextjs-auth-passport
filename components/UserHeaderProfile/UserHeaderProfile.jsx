import { useSelector } from 'react-redux'

export const UserHeaderProfile = ({ user }) => {

    return (
        <>
            <div className="user">
                {user.email}
                <div>
                    <a href="/api/user/logout">Logout</a>
                </div>
            </div>
        </>
    );
}

