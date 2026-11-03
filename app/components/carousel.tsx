import {
  type CSSProperties,
  type MouseEvent,
  type PointerEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

const DURATION_MS = 800;

/** Endless carousel state. Items render three times so the loop has no seam. */
export function useLoop(count: number) {
  const [state, setState] = useState({ pos: 0, animate: true });
  const moving = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const moveTo = (pos: number) => {
    if (moving.current) return;
    moving.current = true;
    setState({ pos, animate: true });
    timer.current = setTimeout(() => {
      moving.current = false;
      setState({ pos: ((pos % count) + count) % count, animate: false });
    }, DURATION_MS);
  };

  return {
    pos: state.pos,
    animate: state.animate,
    active: ((state.pos % count) + count) % count,
    next: () => moveTo(state.pos + 1),
    prev: () => moveTo(state.pos - 1),
    goTo: (index: number) => moveTo(index),
  };
}

export type Loop = ReturnType<typeof useLoop>;

/** Sliding track with mouse and touch dragging. Sizes come from CSS variables. */
export function Track({
  loop,
  items,
  label,
  className = "",
}: {
  loop: Loop;
  items: ReactNode[];
  label: string;
  className?: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, dx: 0 });
  const [dragging, setDragging] = useState(false);
  const count = items.length;

  const onDown = (e: PointerEvent) => {
    drag.current = { down: true, startX: e.clientX, dx: 0 };
  };
  const onMove = (e: PointerEvent) => {
    const d = drag.current;
    if (!d.down) return;
    d.dx = e.clientX - d.startX;
    if (Math.abs(d.dx) > 6) {
      setDragging(true);
      track.current?.style.setProperty("--drag", `${d.dx}px`);
    }
  };
  const onUp = () => {
    const d = drag.current;
    if (!d.down) return;
    d.down = false;
    track.current?.style.setProperty("--drag", "0px");
    setDragging(false);
    if (d.dx < -60) loop.next();
    else if (d.dx > 60) loop.prev();
  };
  // A drag that ends on a link must not also follow that link.
  const onClickCapture = (e: MouseEvent) => {
    if (Math.abs(drag.current.dx) > 6) e.preventDefault();
    drag.current.dx = 0;
  };

  return (
    <div
      className={`track-view ${className}`.trim()}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div
        ref={track}
        className={`track${loop.animate && !dragging ? " is-animated" : ""}${dragging ? " is-dragging" : ""}`}
        style={{ "--i": loop.pos + count } as CSSProperties}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onPointerLeave={onUp}
        onClickCapture={onClickCapture}
      >
        {[0, 1, 2].flatMap((copy) =>
          items.map((item, i) => (
            <div
              className="track-item"
              key={`${copy}-${i}`}
              aria-hidden={copy !== 1 || undefined}
              inert={copy !== 1 || undefined}
            >
              {item}
            </div>
          )),
        )}
      </div>
    </div>
  );
}
