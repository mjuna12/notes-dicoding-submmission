import { Button } from "@nextui-org/react";
import { Input, Textarea } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import useNotesStore from "../store/notes";
import SavedNotes from "./card";


function Notes() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { notes, addNote, deleteNote } = useNotesStore();

  const onSubmit = (data) => {
    addNote(data)
    reset();
  };

  const handleDelete = (index) => {
    deleteNote(index)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
        <div className="mb-4">
          <Input
            type="text"
            name="title"
            label="Title"
            {...register("title", { required: "Title is required" })}
            className="w-full"
          />
          {errors.title && <span className="text-red-500">{errors.title.message}</span>}
        </div>
        <div className="mb-6">
          <Textarea
            label="Notes"
            {...register("notes", { required: "Notes are required" })}
            name="notes"
            className="w-full"
          />
          {errors.notes && <span className="text-red-500">{errors.notes.message}</span>}
        </div>

        <div className="mb-6">
          <Button color="primary" size="lg" type="submit" className="w-full">
            Add Notes
          </Button>
        </div>
      </form>
      <div>
      </div>
      {notes.length > 0 && (
  <div className="mt-6 w-full max-w-lg">
    <h2 className="text-xl font-bold mb-4">Saved Notes:</h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {notes.map((note, index) => (
        <li key={index} className="flex flex-col mb-4">
          <SavedNotes title={note.title} content={note.notes} onClick={() => handleDelete(index)} />
        </li>
      ))}
    </ul>
  </div>
)}


    </div>
  );
}
export default Notes;
