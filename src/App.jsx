import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { NotesList } from "./components/NotesList/NotesList";
import { NotesForm } from "./components/NotesForm/NotesForm";
import { Search } from "./components/Search/Search";
import { TagsList } from "./components/TagsList/TagsList";

const LOCAL_STORAGE_KEY = "notes";

const NotesContext = createContext();

function Notes() {
    const { notes, setNotes } = useContext(NotesContext);
    const [searchQuery, setSearchQuery] = useState("");
    const filteredNotes = notes.filter(
        (note) => note.title.toLowerCase().includes(searchQuery.toLowerCase()) || note.tags.includes(searchQuery)
    );
    const uniqueTags = useMemo(() => [...new Set(notes.reduce((acc, note) => acc.concat(note.tags), []))], [notes]);

    const onTagClick = useCallback(
        (tag) => {
            setSearchQuery(tag);
        },
        [setSearchQuery]
    );

    return (
        <>
            <Search value={searchQuery} onChange={setSearchQuery} />
            {Boolean(uniqueTags.length) && <TagsList tags={uniqueTags} onTagClick={onTagClick} />}
            {Boolean(filteredNotes.length) && <NotesList notes={filteredNotes} setNotes={setNotes} />}
        </>
    );
}

/*
 * Main - это отдельный компонент. React позволяет создавать отдельные компоненты в одном файле.
 * Иногда так делают, если не хотят выносить близкий по смыслу компонент в отдельный файл.
 */
function Main() {
    const { notes, setNotes } = useContext(NotesContext);

    const onAddNote = useCallback(
        (note) => {
            setNotes([...notes, note]); // Спред оператор.
        },
        [notes, setNotes]
    );

    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <Header notesCount={notes.length} />
                <NotesForm onAddNote={onAddNote} />
                <Notes />
            </div>
        </div>
    );
}

function App() {
    /*
     * useState() - это хук, который позволяет работать с состоянием.
     * Хук - это JS-функция, которая возвращает кортеж из двух элементов.
     * Первый элемент - это значение, а второй элемент - это setter для этого значения.
     * Также первым параметром useState() принимает, какое-то дефолтное значение.
     */
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem(LOCAL_STORAGE_KEY);
        return savedNotes ? JSON.parse(savedNotes) : [];
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
    }, [notes]);

    return (
        <NotesContext.Provider value={{ notes, setNotes }}>
            <Main />
        </NotesContext.Provider>
    );
}

export default App;
