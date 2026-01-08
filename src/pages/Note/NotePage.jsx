import React, { useContext } from "react";
import { useParams } from "react-router";
import { NotesContext } from "../../contexts/Note/context";
import { Note } from "../../components/Note/Note";

export const NotePage = () => {
    const params = useParams();
    const { notes } = useContext(NotesContext);
    const note = notes.find(({ id }) => id === params.noteId);
    console.log(note);
    return (
        <div>
            <Note {...note} />
        </div>
    );
};
