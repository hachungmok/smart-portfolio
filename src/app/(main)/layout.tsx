import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ChatbotWidget from "@/components/chatbot/ChatbotWidget";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
      <ChatbotWidget />
    </>
  );
}
