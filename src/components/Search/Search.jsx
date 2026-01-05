import styles from "./Search.module.css";

export const Search = function Search({ value, onChange }) {
    return (
        <input
            type="text"
            className={styles.search}
            placeholder="Поиск заметок"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};
