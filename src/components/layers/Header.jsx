import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import logo from "../../assets/logo.png";
import useScrollDirection from "../../hooks/useScrollDirection";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const hidden = useScrollDirection({ threshold: 10 });

  return (
    <nav
      data-aos="fade-down"
      data-aos-duration="1200"
      className={`
        fixed top-0 left-0 w-full flex flex-wrap py-2 px-4 md:px-8 min-h-17 z-20
        backdrop-blur-md bg-linear-to-b from-black/50 to-transparent
        transition-transform duration-500 ease-in-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 w-full">
        <div className="flex-1 flex items-center justify-between">
          <Link
            to="/"
            className="min-w-9 inline-block focus:outline-none drop-shadow-xl focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            <span className="sr-only">Discover Araceli</span>
            <img src={logo} alt="Araceli" className="h-9 w-auto" />
          </Link>

          {/* Hamburger toggle — mobile/tablet only */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            aria-expanded={isOpen}
            aria-controls="collapseMenu"
          >
            <span className="sr-only">Toggle menu</span>
            {isOpen ? (
              <X size={26} className="cursor-pointer hover:text-orange-primary" />
            ) : (
              <Menu size={26} className="cursor-pointer hover:text-orange-primary" />
            )}
          </button>
        </div>

        <div
          id="collapseMenu"
          className={`
            w-full lg:w-auto lg:block
            ${isOpen ? "block" : "hidden"}
          `}
        >
          <Nav onLinkClick={() => setIsOpen(false)} />
        </div>
      </div>
    </nav>
  );
}

export default Header;