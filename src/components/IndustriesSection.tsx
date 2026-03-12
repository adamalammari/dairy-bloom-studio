import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Store, UtensilsCrossed, Hotel, Coffee, ShoppingCart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { icon: Store, name: "المتاجر" },
  { icon: UtensilsCrossed, name: "المطاعم" },
  { icon: Hotel, name: "الفنادق" },
  { icon: Coffee, name: "المقاهي" },
  { icon: ShoppingCart, name: "السوبر ماركت" },
];

const IndustriesSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".industries-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      });

      gsap.from(".industry-card", {
        y: 80,
        opacity: 0,
        scale: 0.8,
        rotation: 5,
        stagger: {
          each: 0.12,
          from: "edges",
        },
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="industries" ref={ref} className="section-padding bg-dairy-blue-light">
      <div className="section-container">
        <div className="text-center mb-16 industries-title">
          <h2 className="section-title">الصناعات التي نخدمها</h2>
          <p className="section-subtitle">نقدم منتجاتنا لمختلف القطاعات التجارية</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="industry-card dairy-card p-8 text-center group cursor-pointer"
            >
              <ind.icon
                className="mx-auto mb-4 text-primary transition-transform duration-300 group-hover:scale-125"
                size={48}
              />
              <h3 className="text-lg font-bold text-foreground">{ind.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
