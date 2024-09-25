import { create } from 'zustand';

const useNotesStore = create((set) => ({
  notes: [
    { id: '1', title: 'First Note', notes: 'This is the content of the first note.', archived: false },
    { id: '2', title: 'Second Note', notes: 'This is an archived note.', archived: true },
    { id: '3', title: 'Third Note', notes: 'This is another active note yeah.', archived: false },
  ],
  addNote: (note) => set((state) => ({
    notes: [...state.notes, { ...note, id: Date.now().toString(), archived: false }], // Tambahkan ID unik
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