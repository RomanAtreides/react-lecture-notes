import React from "react";
import { Main } from "./pages/Main/MainPage";
import { NoteProvider } from "./contexts/Note/Provider";
import { BrowserRouter, Route, Routes } from "react-router";
import { NotePage } from "./pages/Note/NotePage";

/*
 * React позволяет создавать отдельные компоненты в одном файле.
 * Иногда так делают, если не хотят выносить близкий по смыслу компонент в отдельный файл.
 */
function App() {
    return (
        <NoteProvider>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Main />} />
                    <Route path="note/:noteId" element={<NotePage />} />
                </Routes>
            </BrowserRouter>
        </NoteProvider>
    );
}

export default App;
