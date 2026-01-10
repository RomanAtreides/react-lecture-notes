import React from "react";
import { useParams } from "react-router";
import { Note } from "../../components/Note/Note";
import { useStore } from "../../store";

export const NotePage = () => {
    const params = useParams();
    const notes = useStore((store) => store.notes);
    const note = notes.find(({ id }) => id === params.noteId);

    return (
        <div>
            <Note {...note} />
        </div>
    );
};
