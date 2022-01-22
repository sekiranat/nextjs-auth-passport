import { useDispatch } from 'react-redux';

import { Input } from '@/components/controls/Input';
import { Button } from '@/components/btns/common/Btn';
import style from './registerForm.module.css'

import { fetchRegister, changeData } from './registerFormSlice';

export const RegisterForm = () => {

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        dispatch(changeData({ name, value }))
    }

    return (
        <form className={style.formRegister}>
            <Input
                onChange={(e) => handleChange(e)}
                label='Email'
                name='email'
            />
            <Input
                onChange={(e) => handleChange(e)}
                label='Password'
                name="password"
            />
            <Input
                onChange={(e) => handleChange(e)}
                label='Repeat password'
                name='repeat_password'
            />
            <div className="form-register_btn">
                <Button
                    onClick={() => dispatch(fetchRegister())}
                    text='Отправить'
                    wide
                />
            </div>

            <style jsx>{`
                .form-register_btn {
                    margin-top: 20px;
                }
            `}</style>

        </form>
    );
}

