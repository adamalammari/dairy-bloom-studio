import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import factoryInterior from "@/assets/factory-interior.jpg";
import heroDairy from "@/assets/hero-dairy.jpg";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: gallery1, alt: "مبنى المصنع من الخارج" },
  { src: gallery2, alt: "صوامع تخزين الحليب" },
  { src: gallery3, alt: "خط الإنتاج الآلي" },
  { src: gallery4, alt: "مستودع التبريد" },
  { src: factoryInterior, alt: "داخل المصنع" },
  { src: heroDairy, alt: "معدات المصنع" },
];

const GallerySection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      });

      gsap.from(".gallery-item", {
        scale: 0.7,
        opacity: 0,
        rotation: -5,
        stagger: {
          each: 0.1,
          from: "center",
        },
        duration: 0.7,
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });

      // Parallax on gallery images
      document.querySelectorAll(".gallery-item img").forEach((img) => {
        gsap.to(img, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={ref} className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16 gallery-title">
          <h2 className="section-title">معرض المصنع</h2>
          <p className="section-subtitle">جولة مصورة داخل مصنعنا ومعداتنا الحديثة</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="gallery-item overflow-hidden rounded-xl group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
