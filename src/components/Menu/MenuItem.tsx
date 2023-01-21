interface Props {
  title: string;
}

export default function MenuItem({ title }: Props) {
  return <div className="menuItem">{title}</div>;
}
