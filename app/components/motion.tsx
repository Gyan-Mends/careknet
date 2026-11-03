import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

export type RevealAnim =
  | "fade-up"
  | "fade-up-1"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-right-1"
  | "fade-custom"
  | "scale-up"
  | "scale-up-1"
  | "scale-down"
  | "scale-custom"
  | "pulse-1"
  | "pulse-2"
  | "rotate-down-left"
  | "slide-bot"
  | "slide-right";

const EASE = {
  out: "cubic-bezier(0.165, 0.84, 0.44, 1)",
  back: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  inOut: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
};

type RevealProps = {
  as?: ElementType;
  anim?: RevealAnim;
  duration?: number;
  delay?: number;
  ease?: keyof typeof EASE;
  /** Start offset for the "fade-custom" animation, in px. */
  fromX?: number;
  fromY?: number;
  /** Start scale for the "scale-custom" animation. */
  fromScale?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

/** Plays an entrance animation the first time the element scrolls into view. */
export function Reveal({
  as: Tag = "div",
  anim = "fade-up-1",
  duration = 1.4,
  delay = 0,
  ease = "out",
  fromX = 0,
  fromY = 0,
  fromScale = 0.8,
  className = "",
  style,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const vars = {
    "--r-d": `${duration}s`,
    "--r-dl": `${delay}s`,
    "--r-e": EASE[ease],
    "--r-x": `${fromX}px`,
    "--r-y": `${fromY}px`,
    "--r-s": fromScale,
    ...style,
  } as CSSProperties;

  return (
    <Tag
      ref={ref}
      className={`reveal r-${anim}${seen ? " is-in" : ""} ${className}`.trim()}
      style={vars}
    >
      {children}
    </Tag>
  );
}

type Effect =
  | "moveHorizontal"
  | "moveVertical"
  | "rotateIn"
  | "rotateOut"
  | "scale"
  | "fadeScale";

type ScrollMotionProps = {
  moveIn?: Effect;
  moveOut?: Effect;
  x?: number;
  y?: number;
  rotate?: number;
  scale?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

/**
 * Scroll-linked movement. `delta` runs from 1 (element low in the viewport)
 * through 0 (mid-screen) to -1 (near the top), the same calculation the
 * template uses. It is off at 1024px and below, as in the template.
 */
export function ScrollMotion({
  moveIn,
  moveOut,
  x = 200,
  y = 200,
  rotate = 90,
  scale = 1,
  className = "",
  style,
  children,
}: ScrollMotionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const enabled = window.matchMedia(
      "(min-width: 1025px) and (prefers-reduced-motion: no-preference)",
    );
    let frame = 0;

    const render = () => {
      frame = 0;
      if (!enabled.matches) {
        el.style.transform = "";
        el.style.opacity = "";
        return;
      }
      const box = el.getBoundingClientRect();
      const half = window.innerHeight / 2;
      const origin = box.top + 0.2 * box.height;
      const delta =
        origin >= half
          ? Math.min((origin - half) / half, 1)
          : Math.max((origin - half) / half, -1);
      const effect = delta > 0 ? moveIn : delta < 0 ? moveOut : undefined;
      const scaled = (scale - 1) * Math.abs(delta) + 1;

      let transform = "";
      let opacity = "";
      switch (effect) {
        case "moveHorizontal":
          transform = `translateX(${x * delta}px)`;
          break;
        case "moveVertical":
          transform = `translateY(${y * delta}px)`;
          break;
        case "rotateIn":
          transform = `rotate(${-rotate * delta}deg)`;
          break;
        case "rotateOut":
          transform = `rotate(${rotate * delta}deg)`;
          break;
        case "scale":
          transform = `scale(${scaled})`;
          break;
        case "fadeScale":
          transform = `scale(${scaled})`;
          opacity = String(1 - Math.abs(delta));
          break;
      }
      el.style.transform = transform;
      el.style.opacity = opacity;
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    enabled.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      enabled.removeEventListener("change", schedule);
    };
  }, [moveIn, moveOut, x, y, rotate, scale]);

  return (
    <div ref={ref} className={`scroll-motion ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}

/** Decorative 3D heart: scroll-linked rotation around a pulse entrance. */
export function Heart({
  src,
  className,
  direction = "rotateIn",
  rotate = 30,
  duration = 1.8,
  ease = "out",
}: {
  src: string;
  className: string;
  direction?: "rotateIn" | "rotateOut";
  rotate?: number;
  duration?: number;
  ease?: keyof typeof EASE;
}) {
  return (
    <ScrollMotion moveOut={direction} rotate={rotate} className={`heart ${className}`}>
      <Reveal anim="pulse-2" duration={duration} ease={ease}>
        <img src={src} alt="" aria-hidden="true" draggable={false} />
      </Reveal>
    </ScrollMotion>
  );
}
