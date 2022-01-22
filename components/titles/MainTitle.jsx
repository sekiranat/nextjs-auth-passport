import styles from './style.module.scss'

export const MainTitle = ({ text, left = false }) => {

    const className = left ? styles.titleLeft : styles.title

    return (
        <h1 className={className}>
            {text}
        </h1>
    )
}