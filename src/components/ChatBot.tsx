import { useState } from "react";
import { Bot, X, Send } from "lucide-react";

const defaultReplies: Record<string, string> = {
  "منتجات": "نقدم الحليب الطازج، اللبن، الزبادي، الجبن، القشطة والزبدة. جميعها طازجة يومياً!",
  "أسعار": "للاستفسار عن الأسعار، يرجى التواصل معنا عبر الهاتف أو البريد الإلكتروني.",
  "موقع": "مصنعنا يقع في مدينة الرياض، المملكة العربية السعودية.",
  "توصيل": "نوفر خدمة التوصيل عبر شاحنات مبردة لجميع أنحاء المملكة.",
};

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "مرحباً! كيف يمكنني مساعدتك اليوم؟", isUser: false },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { text: userMsg, isUser: true }]);
    setInput("");

    const reply =
      Object.entries(defaultReplies).find(([key]) =>
        userMsg.includes(key)
      )?.[1] || "شكراً لتواصلك! سيقوم فريقنا بالرد عليك قريباً. يمكنك أيضاً الاتصال بنا مباشرة.";

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: reply, isUser: false }]);
    }, 500);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-dairy flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-110"
        aria-label="مساعد الدردشة"
      >
        {open ? <X size={24} className="text-primary-foreground" /> : <Bot size={28} className="text-primary-foreground" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-h-96 bg-card rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden">
          <div className="gradient-dairy px-4 py-3">
            <h4 className="text-primary-foreground font-bold">مساعد مصنع الألبان</h4>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] p-3 rounded-xl text-sm ${
                  msg.isUser
                    ? "mr-auto bg-primary text-primary-foreground rounded-bl-none"
                    : "ml-auto bg-muted text-foreground rounded-br-none"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="اكتب رسالتك..."
              className="flex-1 p-2 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              onClick={handleSend}
              className="p-2 rounded-lg gradient-dairy text-primary-foreground"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
