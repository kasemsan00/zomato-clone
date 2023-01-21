import CardItem from "@/components/Card/CardItem";

export default function Card() {
  return (
    <>
      <CardItem
        title={"Order Online"}
        description={"Stay home and order to your doorstep"}
        image={"card1.png"}
      />
      <CardItem
        title={"Dining"}
        description={"View the city's favourite dining venues"}
        image={"card2.png"}
      />
    </>
  );
}
