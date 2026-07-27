import { ArrowUpRight, MapPin } from "lucide-react";
import logo from "../../assets/logo.png";

const footerSections = [
  {
    title: "Links",
    links: ["Home", "Explore", "Destinations", "Travel Guide", "Contact"],
  },
  {
    title: "Travel Guide",
    links: [
      "How to Get There",
      "Roxas Boat Schedules",
      "Best Time to Visit",
      "Budget & Island Tips",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-white/70 font-poppins border-t pt-10 border-muted">
      <div className="max-w-6xl mx-auto px-6 pb-12">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-muted/80">
          {/* Brand & Newsletter Section */}
          <div
            className="md:col-span-6 lg:col-span-5 space-y-4"
            data-aos="fade-up"
          >
            <a
              href="#home"
              className="flex items-center gap-2.5 text-white font-playfair text-xl font-medium"
            >
              <img src={logo} alt="Logo" className="h-9 w-auto" />
              <span>Discover Araceli</span>
            </a>

            <p className="text-sm leading-relaxed max-w-sm text-slate-300">
              Your official field guide to the hidden islands, serene sandbars,
              and vibrant Cuyonon culture of northeastern Palawan.
            </p>

          </div>

          {/* Links Column Wrapper (2 Columns on Mobile, spans on desktop) */}
          <div className="md:col-span-6 lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-8 pt-4 md:pt-0">
            {footerSections.map((section, index) => (
              <div
                key={section.title}
                className="space-y-3"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                  {section.title}
                </h4>

                <ul className="space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#travel-guide"
                        className="hover:text-orange-primary transition-colors inline-flex items-center gap-1 group"
                      >
                        {link}

                        {section.title === "Travel Guide" && (
                          <ArrowUpRight
                            size={13}
                            className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-primary"
                          />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-2 text-center sm:text-left">
            <MapPin size={14} className="text-orange-light shrink-0" />
            <p>
              © {new Date().getFullYear()} Discover Araceli. Palawan,
              Philippines.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-300 text-xs font-medium">
            <span>Created with</span>
            <svg
              viewBox="-11.5 -10.23174 23 20.46348"
              className="w-4 h-4 text-cyan-400 fill-current"
            >
              <circle cx="0" cy="0" r="2.05" />
              <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
            <span>by echo.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;