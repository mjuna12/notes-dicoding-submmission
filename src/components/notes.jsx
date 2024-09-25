import { Button } from "@nextui-org/react";
import { Input, Textarea } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import useNotesStore from "../store/notes";
import SavedNotes from "./card";
import ArchiveNotes from "./archive";
import useNotificationStore from "../store/layout";
import Search from "./search";

function Notes() {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const { notes, addNote, deleteNote, archiveNote, unarchiveNote } = useNotesStore();

  const { addNotification } = useNotificationStore()
  const maxCharacters = 150;
  const maxTitleCharacters = 20
  const notesValue = watch("notes", "");
  const titleValue = watch("title", "");


  const onSubmit = (data) => {
    addNote(data);
    reset();
  };

  const handleDelete = (id) => { 
    deleteNote(id);
    addNotification("Note deleted successfully", "success"); 
  };

  const handleArchive = (id) => { 
    archiveNote(id);
    addNotification("Note archived successfully", "info");
  };

  const handleUnarchive = (id) => { 
    unarchiveNote(id);
    addNotification("Note unarchived successfully", "info");
  };

  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-lg rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">My Notes</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="mb-4">
            <Input
              color="primary"
              type="text"
              name="title"
              label="Title"
              onInput={(e) => {
                if (e.target.value.length > maxTitleCharacters) {
                  e.target.value = e.target.value.slice(0, maxTitleCharacters); 
                }
              }}
              {...register("title", { required: "Title is required", 
                maxLength: {
                  value: 20,
                  message: "Notes must be at least 20 characters long",
                },
               })}
              className="w-full text-white transition-transform duration-200 transform hover:scale-105"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">
                {errors.title.message}
              </span>
            )}
            <p className="text-sm text-gray-500">
              {maxTitleCharacters - titleValue.length} characters left
            </p>
          </div>
          <div className="mb-6">
            <Textarea
              color="primary"
              label="Notes"
              onInput={(e) => {
                if (e.target.value.length > maxCharacters) {
                  e.target.value = e.target.value.slice(0, maxCharacters);
                }
              }}
              {...register("notes", {
                required: "Notes are required",
                maxLength: {
                  value: 150,
                  message: "Notes must be at least 150 characters long",
                },
              })}
              name="notes"
              className="w-full text-white transition-transform duration-200 transform hover:scale-105"
            />
            {errors.notes && (
              <span className="text-red-500 text-sm">
                {errors.notes.message}
              </span>
            )}
            <p className="text-sm text-gray-500">
              {maxCharacters - notesValue.length} characters left
            </p>
          </div>
          <Button
            color="primary"
            size="lg"
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white  transition-transform duration-200 transform hover:scale-105"
          >
            Add Notes
          </Button>
        </form>
      </div>
      <h2 className="text-2xl font-bold mt-6">Saved Notes</h2>  
      {activeNotes.length === 0 && (
        <div className="flex items-center justify-center h-64 rounded-lg">
          <p className="text-gray-500 text-lg font-semibold">No active notes available</p>
        </div>
      )}
      {activeNotes.length > 0 && (
        <div className="mt-10 w-full max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {activeNotes.map((note) => ( 
              <SavedNotes
                key={note.id} 
                title={note.title}
                notes={note.notes}
                onClick={() => handleDelete(note.id)} 
                onArchive={() => handleArchive(note.id)} 
                archiveLabel="Archive"
              />
            ))}
          </div>
        </div>
      )}

      {/* Archive Notes */}
      <h2 className="text-2xl font-bold mt-6">Archived Notes</h2>
      {archivedNotes.length === 0 && (
        <div className="flex items-center justify-center h-64 rounded-lg">
          <p className="text-gray-500 text-lg font-semibold">No archived notes available</p>
        </div>
      )}
      {archivedNotes.length > 0 && (
        <div className="mt-10 w-full max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {archivedNotes.map((note) => (
              <ArchiveNotes
                key={note.id}
                title={note.title}
                notes={note.notes}
                onClick={() => handleDelete(note.id)}
                unArchive={() => handleUnarchive(note.id)} 
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Notes;