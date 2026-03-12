import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 20, suffix: "+", label: "سنة خبرة" },
  { value: 50, suffix: "+", label: "منتج" },
  { value: 500, suffix: "+", label: "عميل" },
  { value: 1000000, suffix: "+", label: "لتر حليب يومياً", display: "1,000,000" },
];

const Counter = ({ target, suffix, display }: { target: number; suffix: string; display?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => setCount(Math.floor(obj.val)),
        });
      },
    });
    return () => trigger.kill();
  }, [target]);

  const formatted = display && count >= target ? display : count.toLocaleString();

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
      {formatted}{suffix}
    </span>
  );
};

const StatsSection = () => (
  <section className="py-16 gradient-dairy">
    <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {stats.map((s, i) => (
        <div key={i}>
          <Counter target={s.value} suffix={s.suffix} display={s.display} />
          <p className="text-primary-foreground/80 mt-2 text-lg font-medium">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;
