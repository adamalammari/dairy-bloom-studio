import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MapSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".map-container", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-padding bg-dairy-green-light">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">موقع المصنع</h2>
          <p className="section-subtitle">زورونا في مقر المصنع بمدينة الرياض</p>
        </div>
        <div className="map-container rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463877.5!2d46.5!3d24.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh!5e0!3m2!1sar!2ssa!4v1700000000000!5m2!1sar!2ssa"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع المصنع على الخريطة"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
