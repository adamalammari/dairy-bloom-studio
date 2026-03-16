import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-title", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8,
        scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" },
      });

      gsap.fromTo(".contact-form-card", { x: -80, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%", toggleActions: "play none none none" },
      });

      gsap.fromTo(".contact-info-card", { x: 80, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%", toggleActions: "play none none none" },
      });

      gsap.fromTo(".contact-info-item", { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.12, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-info-card", start: "top 80%", toggleActions: "play none none none" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-muted/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16 contact-title">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            تواصل معنا
          </span>
          <h2 className="section-title">نحن هنا لخدمتك</h2>
          <p className="section-subtitle">نسعد بتواصلك معنا للاستفسار أو طلب منتجاتنا</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Form - takes 3 cols */}
          <div className="lg:col-span-3 contact-form-card">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-xl border border-border/50 space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="text-primary" size={24} />
                <h3 className="text-xl font-bold text-foreground">أرسل لنا رسالة</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text" placeholder="الاسم" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full p-4 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-300"
                />
                <input
                  type="tel" placeholder="رقم الهاتف" required value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full p-4 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-300"
                />
              </div>
              <input
                type="email" placeholder="البريد الإلكتروني" required value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full p-4 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-300"
              />
              <textarea
                placeholder="اكتب رسالتك هنا..." required rows={5} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full p-4 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-300 resize-none"
              />
              <button type="submit" className="dairy-btn-primary flex items-center gap-2 w-full justify-center text-lg">
                <Send size={20} />
                إرسال الرسالة
              </button>
            </form>
          </div>

          {/* Info - takes 2 cols */}
          <div className="lg:col-span-2 contact-info-card space-y-5">
            <div className="contact-info-item bg-card rounded-2xl p-6 shadow-lg border border-border/50 flex items-start gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={22} />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg mb-1">الهاتف</h4>
                <p className="text-muted-foreground" dir="ltr">+966 11 XXX XXXX</p>
              </div>
            </div>

            <div className="contact-info-item bg-card rounded-2xl p-6 shadow-lg border border-border/50 flex items-start gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={22} />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg mb-1">البريد الإلكتروني</h4>
                <p className="text-muted-foreground">info@dairy-factory.sa</p>
              </div>
            </div>

            <div className="contact-info-item bg-card rounded-2xl p-6 shadow-lg border border-border/50 flex items-start gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={22} />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg mb-1">العنوان</h4>
                <p className="text-muted-foreground">الرياض، المملكة العربية السعودية</p>
              </div>
            </div>

            <div className="contact-info-item bg-card rounded-2xl p-6 shadow-lg border border-border/50 flex items-start gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Clock className="text-accent" size={22} />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg mb-1">ساعات العمل</h4>
                <p className="text-muted-foreground">السبت - الخميس: 8 صباحاً - 5 مساءً</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
