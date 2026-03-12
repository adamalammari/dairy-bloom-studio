import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "@/assets/about-factory.jpg";
import { Award, ShieldCheck, Leaf } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Award, title: "خبرة 20+ سنة", desc: "خبرة واسعة في صناعة الألبان" },
  { icon: ShieldCheck, title: "جودة عالمية", desc: "معايير جودة دولية معتمدة" },
  { icon: Leaf, title: "منتجات طبيعية", desc: "مكونات طبيعية 100% بدون مواد حافظة" },
];

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-img", {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.from(".about-text", {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.from(".about-feature", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: { trigger: ".about-features", start: "top 85%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="section-padding bg-dairy-blue-light">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="about-text">
            <h2 className="section-title">من نحن</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              نحن مصنع رائد في إنتاج منتجات الألبان الطازجة في مدينة الرياض، نقدم أجود أنواع الحليب ومشتقاته منذ أكثر من 20 عاماً. نلتزم بأعلى معايير الجودة والنظافة لضمان وصول منتجات طازجة وصحية إلى عملائنا كل يوم.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              يضم مصنعنا أحدث المعدات وخطوط الإنتاج المتطورة، ويعمل فيه فريق من الخبراء المتخصصين في صناعة الألبان لضمان تقديم منتجات بجودة استثنائية.
            </p>
          </div>
          <div className="about-img">
            <img
              src={aboutImg}
              alt="داخل مصنع الألبان"
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
            />
          </div>
        </div>
        <div className="about-features grid md:grid-cols-3 gap-8 mt-16">
          {features.map((f, i) => (
            <div key={i} className="about-feature dairy-card p-8 text-center">
              <f.icon className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-xl font-bold mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
