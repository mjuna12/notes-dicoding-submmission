import { create } from "zustand";

const useNotesStore = create((set) => ({
  notes: [],
  addNote: (note) => set((state) => ({notes: [...state.notes, note]})),
  deleteNote: (index) => set((state) => ({
    notes: state.notes.filter((_, i) => i !== index)
  }))
}))

export default useNotesStore;