import { create } from 'zustand';
import { getInitialData } from './initialdata';

const useNotesStore = create((set) => ({
  notes: getInitialData(),
  addNote: (note) => set((state) => ({
    notes: [...state.notes, { ...note, id: Date.now().toString(), archived: false, createdAt: new Date().toISOString() }], // Tambahkan ID unik dan createdAt
  })),
  deleteNote: (id) => set((state) => ({
    notes: state.notes.filter((note) => note.id !== id), // Ganti index dengan id
  })),
  archiveNote: (id) => set((state) => ({
    notes: state.notes.map((note) =>
      note.id === id ? { ...note, archived: true } : note
    ),
  })),
  unarchiveNote: (id) => set((state) => ({
    notes: state.notes.map((note) =>
      note.id === id ? { ...note, archived: false } : note
    ),
  })),
}));

export default useNotesStore;