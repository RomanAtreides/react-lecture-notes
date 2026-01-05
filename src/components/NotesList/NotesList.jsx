import { Note } from "../Note/Note";
import styles from "./NotesList.module.css";

export const NotesList = function ({ notes, setNotes }) {
    return (
        <div className={styles.notesList}>
            {notes.map((note) => (
                <Note
                    title={note.title}
                    content={note.content}
                    tags={note.tags}
                    key={note.id}
                    onDelete={() => {
                        setNotes(notes.filter((currentNote) => currentNote.id !== note.id));
                    }}
                />
            ))}
        </div>
    );
};
