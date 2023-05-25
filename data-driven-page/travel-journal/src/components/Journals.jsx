import Card from "./Card";
import data from "../data";

export default function Journals() {
  const cardComponent = data.map((items) => {
    return <Card key={items.id} items={items} />;
  });
  return <div className="journal-container">{cardComponent}</div>;
}
