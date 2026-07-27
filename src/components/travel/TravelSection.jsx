import { Fragment } from "react";
import CardSwap, { Card } from "../../import_component/CardSwap";
import ScrollStack, {
  ScrollStackItem,
} from "../../import_component/ScrollStack";

const icons = {
  transport: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className="w-5 h-5"
    >
      <path
        d="M4 16V6a2 2 0 0 1 2-2h9l5 5v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
        strokeLinejoin="round"
      />
      <path d="M4 12h16M9 16v3M15 16v3" strokeLinecap="round" />
      <circle cx="8" cy="19" r="1.4" />
      <circle cx="16" cy="19" r="1.4" />
    </svg>
  ),
  calendar: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className="w-5 h-5"
    >
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" strokeLinecap="round" />
      <circle cx="8" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="14" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  wallet: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className="w-5 h-5"
    >
      <path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h11a2.5 2.5 0 0 1 2.5 2.5V17A2.5 2.5 0 0 1 17 19.5H6A2.5 2.5 0 0 1 3.5 17Z" />
      <path d="M15.5 12.75h3v2.5h-3a1.25 1.25 0 0 1 0-2.5Z" />
    </svg>
  ),
  tip: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className="w-5 h-5"
    >
      <path d="M9 18h6M10 21h4" strokeLinecap="round" />
      <path d="M12 3a6.5 6.5 0 0 0-3.6 11.9c.6.4 1.1 1.1 1.1 1.85V17h5v-.25c0-.75.5-1.45 1.1-1.85A6.5 6.5 0 0 0 12 3Z" />
    </svg>
  ),
};

const guide = [
  {
    icon: "transport",
    region: "Transportation",
    name: "How to Get There",
    note: "From Puerto Princesa you have two options: ride a boat that travels directly to Araceli, or take a shuttle van to Dumaran and continue by boat from there, followed by a short mini-bus ride into town.",
    chips: ["Puerto Princesa", "Dumaran", "Araceli"],
    routeArrows: true,
    images: [
      "/images/travel/fiver.jpg",
      "/images/travel/van.jpg",
      "/images/travel/totsi.jpg",
    ],
  },
  {
    icon: "calendar",
    region: "Travel Planning",
    name: "Best Time to Visit",
    note: "The dry season offers calm seas, sunny skies, and ideal conditions for island hopping, snorkeling, and exploring Araceli's pristine beaches.",
    chips: ["November", "May", "Dry Season"],
    images: [
      "/images/travel/swim.jpg",
      "/images/travel/sunset.jpg",
      "/images/travel/beach.png",
    ],
  },
  {
    icon: "wallet",
    region: "Travel Budget",
    name: "Budget & Expenses",
    note: "Plan for transportation, accommodations, meals, and island hopping tours. Local eateries and homestays make Araceli a budget-friendly destination.",
    chips: ["₱1,500 – ₱3,500 / day", "Home Stays", "Local Eateries"],
    images: [
      "/images/travel/gasa.jpg",
      "/images/travel/jcah.png",
      "/images/travel/pandan.jpg",
    ],
  },
  {
    icon: "tip",
    region: "Visitor Information",
    name: "Travel Tips",
    note: "Bring enough cash, as ATMs are limited. Pack reef-safe sunscreen, stay updated on boat schedules, and respect local customs while exploring the islands.",
    chips: ["Bring Cash", "Reef-safe Sunscreen", "Boat Schedules"],
    images: [
      "/images/travel/cash.png",
      "/images/travel/safe.png",
      "/images/travel/sched.png",
    ],
  },
];

const TravelSection = () => {
  return (
    <section
      id="travel-guide"
      className="bg-white font-poppins pb-12 md:pb-0"
      data-aos="fade-up"
    >
      <header className="max-w-xl mx-auto px-6 pt-24 pb-1 text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-tight text-orange-primary mb-4">
          Travel Guide
        </h2>
        <p className="text-base leading-relaxed text-primary">
          Everything you need to plan the trip — getting there, timing, budget,
          and a few things locals wish visitors knew.
        </p>
      </header>

      {/* Zero bottom margin on mobile, negative offset on desktop only */}
      <div className="mb-0 ">
        <ScrollStack
          useWindowScroll
          itemDistance={90}
          itemScale={0.03}
          itemStackDistance={36}
          stackPosition="16%"F
          scaleEndPosition="8%"
          baseScale={0.88}
          rotationAmount={0}
          blurAmount={0.4}
        >
          {guide.map((d, index) => (
            <ScrollStackItem
              key={d.name}
              itemClassName="!p-0 !h-auto min-h-[320px] overflow-visible bg-white shadow-xl shadow-primary/10 rounded-[32px]"
            >
              <div className="grid md:grid-cols-[1.3fr_1fr] gap-8 md:gap-10 p-8 md:p-10">
                {/* Content */}
                <div
                  className="flex flex-col justify-center"
                  data-aos="fade-right"
                  data-aos-delay={index * 50}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                      {icons[d.icon]}
                    </div>
                    <span className="text-sm text-primary">{d.region}</span>
                  </div>

                  <h3 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-4">
                    {d.name}
                  </h3>

                  <p className="text-sm md:text-base leading-relaxed text-primary/70 mb-6 max-w-[52ch]">
                    {d.note}
                  </p>

                  <div className="flex flex-wrap items-center gap-2.5">
                    {d.chips.map((chip, i) => (
                      <Fragment key={chip}>
                        {d.routeArrows && i > 0 && (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="w-4 h-4 text-primary"
                          >
                            <path
                              d="M5 12h14M13 6l6 6-6 6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                        <span
                          className="inline-flex items-center bg-orange-primary border border-orange-primary/50 text-white text-[13px] font-medium rounded-full px-4 py-1.5"
                          data-aos="zoom-in"
                          data-aos-delay={index * 50 + i * 80}
                        >
                          {chip}
                        </span>
                      </Fragment>
                    ))}
                  </div>
                </div>

                {/* Photo stack */}
                <div className="relative h-75 md:h-85 overflow-hidden rounded-3xl bg-primary/3">
                  <CardSwap
                    width={190}
                    height={240}
                    cardDistance={22}
                    verticalDistance={28}
                    delay={2800}
                    pauseOnHover
                    skewAmount={3}
                  >
                    {d.images.map((src, i) => (
                      <Card key={i}>
                        <img src={src} alt={`${d.name} ${i + 1}`} />
                      </Card>
                    ))}
                  </CardSwap>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default TravelSection;