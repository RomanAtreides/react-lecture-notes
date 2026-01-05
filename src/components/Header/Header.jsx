import styles from "./Header.module.css";

export const Header = ({ notesCount }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                <span className={styles.ya}>Я</span>
                <span className={styles.text}>ндекс Заметки</span>
            </h1>
            <div className={styles.notesCount}>
                Всего заметок: <span id="notesCount">{notesCount}</span>
            </div>
        </header>
    );
};
