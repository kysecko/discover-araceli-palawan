import { Link, useLocation } from "react-router-dom";
import { scrollToSection } from "../../utils/scrollToSection";

const navLinks = [
  { label: "Home", path: "/", id: "home" },
  { label: "Explore", path: "/explore", id: "explore" },
  { label: "Destinations", path: "/destinations", id: "destinations" },
  { label: "Travel Guide", path: "/travel-guide", id: "travel-guide" },
  { label: "Contact", path: "/contact", id: "contact" },
];

function Nav({ onLinkClick }) {
  const { pathname } = useLocation();

  const handleClick = (id) => {
    scrollToSection(id);
    onLinkClick?.();
  };

  return (
    <ul className="flex flex-col gap-3 py-4 font-semibold text-sm lg:flex-row lg:gap-6 lg:py-0">
      {navLinks.map(({ label, path, id }, index) => {
        const isActive = pathname === path;

        return (
          <li
            key={label}
            data-aos="fade-down"
            data-aos-delay={1200 + index * 150}
          >
            <Link
              to={path}
              onClick={() => handleClick(id)}
              aria-current={isActive ? "page" : undefined}
              className={`
                relative inline-block p-2
                transition-colors duration-300
                hover:text-orange-primary
                text-white
                ${isActive ? "text-orange-primary" : ""}
                after:content-['']
                after:absolute
                after:left-0
                after:-bottom-0.5
                after:h-0.5
                after:bg-orange-primary
                after:transition-all
                after:duration-300
                ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
              `}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Nav;