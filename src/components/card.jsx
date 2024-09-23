import {Card, CardFooter, Image, Button} from "@nextui-org/react";

// eslint-disable-next-line react/prop-types
export default function SavedNotes({title, notes, onClick}) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
      >
      <p className="text-md flex justify-center font-semibold capitalize pt-2">{title}</p>
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="https://nextui.org/images/hero-card.jpeg"  
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-sm">{notes}</p>

        <Button className="text-tiny" variant="solid" color="danger" radius="lg" size="sm" onClick={onClick}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}