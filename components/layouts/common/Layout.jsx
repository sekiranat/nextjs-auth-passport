import styles from './style.module.scss'

export const Layout = ({ children }) => (
    <div className={styles.wrap}>
        <div>{children}</div>
    </div>
);