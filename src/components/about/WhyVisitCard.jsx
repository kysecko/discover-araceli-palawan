import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function WhyVisitSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }, []);

  const cards = [
    {
      title: "Culture",
      desc: "Centuries-old Cuyonon traditions, the vibrant Pamelan Festival, and handwoven artisanal crafts across 15 local barangays.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff4400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" x2="21" y1="22" y2="22" />
          <line x1="6" x2="18" y1="18" y2="18" />
          <path d="M4 18V10" />
          <path d="M8 18V10" />
          <path d="M12 18V10" />
          <path d="M16 18V10" />
          <path d="M20 18V10" />
          <path d="M12 2 2 7h20z" />
        </svg>
      ),
    },
    {
      title: "Nature",
      desc: "Unspoiled beaches, crystal-clear turquoise waters of the Sulu Sea, and rolling coastal hills untouched by crowds.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff4400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2s1.5-2 3.5-2 3.5 2 3.5 2z" />
          <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-2s-1.5-2-3.5-2-3.5 2-3.5 2z" />
          <path d="M5.8 12a5.5 5.5 0 0 0-3.8 3h2a3.5 3.5 0 0 1 2.3-1.8z" />
          <path d="M11 15.5c.5-1.5 2-3.5 4.5-3.5a5.5 5.5 0 0 1 4.5 2.5h-2a3.5 3.5 0 0 0-2.5-1c-1.5 0-2.5 1-2.5 1z" />
          <path d="M12 10v12" />
        </svg>
      ),
    },
    {
      title: "Adventure",
      desc: "Island hopping to hidden islets, diving among vibrant coral reefs, and discovering diverse marine life in pristine waters.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff4400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
    },
    {
      title: "Relaxation",
      desc: "Fresh local seafood, serene white-sand shores, and warm, laid-back Cuyonon hospitality far from city noise.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff4400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      style={{
        backgroundImage: "url('/images/island10.jpg')",
        backgroundSize: "cover",
      }}
      className="w-full min-h-dvh flex flex-col md:flex-row bg-cover bg-center items-start justify-start md:justify-between p-6 sm:p-10 md:p-20 rounded-xl gap-10 md:gap-8"
    >
      {/* left */}
      <div className="bg-transparent flex flex-col gap-2 md:mt-5 w-full md:w-auto md:max-w-md md:shrink-0">
        <div
          data-aos="fade-right"
          data-aos-delay="0"
          className="bg-orange-primary p-2 w-fit rounded-4xl text-white font-semibold text-sm"
        >
          • Why Araceli?
        </div>
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="flex flex-col font-normal text-3xl md:text-4xl text-white"
        >
          Why Experience{" "}
          <span className="font-playfair text-4xl md:text-5xl">Araceli?</span>
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-white/80 text-sm md:text-base"
        >
          Araceli offers a glimpse into the local culture and way of life
          in the Philippines. Visitors can explore traditional villages, sample
          delicious local cuisine, and learn about the customs and traditions of
          the indigenous Palaw'an people.
        </p>
      </div>

      {/* right */}
      <div className="bg-transparent grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-auto">
        {cards.map((card, index) => (
          <div
            key={card.title}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
            data-aos-duration="700"
            className="bg-white border border-slate-200 shadow-sm w-full md:max-w-sm rounded-lg md:mx-auto mt-2 md:mt-6 p-4 sm:p-6 transition-all duration-300 hover:border-white hover:shadow-3xl hover:shadow-gray-200 hover:-translate-y"
          >
            <div>
              <div className="flex flex-row items-center justify-start gap-4">
                <div className="p-2.5 bg-gray-100 rounded-lg inline-block">
                  {card.icon}
                </div>
                <h3 className="text-primary text-base font-semibold">
                  {card.title}{" "}
                </h3>
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyVisitSection;