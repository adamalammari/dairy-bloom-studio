import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/966XXXXXXXXX"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float"
    aria-label="تواصل عبر واتساب"
  >
    <MessageCircle size={28} className="text-primary-foreground" />
  </a>
);

export default WhatsAppButton;
