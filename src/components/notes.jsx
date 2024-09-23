import { Button } from "@nextui-org/react";
import { Input, Textarea } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useNotificationStore from "../store/layout";''; // Import your store

function Notes() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [formData, setFormData] = useState([]);
  const addNotification = useNotificationStore((state) => state.addNotification); // Get the addNotification function

  const onSubmit = (data) => {
    setFormData((prevNotes) => [...prevNotes, data]);
    console.log("Form Submitted: ", data);
    reset();
    addNotification('Note added successfully!', 'success');
  };

  const handleDelete = (index) => {
    setFormData((prevNotes) => prevNotes.filter((_, i) => i !== index));
    addNotification('Note deleted successfully!', 'success');
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
        {formData.length > 0 && (
          <div className="mt-6 w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Saved Notes:</h2>
            <ul>
              {formData.map((note, index) => (
                <li key={index} className="mb-4 p-4 bg-white shadow rounded">
                  <p><strong>Title:</strong> {note.title}</p>
                  <p><strong>Notes:</strong> {note.notes}</p>
                  <Button
                    color="error"
                    auto
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <NotificationList /> {/* Add this component to display notifications */}
    </div>
  );
}

// Component to display notifications
function NotificationList() {
  const notifications = useNotificationStore((state) => state.notifications);
  
  return (
    <div className="fixed top-10 right-10">
      {notifications.map((notif) => (
        <div key={notif.id} className={`p-4 mb-2 rounded ${notif.type === 'success' ? 'bg-green-500' : 'bg-blue-500'} text-white`}>
          {notif.message}
        </div>
      ))}
    </div>
  );
}

export default Notes;
