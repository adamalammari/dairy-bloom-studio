import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MapPin, ArrowUp, Milk } from "lucide-react";
import heroImg from "@/assets/hero-dairy.jpg";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on background image
      gsap.to(bgRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(".footer-col", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 90%", toggleActions: "play none none none" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer ref={ref} className="relative overflow-hidden">
      {/* Parallax Background */}
      <img
        ref={bgRef}
        src={heroImg}
        alt=""
        className="absolute inset-0 w-full h-[140%] object-cover -top-[20%]"
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/90 backdrop-blur-sm" />

      <div className="relative z-10">
        <div className="section-container py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div className="footer-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl gradient-dairy flex items-center justify-center">
                  <Milk className="text-primary-foreground" size={22} />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground">مصنع الألبان</h3>
              </div>
              <p className="text-primary-foreground/70 leading-relaxed mb-6">
                نقدم منتجات ألبان طازجة وطبيعية بأعلى معايير الجودة والسلامة الغذائية من قلب الرياض.
              </p>
              <div className="flex gap-3">
                {["facebook", "twitter", "instagram"].map((s) => (
                  <a key={s} href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary/50 flex items-center justify-center transition-all duration-300 text-primary-foreground/70 hover:text-primary-foreground text-sm font-bold uppercase">
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="text-lg font-bold text-primary-foreground mb-5 border-b border-primary-foreground/20 pb-2">روابط سريعة</h4>
              <ul className="space-y-3">
                {[
                  { label: "الرئيسية", href: "#hero" },
                  { label: "من نحن", href: "#about" },
                  { label: "منتجاتنا", href: "#products" },
                  { label: "مراحل الإنتاج", href: "#production" },
                  { label: "تواصل معنا", href: "#contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-primary-foreground/70 hover:text-primary hover:pr-2 transition-all duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-col">
              <h4 className="text-lg font-bold text-primary-foreground mb-5 border-b border-primary-foreground/20 pb-2">تواصل معنا</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="text-primary flex-shrink-0" size={18} />
                  <span className="text-primary-foreground/70" dir="ltr">+966 11 XXX XXXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-primary flex-shrink-0" size={18} />
                  <span className="text-primary-foreground/70">info@dairy-factory.sa</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary flex-shrink-0" size={18} />
                  <span className="text-primary-foreground/70">الرياض، المملكة العربية السعودية</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10">
          <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} مصنع الألبان. جميع الحقوق محفوظة.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-all duration-300 text-primary-foreground"
              aria-label="العودة للأعلى"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
