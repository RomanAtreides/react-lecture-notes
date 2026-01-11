import React from "react";
import { Main } from "./pages/Main/MainPage";
import { BrowserRouter, Route, Routes } from "react-router";
import { NotePage } from "./pages/Note/NotePage";

/*
 * React позволяет создавать отдельные компоненты в одном файле.
 * Иногда так делают, если не хотят выносить близкий по смыслу компонент в отдельный файл.
 */
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />} />
                <Route path="note/:noteId" element={<NotePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
