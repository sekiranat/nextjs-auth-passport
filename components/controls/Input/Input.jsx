import style from './style.module.scss'

export const Input = ({ placeholder = null, label = null, name = '', onChange }) => {

    return (
        <div className={style.form__field}>
            <label htmlFor={name}>{label}</label>
            <input onChange={onChange} name={name} placeholder={placeholder} type="text" />
        </div>
    )
}