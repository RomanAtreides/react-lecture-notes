import { NoteApi } from "../api/noteApi";

export const NoteService = {
    setNotes(notes) {
        NoteApi.setNotes(notes);
        return notes;
    },

    getNotes() {
        const newNotes = NoteApi.getNotes();
        return newNotes ? newNotes : [];
    },

    verify(note) {
        if (!note.title || note.title[0] === "A") {
            return false;
        }
        return true;
    },
};
