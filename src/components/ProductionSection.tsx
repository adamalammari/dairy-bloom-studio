import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import collectionImg from "@/assets/stage-collection.jpg";
import pasteurizationImg from "@/assets/stage-pasteurization.jpg";
import processingImg from "@/assets/stage-processing.jpg";
import packagingImg from "@/assets/stage-packaging.jpg";
import distributionImg from "@/assets/stage-distribution.jpg";

gsap.registerPlugin(ScrollTrigger);

const stages = [
  { img: collectionImg, title: "جمع الحليب", desc: "نجمع الحليب الطازج يومياً من أفضل المزارع المعتمدة" },
  { img: pasteurizationImg, title: "التعقيم", desc: "عملية بسترة متقدمة لضمان سلامة المنتج" },
  { img: processingImg, title: "المعالجة", desc: "معالجة دقيقة بأحدث التقنيات للحفاظ على القيمة الغذائية" },
  { img: packagingImg, title: "التعبئة", desc: "تعبئة آلية في بيئة معقمة بالكامل" },
  { img: distributionImg, title: "التوزيع", desc: "شاحنات مبردة لتوصيل المنتجات طازجة" },
];

const ProductionSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stages.forEach((_, i) => {
        gsap.from(`.stage-${i}`, {
          x: i % 2 === 0 ? -80 : 80,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: { trigger: `.stage-${i}`, start: "top 80%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="production" ref={ref} className="section-padding bg-dairy-green-light">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">مراحل الإنتاج</h2>
          <p className="section-subtitle">رحلة الحليب من المزرعة إلى طاولتك بأعلى معايير الجودة</p>
        </div>
        <div className="space-y-12">
          {stages.map((s, i) => (
            <div
              key={i}
              className={`stage-${i} flex flex-col md:flex-row items-center gap-8 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2">
                <img
                  src={s.img}
                  alt={s.title}
                  className="rounded-xl shadow-xl w-full h-64 object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-12 h-12 rounded-full gradient-dairy flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {i + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">{s.title}</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionSection;
