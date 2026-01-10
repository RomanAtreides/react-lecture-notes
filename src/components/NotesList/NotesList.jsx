import { Note } from "../Note/Note";
import styles from "./NotesList.module.css";

export const NotesList = function ({ notes }) {
    return (
        <div className={styles.notesList}>
            {notes.map((note) => (
                <Note id={note.id} title={note.title} content={note.content} tags={note.tags} key={note.id} />
            ))}
        </div>
    );
};
