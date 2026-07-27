import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import { scrollToSection } from "../utils/scrollToSection";

const routeToId = {
  "/": "home",
  "/explore": "explore",
  "/destinations": "destinations",
  "/travel-guide": "travel-guide",
  "/contact": "contact",
};

export default function useScrollToSection() {
  const { pathname } = useLocation();

  useEffect(() => {
    const id = routeToId[pathname];
    if (!id) return;

    AOS.refresh(); // recalculate trigger points before scrolling
    scrollToSection(id);
  }, [pathname]);
}