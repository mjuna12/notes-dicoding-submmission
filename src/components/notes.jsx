import { Button } from "@nextui-org/react";
import { Input, Textarea } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Modals from "./moda;";

function Notes() {
  const { register, handleSubmit,reset ,formState: { errors } } = useForm();
  const [formData, setFormData] = useState([])

  const onSubmit = (data) => {
    setFormData((prevNotes)=>[...prevNotes, data])
    console.log("Form Submitted : ",data);
    reset()
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
            {...register("notes", { required: "Notes is Required"})}
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
      <Modals/>
      {formData.length > 0 && (
        <div className="mt-6 w-full max-w-lg">
          <h2 className="text-xl font-bold mb-4">Saved Notes:</h2>
          <ul>
            {formData.map((note, index) => (
              <li key={index} className="mb-4 p-4 bg-white shadow rounded">
                <p><strong>Title:</strong> {note.title}</p>
                <p><strong>Notes:</strong> {note.notes}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </div>
  );
}

export default Notes;
