import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
}

export default function CardItem({ title, description, image }: Props) {
  return (
    <div className="card">
      <Image className="card-image" src={require("@/assets/images/" + image)} alt={title} />
      <div className="card-title">
        <label>{title}</label>
      </div>
      <div className="card-desc">
        <label>{description}</label>
      </div>
    </div>
  );
}
