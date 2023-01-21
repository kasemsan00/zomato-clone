import { useRef, useState } from "react";

interface Props {
  title: string;
  description: string;
}

export default function ExploreItem({ title, description }: Props) {
  const descRef = useRef<HTMLDivElement>(null);
  const [showDesc, setShowDesc] = useState(false);
  const handleShowDesc = () => {
    if (!showDesc) {
      descRef.current?.classList.remove("hidden");
    }
    if (showDesc) {
      descRef.current?.classList.add("hidden");
    }
    setShowDesc(!showDesc);
  };
  return (
    <div className="explore-item" onClick={handleShowDesc}>
      <div className="explore-item-title">{title}</div>
      <div className="explore-item-desc hidden" ref={descRef}>
        {description}
      </div>
    </div>
  );
}
