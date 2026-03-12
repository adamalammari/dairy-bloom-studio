import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  "بندة", "العثيم", "التميمي", "الدانوب", "كارفور", "لولو", "المزرعة", "بنده"
];

const PartnersSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".partner-item", {
        scale: 0.5,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">شركاؤنا</h2>
          <p className="section-subtitle">نفتخر بشراكتنا مع أبرز العلامات التجارية</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {partners.map((p, i) => (
            <div
              key={i}
              className="partner-item dairy-card p-6 flex items-center justify-center h-24 text-xl font-bold text-muted-foreground hover:text-primary transition-colors"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
