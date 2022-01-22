import { useDispatch } from 'react-redux';

import { Input } from '@/components/controls/Input';
import { Button } from '@/components/btns/common/Btn';

import {
    changeData,
    fetchLogin
} from './loginFormSlice';

export const LoginForm = () => {

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        dispatch(changeData({ name, value }))
    }

    return (
        <div className="form form-login">
            <Input
                onChange={(e) => handleChange(e)}
                label='Email'
                name='email'
            />
            <Input
                onChange={(e) => handleChange(e)}
                label='Password'
                name='password'
            />
            <div className="form-login_btn">
                <Button
                    onClick={() => dispatch(fetchLogin())}
                    text='Отправить'
                    wide
                />
            </div>

            <style jsx>{`
                .form-login_btn {
                    margin-top: 20px;
                }
            `}</style>
        </div>
    );
}

