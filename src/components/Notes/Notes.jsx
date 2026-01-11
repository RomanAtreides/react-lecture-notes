import { useCallback, useMemo, useState } from "react";
import { Search } from "../Search/Search";
import { TagsList } from "../TagsList/TagsList";
import { NotesList } from "../NotesList/NotesList";
import { useStore } from "../../store";

export function Notes() {
    const [searchQuery, setSearchQuery] = useState("");
    const notes = useStore((store) => store.notes);

    const filteredNotes = useMemo(
        () =>
            notes.filter(
                (note) =>
                    note.title.toLowerCase().includes(searchQuery.toLowerCase()) || note.tags.includes(searchQuery)
            ),
        [searchQuery, notes]
    );
    const tags = useMemo(() => [...new Set(notes.reduce((acc, note) => acc.concat(note.tags), []))], [notes]);

    const onTagClick = useCallback((tag) => setSearchQuery(tag), [setSearchQuery]);

    return (
        <>
            <Search value={searchQuery} onChange={setSearchQuery} />
            <TagsList tags={tags} onTagClick={onTagClick} />
            <NotesList notes={filteredNotes} />
        </>
    );
}
