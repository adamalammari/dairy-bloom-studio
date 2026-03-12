import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "@/assets/hero-dairy.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
      gsap.from(subtitleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });
      gsap.from(btnsRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.9,
        ease: "power3.out",
      });

      // Parallax effect on hero image
      gsap.to(imgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroImg}
        alt="خط إنتاج مصنع الألبان"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-center section-container">
        <h1
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6 drop-shadow-lg bg-background/70 backdrop-blur-sm rounded-2xl p-6 inline-block"
        >
          مصنع منتجات ألبان طازجة في الرياض
          <br />
          <span className="text-primary">جودة طبيعية كل يوم</span>
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        />
        <div ref={btnsRef} className="flex gap-4 justify-center flex-wrap">
          <a href="#products" className="dairy-btn-primary">
            استكشف منتجاتنا
          </a>
          <a href="#contact" className="dairy-btn-outline">
            تواصل معنا
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
