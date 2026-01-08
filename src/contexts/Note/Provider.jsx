import React, { useEffect, useState } from "react";
import { NotesContext } from "./context";
import { NoteService } from "../../services/note";

export const NoteProvider = ({ children }) => {
    /*
     * useState() - это хук, который позволяет работать с состоянием.
     * Хук - это JS-функция, которая возвращает кортеж из двух элементов.
     * Первый элемент - это значение, а второй элемент - это setter для этого значения.
     * Также первым параметром useState() принимает, какое-то дефолтное значение.
     */
    const [notes, setNotes] = useState(() => NoteService.getNotes());

    useEffect(() => NoteService.setNotes(notes), [notes]);

    return <NotesContext.Provider value={{ notes, setNotes }}>{children}</NotesContext.Provider>;
};
