import { NoteService } from "../../services/note";

export const createNoteSlice = (set, ...tools) => ({
    notes: NoteService.getNotes(),
    addNote: (note) => {
        const updatedNotes = [...NoteService.getNotes(), note];
        const newNotes = NoteService.setNotes(updatedNotes);
        set({ notes: newNotes });
    },
});
