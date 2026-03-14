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
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const titleEl = el.querySelector(".industries-title");
      if (titleEl) {
        gsap.fromTo(titleEl, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        });
      }

      const cards = el.querySelectorAll(".industry-card");
      if (cards.length) {
        gsap.fromTo(cards, { y: 80, opacity: 0, scale: 0.8 }, {
          y: 0, opacity: 1, scale: 1,
          stagger: { each: 0.12, from: "edges" },
          duration: 0.8, ease: "back.out(1.7)",
          scrollTrigger: { trigger: el, start: "top 75%", toggleActions: "play none none none" },
        });
      }
    }, el);
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
