import React from "react";
import { Main } from "./pages/Main/MainPage";
import { NoteProvider } from "./contexts/Note/Provider";

/*
 * React позволяет создавать отдельные компоненты в одном файле.
 * Иногда так делают, если не хотят выносить близкий по смыслу компонент в отдельный файл.
 */
function App() {
    return (
        <NoteProvider>
            <Main />
        </NoteProvider>
    );
}

export default App;
