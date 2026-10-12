import "./global.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Hanif Mobile Care Solutions",
  description: "Reliable mobile repair, care, and accessories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-brand-100 selection:text-brand-900">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

