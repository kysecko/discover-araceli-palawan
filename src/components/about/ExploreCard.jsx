import { useRef } from "react";
import Masonry from "../../import_component/Masonry";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    id: "1",
    img: "./explore/map.png",
    height: 1200,
    title: "Araceli Map",
    description: "15 Barangays",
    url: "https://www.rome2rio.com/trips?origin=Manila&destination=Palawan&search=Manila%2CPalawan%2CAraceli&accom_comparison=true",
  },
  {
    id: "2",
    img: "./explore/munisipyo.jpg",
    height: 500,
    fit: "cover",
    title: "Municipal Hall",
    description: "Town Center",
    url: "",
  },
  {
    id: "3",
    img: "./explore/curacha.jpg",
    height: 700,
    fit: "cover",
    title: "Fresh Curacha",
    description: "Local Seafood",
    url: "https://www.facebook.com/araceli.turismo/posts/curacha-also-known-as-spanner-crab-or-red-frog-crab-is-a-local-chavacano-name-gi/798176321723789/",
  },
  {
    id: "4",
    img: "./explore/pamelan.jpg",
    height: 700,
    fit: "cover",
    title: "Pamelan Festival",
    description: "Cuyonon Heritage",
    url: "https://www.scribd.com/document/688341078/Pamelan-Festival-Script",
  },
  {
    id: "5",
    img: "./explore/bag.jpg",
    height: 500,
    fit: "cover",
    title: "Handmade Crafts",
    description: "Centuries-old Weaving",
    url: "",
  },
];

const textAos = {
  "data-aos": "fade-up",
  "data-aos-duration": "1000",
  "data-aos-once": "true",
};

function ExploreCard() {
  const scrollerRef = useRef(null);
  const dragState = useRef({ isDown: false, startX: 0, startScrollLeft: 0, moved: false });

  const handlePointerDown = (e) => {
    if (e.pointerType !== "mouse" || !scrollerRef.current) return;
    dragState.current.isDown = true;
    dragState.current.moved = false;
    dragState.current.startX = e.clientX;
    dragState.current.startScrollLeft = scrollerRef.current.scrollLeft;
    scrollerRef.current.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragState.current.isDown || !scrollerRef.current) return;
    const dx = e.clientX - dragState.current.startX;
    if (Math.abs(dx) > 3) dragState.current.moved = true;
    scrollerRef.current.scrollLeft = dragState.current.startScrollLeft - dx;
  };

  const endDrag = (e) => {
    if (!dragState.current.isDown) return;
    dragState.current.isDown = false;
    try {
      scrollerRef.current?.releasePointerCapture(e.pointerId);
    } catch {
      // pointer capture may already be released; safe to ignore
    }
  };

  // Prevent an accidental link navigation if the user was actually dragging
  const handleClickCapture = (e) => {
    if (dragState.current.moved) {
      e.preventDefault();
      dragState.current.moved = false;
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full md:min-h-screen justify-between p-4 sm:p-6 md:p-12 pb-10 gap-8 overflow-hidden">
      {/* Text Sidebar */}
      <div className="w-full md:w-96 shrink-0 order-1 md:order-2 bg-white/20 backdrop-blur-md text-center md:text-left">
        <h2
          {...textAos}
          className="font-playfair text-2xl md:text-3xl uppercase text-primary font-extrabold mb-2"
        >
          Explore Araceli
        </h2>
        <hr className="border-slate-200 my-2" />
        <p className="text-muted mt-2 text-sm md:text-[15px]/7">
          Tucked along the serene shores of the Sulu Sea, it offers a perfect
          escape for travelers seeking unspoiled natural beauty and authentic
          island experiences. With pristine beaches, crystal-clear turquoise
          waters, and rolling hills overlooking the coastline.
        </p>
        <p className="text-muted mt-3 text-sm md:text-[15px]/7">
          Araceli is a hidden gem for sea lovers, known for its{" "}
          <span className="italic font-semibold">fresh seafood</span>,{" "}
          <span className="font-semibold italic">vibrant coral reefs</span>, and{" "}
          <span className="font-semibold italic">diverse marine life</span>.
          Every May, the municipality comes alive with the{" "}
          <span className="font-semibold italic">Pamelan Festival</span>, a
          vibrant celebration of Cuyonon heritage honoring the sea's abundance
          and the island's deep connection to the ocean and land. Local artisans
          also keep centuries-old{" "}
          <span className="font-semibold italic">weaving traditions</span>{" "}
          alive, crafting colorful handmade baskets found across the
          municipality's 15 barangays. Warm Cuyonon hospitality and a laid-back
          vibe make Araceli one of Palawan's most promising destinations to
          experience the real beauty of the{" "}
          <span className="font-playfair font-bold">"Last Frontier</span>."
        </p>
        <div className="flex justify-center md:justify-start shrink-0 mt-4 mb-2">
          <a
            href="https://en.wikipedia.org/wiki/Araceli,_Palawan"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-orange-primary font-semibold transition-all duration-300"
          >
            <span>Read More</span>
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>

      {/* Mobile Horizontal Scroll Strip */}
      <div className="w-full md:hidden order-2">

        <div
          ref={scrollerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
          onClickCapture={handleClickCapture}
          className="flex w-full flex-nowrap gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth snap-x snap-proximity pb-4 -mx-4 px-4 scroll-pl-4 scroll-pr-4 cursor-grab active:cursor-grabbing select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar:none]"
          style={{
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-x",
            scrollbarWidth: "none",
          }}
        >

          <div className="shrink-0 w-2" aria-hidden="true" />

          {items.map((item) => (
            <a
              key={item.id}
              href={item.url || "#"}
              target={item.url ? "_blank" : "_self"}
              rel="noopener noreferrer"
              draggable={false}
              className="group relative h-64 w-44 shrink-0 rounded-2xl overflow-hidden snap-start block shadow-md border border-slate-100 active:scale-95 transition-transform duration-150"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                draggable={false}
              />

              {/* Mobile Gradient  */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3.5 text-white">
                <h4 className="font-semibold text-sm leading-tight text-white drop-shadow-sm">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-200 mt-0.5">
                  {item.description}
                </p>
                <span className="text-[11px] text-white font-medium mt-1.5 inline-flex items-center gap-0.5 hover:text-orange-primary hover:underline">
                  Read More
                </span>
              </div>
            </a>
          ))}

          {/* Right Spacer for smooth edge scrolling */}
          <div className="shrink-0 w-2" aria-hidden="true" />
        </div>
      </div>

      {/* Desktop / Tablet Masonry layout */}
      <div className="hidden md:block flex-1 min-w-0 order-1">
        <Masonry items={items} />
      </div>
    </div>
  );
}

export default ExploreCard;