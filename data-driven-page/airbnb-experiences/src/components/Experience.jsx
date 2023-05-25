import ExperienceCard from "./ExperienceCard";
import data from "../data";

export default function Experience() {
  const card = data.map((info) => {
    return <ExperienceCard key={info.id} {...info} />;
  });

  return <div className="experience-container">{card}</div>;
}
