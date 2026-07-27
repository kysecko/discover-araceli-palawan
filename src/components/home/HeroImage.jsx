import Header from "./../layers/Header";
import Button from "./Button";

function HeroImage() {
  return (
    <section className="relative min-h-dvh" aria-label="Hero">
      <Header />

      <div
        data-aos="fade-in"
        data-aos-duration="1500"
        className="relative w-full h-full min-h-dvh bg-cover bg-center flex items-center justify-start"
        style={{ backgroundImage: "url('/images/island3.jpg')" }}
        role="img"
        aria-label="Aerial view of Araceli's coastline and beaches"
      >
        <div className="absolute inset-0 bg-black/30" />

        <div
          data-aos="fade-up"
          data-aos-delay="900"
          data-aos-duration="1200"
          className="relative z-10 text-left text-white backdrop-blur-md bg-linear-to-b from-black/0 to-transparent rounded-2xl mt-32 sm:mt-48 lg:mt-60 p-6 sm:p-8 mx-6 sm:ml-12 sm:mx-0 max-w-lg"
        >
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
            data-aos-easing="ease-out-cubic"
            className="mb-4 text-xl sm:text-2xl lg:text-3xl font-playfair font-bold text-white"
          >
            Discover Araceli,
            <span className="text-orange-primary"> Palawan</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1200"
            data-aos-easing="ease-out-cubic"
            className="mb-8 text-sm text-white/80 leading-relaxed"
          >
            Forget everything you thought you knew about Palawan. Araceli is the
            version no one's rushed to find yet — and that's exactly the point.
          </p>
          <Button
            onClick={() =>
              document.getElementById("destinations")?.scrollIntoView()
            }
          >
            Explore Destinations
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroImage;
