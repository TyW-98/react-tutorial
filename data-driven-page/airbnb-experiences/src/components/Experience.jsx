import ExperienceCard from "./ExperienceCard";
import data from "../data";

export default function Experience() {
  const card = data.map((info) => {
    return (
      <ExperienceCard
        key={info.id}
        activityImage={info.coverImg}
        rating={info.stats.rating}
        reviewCount={info.stats.reviewCount}
        country={info.country}
        title={info.title}
        price={info.price}
      />
    );
  });

  return <div className="experience-container">{card}</div>;
}
