const Footer = () => (
  <footer className="gradient-dairy py-12">
    <div className="section-container text-center">
      <h3 className="text-2xl font-bold text-primary-foreground mb-4">مصنع الألبان</h3>
      <p className="text-primary-foreground/80 mb-6">
        جودة طبيعية كل يوم – الرياض، المملكة العربية السعودية
      </p>
      <div className="border-t border-primary-foreground/20 pt-6">
        <p className="text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} مصنع الألبان. جميع الحقوق محفوظة.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
