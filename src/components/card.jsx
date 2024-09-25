import { Button } from "@nextui-org/react";

// eslint-disable-next-line react/prop-types
export default function SavedNotes({ title, notes, onClick,onArchive  }) {
  return (
    <div className="p-4 bg-white rounded-xl shadow-lg overflow-hidden"> {/* Tambahkan overflow-hidden */}
      <h5 className="text-xl font-semibold text-gray-900 mb-4">{title}</h5>
      <div className="text-gray-700 mb-6 ">
        <p>{notes}</p>
      </div>
      <div className="flex gap-2">
      <Button
        onClick={onArchive}
        auto 
        color="primary"
        variant="ghost"
        className="w-full">
        Archive
      </Button>
      <Button
        onClick={onClick}
        auto 
        className="w-full"
        variant="ghost"
      >
        Delete
      </Button>
      </div>
    </div>
  );
}
