import {Card, CardBody, CardFooter, Divider} from "@nextui-org/react";

function CardResult(){
  return(
    <>
    <Card className="max-w-[400px]">
      <Divider/>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
          Visit source code on GitHub.
      </CardFooter>
    </Card>
    </>
  )
}

export default CardResult