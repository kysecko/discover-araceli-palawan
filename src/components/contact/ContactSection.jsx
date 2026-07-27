import {
  MapPin,
  Phone,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import Button from "../home/Button";

// Custom Facebook Icon component
const FacebookIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="shrink-0"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  function handleClick() {
    alert("This to be implemented soon!");
  }

  const contactItems = [
    {
      icon: <MapPin size={18} />,
      title: "Location",
      text: "Araceli Tourism Office, Poblacion, Araceli, Palawan",
      href: "https://www.bing.com/maps/search?v=2&pc=FACEBK&mid=8100&mkt=en-US&FORM=FBKPL1&q=ARACELI%2C+PALAWAN%2C+5311&cp=10.604147%7E120.061350&lvl=11&style=r",
    },
    {
      icon: <FacebookIcon size={18} />,
      title: "Facebook",
      text: "Araceli, Palawan Tourism, Culture and Arts",
      href: "https://www.facebook.com/profile.php?id=100064116580869",
    },
    {
      icon: <Phone size={18} />,
      title: "Local Assistance",
      text: "0916 287 8584",
      href: "tel:09162878584",
    },
    {
      icon: <Clock size={18} />,
      title: "Office Hours",
      text: "Mon – Fri: 8:00 AM – 5:00 PM (PST)",
      href: null, // Static item
    },
  ];

  return (
    <section
      id="contact"
      className="bg-white text-slate-900 font-poppins border-t border-slate-200 relative z-10"
    >
      {/* 1. Final Call-To-Action Banner */}
      <div className="relative overflow-hidden bg-primary py-20 px-6 border-b border-muted/60">
        <div className="absolute inset-0 bg-primary pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <span
            className="inline-block border-b text-xs font-semibold uppercase tracking-[0.2em] text-orange-primary px-3.5 py-1"
            data-aos="fade-down"
          >
            We're Waiting For You
          </span>

          <h2
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Ready to experience the real Palawan?
          </h2>

          <p
            className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Trade commercial crowds for untouched sandbars, crystalline waters,
            and authentic Cuyonon hospitality in Araceli.
          </p>

          <div
            className="pt-2 flex flex-wrap justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Button onClick={handleClick}>Plan Your Trip</Button>
            <a
              href="#travel-guide"
              className="bg-secondary hover:bg-muted text-slate-200 border border-muted font-medium px-6 py-3 rounded-sm text-sm transition-all"
            >
              View Travel Guide
            </a>
          </div>
        </div>
      </div>

      {/* 2. Contact & Inquiries Main Container */}
      <div id="contact-form" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8" data-aos="fade-right">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-primary border-b">
                Get In Touch
              </span>

              <h3 className="font-playfair text-2xl sm:text-3xl text-primary mt-2 mb-4">
                Have questions before you set sail?
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you need help coordinating boat schedules from Roxas,
                finding local homestays, or arranging private charters, local
                tourism guides are here to help.
              </p>
            </div>

            <div className="space-y-5 text-sm">
              {contactItems.map((item, index) => {
                const isClickable = Boolean(item.href);
                const Component = isClickable ? "a" : "div";

                return (
                  <Component
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    {...(isClickable
                      ? {
                          href: item.href,
                          target: item.href.startsWith("http") ? "_blank" : undefined,
                          rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined,
                        }
                      : {})}
                    className={`flex items-start gap-4 p-2.5 rounded-xl transition-all ${
                      isClickable
                        ? "hover:bg-slate-100/80 cursor-pointer group"
                        : ""
                    }`}
                  >
                    <div className="p-2.5 rounded-lg bg-primary/5 text-orange-primary group-hover:bg-orange-primary group-hover:text-white transition-colors">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary flex items-center gap-1.5">
                        {item.title}
                        {isClickable && (
                          <span className="text-xs font-normal text-orange-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            ↗
                          </span>
                        )}
                      </h4>
                      <p className="text-slate-600 group-hover:text-primary transition-colors">
                        {item.text}
                      </p>
                    </div>
                  </Component>
                );
              })}
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div
            className="lg:col-span-7 bg-primary border border-primary/20 rounded-2xl p-6 sm:p-8 shadow-xl"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <h4 className="text-4xl font-semibold font-playfair text-white mb-2 flex items-center gap-2">
              Send a Travel Inquiry
            </h4>

            <p className="text-xs text-slate-300 mb-6">
              Fill out the form below and local coordinators will respond with
              route updates and booking assistance.
            </p>

            {submitted ? (
              <div className="bg-teal-primary/20 border border-teal-light/40 rounded-xl p-6 text-center space-y-2">
                <CheckCircle2 size={32} className="text-teal-light mx-auto" />

                <h5 className="text-white font-medium text-base">
                  Message Sent!
                </h5>

                <p className="text-slate-300 text-xs">
                  Matamang Salamat for reaching out. A coordinator will get back
                  to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      id: "fullName",
                      label: "Full Name",
                      type: "text",
                      placeholder: "e.g. Juan Dela Cruz",
                    },
                    {
                      id: "email",
                      label: "Email Address",
                      type: "email",
                      placeholder: "e.g. juandelacruz.com",
                    },
                  ].map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                      >
                        {field.label}
                      </label>

                      <input
                        required
                        type={field.type}
                        id={field.id}
                        placeholder={field.placeholder}
                        className="w-full bg-primary border border-muted rounded-lg px-3.5 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-orange-primary transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Message
                  </label>

                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your trip plans, group size, or specific questions..."
                    className="w-full bg-primary border border-muted rounded-lg px-3.5 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-orange-primary transition-colors resize-none"
                  />
                </div>

                <Button type="submit" fullWidth>
                  Send Travel Inquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;