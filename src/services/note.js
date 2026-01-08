const STORAGE_KEY = "notes";

export const NoteService = {
    setNotes(notes) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    },

    getNotes() {
        const newNotes = JSON.parse(localStorage.getItem(STORAGE_KEY));
        return newNotes ? newNotes : [];
    },
};
