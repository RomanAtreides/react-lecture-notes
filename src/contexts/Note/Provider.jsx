import React, { useEffect, useState } from "react";
import { NotesContext } from "./context";

const STORAGE_KEY = "notes";

export const NoteProvider = ({ children, storageKey = STORAGE_KEY }) => {
    /*
     * useState() - это хук, который позволяет работать с состоянием.
     * Хук - это JS-функция, которая возвращает кортеж из двух элементов.
     * Первый элемент - это значение, а второй элемент - это setter для этого значения.
     * Также первым параметром useState() принимает, какое-то дефолтное значение.
     */
    const [notes, setNotes] = useState(() => {
        const newNotes = JSON.parse(localStorage.getItem(storageKey));
        return newNotes ? newNotes : [];
    });

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(notes));
    }, [notes, storageKey]);

    return <NotesContext.Provider value={{ notes, setNotes }}>{children}</NotesContext.Provider>;
};
