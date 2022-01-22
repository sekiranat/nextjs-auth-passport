import styles from './style.module.scss'

export const LayoutThin = ({ children }) => (
    <div className={styles.wrap}>
        <div>{children}</div>
    </div>
);