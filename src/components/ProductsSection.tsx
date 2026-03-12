import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import milkImg from "@/assets/product-milk.jpg";
import labanImg from "@/assets/product-laban.jpg";
import yogurtImg from "@/assets/product-yogurt.jpg";
import cheeseImg from "@/assets/product-cheese.jpg";
import creamImg from "@/assets/product-cream.jpg";
import butterImg from "@/assets/product-butter.jpg";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { img: milkImg, name: "الحليب الطازج", desc: "حليب طازج 100% من أجود المزارع" },
  { img: labanImg, name: "اللبن", desc: "لبن طازج غني بالبروبيوتيك" },
  { img: yogurtImg, name: "الزبادي", desc: "زبادي كريمي بنكهة طبيعية" },
  { img: cheeseImg, name: "الجبن", desc: "جبن طبيعي بأنواع متعددة" },
  { img: creamImg, name: "القشطة", desc: "قشطة طازجة لأشهى الأطباق" },
  { img: butterImg, name: "الزبدة", desc: "زبدة طبيعية عالية الجودة" },
];

const ProductsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(".products-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      });

      // Stagger cards from bottom with rotation
      gsap.from(".product-card", {
        y: 100,
        opacity: 0,
        rotation: 3,
        scale: 0.9,
        stagger: {
          each: 0.15,
          from: "random",
        },
        duration: 0.9,
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });

      // Parallax on product images while scrolling
      document.querySelectorAll(".product-card img").forEach((img) => {
        gsap.to(img, {
          yPercent: 15,
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
    <section id="products" ref={ref} className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16 products-title">
          <h2 className="section-title">منتجاتنا</h2>
          <p className="section-subtitle">أجود منتجات الألبان الطازجة يومياً من مصنعنا إلى طاولتك</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div
              key={i}
              className="product-card dairy-card group cursor-pointer"
            >
              <div className="overflow-hidden h-64">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{p.name}</h3>
                <p className="text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
