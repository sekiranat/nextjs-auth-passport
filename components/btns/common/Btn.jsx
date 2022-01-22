import styles from './btn.module.scss'

export const Button = ({ text, wide = false, onClick }) => {

    const className = wide ? styles.btn_wide : styles.btn

    return (
        <div onClick={onClick} className={className}>
            {text}
        </div>
    )
}