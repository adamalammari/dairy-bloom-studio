import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, Phone, Mail, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-form", {
        x: -60,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.from(".contact-info", {
        x: 60,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
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
    <section id="contact" ref={ref} className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">تواصل معنا</h2>
          <p className="section-subtitle">نسعد بتواصلك معنا للاستفسار أو طلب منتجاتنا</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="contact-form space-y-6">
            <input
              type="text"
              placeholder="الاسم"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-4 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary outline-none transition"
            />
            <input
              type="tel"
              placeholder="رقم الهاتف"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full p-4 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary outline-none transition"
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-4 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary outline-none transition"
            />
            <textarea
              placeholder="الرسالة"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-4 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary outline-none transition resize-none"
            />
            <button type="submit" className="dairy-btn-primary flex items-center gap-2 mx-auto">
              <Send size={20} />
              إرسال الرسالة
            </button>
          </form>
          <div className="contact-info space-y-8">
            <div className="flex items-start gap-4">
              <Phone className="text-primary mt-1 flex-shrink-0" size={28} />
              <div>
                <h4 className="font-bold text-foreground text-lg">الهاتف</h4>
                <p className="text-muted-foreground" dir="ltr">+966 11 XXX XXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-primary mt-1 flex-shrink-0" size={28} />
              <div>
                <h4 className="font-bold text-foreground text-lg">البريد الإلكتروني</h4>
                <p className="text-muted-foreground">info@dairy-factory.sa</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1 flex-shrink-0" size={28} />
              <div>
                <h4 className="font-bold text-foreground text-lg">العنوان</h4>
                <p className="text-muted-foreground">الرياض، المملكة العربية السعودية</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
