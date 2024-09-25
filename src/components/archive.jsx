import { Button } from "@nextui-org/react";

// eslint-disable-next-line react/prop-types
export default function ArchiveNotes({ title, notes, onClick,unArchive  }) {
  return (
    <div className="p-4 bg-white rounded-xl shadow-lg"> {/* Increased width and padding */}
      <h5 className="text-xl font-semibold text-gray-900 mb-4">{title}</h5> {/* Increased font size and margin */}
      <div className="text-gray-700 mb-6 "> {/* Added margin for spacing */}
        <p>{notes}</p>
      </div>
      <div className="flex gap-2">
        <Button
          onClick={unArchive}
          auto 
          color="primary"
          variant="ghost"
          className="w-full transition-transform duration-200 transform hover:scale-500">
          Unarchive
        </Button>
        <Button
          onClick={onClick}
          auto 
          className="w-full transition-transform duration-200 transform hover:scale-500"
          variant="ghost"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
