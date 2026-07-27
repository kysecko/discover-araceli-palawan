import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import { gsap } from "gsap";

import "./Masonry.css";

const useMedia = (queries, values, defaultValue) => {
  const get = useCallback(
    () =>
      values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue,
    [queries, values, defaultValue]
  );

  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach((q) => matchMedia(q).addEventListener("change", handler));
    return () =>
      queries.forEach((q) =>
        matchMedia(q).removeEventListener("change", handler)
      );
  }, [queries, get]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

const preloadImages = async (urls) => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

const Masonry = ({
  items = [],
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.98,
  blurToFocus = true,
}) => {
  const columns = useMedia(
    [
      "(min-width:3000px)",
      "(min-width:2000px)",
      "(min-width:1000px)",
      "(min-width:768px)",
    ],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);

  useEffect(() => {
    if (!items?.length) return;
    preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
  }, [items]);

  const grid = useMemo(() => {
    if (!width || !items?.length) return [];

    const colHeights = new Array(columns).fill(0);
    const columnWidth = width / columns;

    return items.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;
      const height = (child.height || 400) / 2;
      const y = colHeights[col];

      colHeights[col] += height;

      return { ...child, x, y, w: columnWidth, h: height };
    });
  }, [columns, items, width]);

  const maxContainerHeight = useMemo(() => {
    if (!grid.length) return 0;
    return Math.max(...grid.map((item) => item.y + item.h));
  }, [grid]);

  const hasMounted = useRef(false);

  const getInitialPosition = useCallback(
    (item) => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return { x: item.x || 0, y: item.y || 0 };

      let direction = animateFrom;
      if (animateFrom === "random") {
        const directions = ["top", "bottom", "left", "right"];
        direction = directions[Math.floor(Math.random() * directions.length)];
      }

      switch (direction) {
        case "top":
          return { x: item.x, y: -200 };
        case "bottom":
          return { x: item.x, y: window.innerHeight + 200 };
        case "left":
          return { x: -200, y: item.y };
        case "right":
          return { x: window.innerWidth + 200, y: item.y };
        case "center":
          return {
            x: containerRect.width / 2 - (item.w || 300) / 2,
            y: containerRect.height / 2 - (item.h || 300) / 2,
          };
        default:
          return { x: item.x, y: (item.y || 0) + 100 };
      }
    },
    [animateFrom, containerRef]
  );

  useLayoutEffect(() => {
    if (!imagesReady || grid.length === 0) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animationProps = {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h,
      };

      if (!hasMounted.current) {
        const initialPos = getInitialPosition(item);
        const initialState = {
          opacity: 0,
          x: initialPos.x,
          y: initialPos.y,
          width: item.w,
          height: item.h,
          ...(blurToFocus && { filter: "blur(10px)" }),
        };

        gsap.fromTo(selector, initialState, {
          opacity: 1,
          ...animationProps,
          ...(blurToFocus && { filter: "blur(0px)" }),
          duration: 0.8,
          ease: "power3.out",
          delay: index * stagger,
        });
      } else {
        gsap.to(selector, {
          ...animationProps,
          duration,
          ease,
          overwrite: "auto",
        });
      }
    });

    hasMounted.current = true;
  }, [
    grid,
    imagesReady,
    stagger,
    duration,
    ease,
    getInitialPosition,
    blurToFocus,
  ]);

  const handleMouseEnter = (item) => {
    const selector = `[data-key="${item.id}"]`;
    if (scaleOnHover)
      gsap.to(selector, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out",
      });
  };

  const handleMouseLeave = (item) => {
    const selector = `[data-key="${item.id}"]`;
    if (scaleOnHover)
      gsap.to(selector, { scale: 1, duration: 0.3, ease: "power2.out" });
  };

  return (
    <div
      ref={containerRef}
      className="list relative w-full"
      style={{ height: `${maxContainerHeight}px` }}
    >
      {grid.map((item) => (
        <div
          key={item.id}
          data-key={item.id}
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={() => handleMouseLeave(item)}
          className="absolute group overflow-hidden rounded-xl p-1"
          style={{
            willChange: "transform, width, height, opacity",
          }}
        >
          {/* Clickable Card Link */}
          <a
            href={item.url || "#"}
            target={item.url ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="relative w-full h-full overflow-hidden rounded-lg block"
          >
            <img
              src={item.img}
              alt={item.title || "Gallery Image"}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover Text & View More Button */}
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
              {item.title && (
                <h3 className="font-playfair text-base sm:text-lg font-bold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
              )}
              {item.description && (
                <p className="text-xs text-gray-200 mt-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.description}
                </p>
              )}

              {/* View More Tag */}
              <div className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-white hover:underline hover:text-orange-primary translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                <span>Read More</span>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Masonry;