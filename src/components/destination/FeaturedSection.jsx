import CircularGallery from "../../import_component/CircularGallery";

function FeaturedSection() {
  return (
    <section className="text-center" id="destinations">
      <span
        className="text-sm md:text-base text-teal-950 uppercase tracking-widest"
        data-aos="fade-up"
        data-duration="2000"
        data-aos-delay="200"
      >
        Featured Spots
      </span>

      <h2
        data-aos="fade-up"
        data-aos-delay="500"
        className="text-2xl mb-2 md:text-5xl font-bold mt-2 text-orange-primary font-playfair"
      >
        Discover Araceli's Hidden Gems
      </h2>

      <p
        data-aos="fade-up"
        data-aos-delay="800"
        className="max-w-2xl mx-auto text-sm md:text-base text-gray px-4 md:px-0"
      >
        From quiet coves to vibrant local markets, explore the places that make
        this hometown unforgettable.
      </p>
      <div
        data-aos="fade-up"
        data-aos-delay="1000"
        className="w-full max-w-6xl mx-auto mt-2 h-65 md:h-150"
      >
        <CircularGallery />
      </div>
    </section>
  );
}

export default FeaturedSection;