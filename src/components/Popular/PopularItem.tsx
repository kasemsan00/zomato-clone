interface Props {
  title: string;
  description: string;
}

export default function PopularItem({ title, description }: Props) {
  return (
    <>
      <div className="popular-item">
        <div className="popular-item-title">{title}</div>
        <div className="popular-item-desc">{description}</div>
      </div>
    </>
  );
}
