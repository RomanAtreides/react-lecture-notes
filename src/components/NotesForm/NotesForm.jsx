import { useState } from "react";
import styles from "./NotesForm.module.css";

export const NotesForm = function NotesForm({ onAddNote }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");
    const [error, setError] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        if (!title.trim()) {
            setError("Необходимо указать заголовок");
            return;
        }
        const note = {
            title,
            content,
            tags: tags.length ? tags.split(",") : [],
            id: Math.trunc(Math.random() * 1000000).toString(),
        };
        onAddNote(note);
        setTitle("");
        setContent("");
        setTags("");
    };

    return (
        <form className={styles.notesForm}>
            <input
                type="text"
                placeholder="Заголовок заметки"
                value={title}
                onChange={(event) => {
                    setTitle(event.target.value);
                    if (error) {
                        setError("");
                    }
                }}
                className={styles.inputField}
            />
            {Boolean(error.length) && <span className={styles.error}>{error}</span>}
            <textarea
                placeholder="Содержание заметки"
                className={`${styles.inputField} ${styles.textarea}`}
                value={content}
                onChange={(event) => {
                    setContent(event.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Теги (через запятую)"
                className={styles.inputField}
                value={tags}
                onChange={(event) => {
                    setTags(event.target.value);
                }}
            />
            <button type="submit" className={styles.button} onClick={onSubmit}>
                Добавить заметку
            </button>
        </form>
    );
};
