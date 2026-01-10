const STORAGE_KEY = "notes";

export const NoteService = {
    setNotes(notes) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
        return notes;
    },

    getNotes() {
        const newNotes = JSON.parse(localStorage.getItem(STORAGE_KEY));
        return newNotes ? newNotes : [];
    },

    verify(note) {
        if (!note.title || note.title[0] === "A") {
            return false;
        }
        return true;
    },
};
