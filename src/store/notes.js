import { create } from 'zustand';

const useNotesStore = create((set) => ({
  notes: [
    { title: 'First Note', notes: 'This is the content of the first note.', archived: false },
    { title: 'Second Note', notes: 'This is an archived note.', archived: true },
    { title: 'Third Note', notes: 'This is another active note yeah.', archived: false },
  ],
  addNote: (note) => set((state) => ({
    notes: [...state.notes, { ...note, archived: false }],
  })),
  deleteNote: (index) => set((state) => ({
    notes: state.notes.filter((_, i) => i !== index),
  })),
  toggleArchiveNote: (index) => set((state) => ({
    notes: state.notes.map((note, i) =>
      i === index ? { ...note, archived: !note.archived } : note
    ),
  })),
}));

export default useNotesStore;
