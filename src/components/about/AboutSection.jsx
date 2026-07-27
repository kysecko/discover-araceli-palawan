import ExploreCard from "./ExploreCard";
import WhyVisitCard from "./WhyVisitCard";

function AboutSection() {
  return (
    <section
      id="explore"
      data-aos="fade-up"
      data-aos-offset="500"
      data-aos-duration="1300"
      className="flex flex-col w-full gap-8 py-10 md:px-8"
    >
      <ExploreCard />
      <WhyVisitCard />
    </section>
  );
}

export default AboutSection;
