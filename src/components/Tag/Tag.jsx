import styles from "./Tag.module.css";

export function Tag({ tag, onClick }) {
    return (
        <button className={styles.tag} onClick={onClick}>
            {tag}
        </button>
    );
}
