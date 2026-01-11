import { create } from "zustand";
import { createNoteSlice } from "./note";

export const useStore = create((...stateTools) => ({
    ...createNoteSlice(...stateTools),
}));
