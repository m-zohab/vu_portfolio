import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-paper">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="ambient-glow ambient-glow-purple ambient-animation left-[-10rem] top-[10rem]" />
        <div
          className="ambient-glow ambient-glow-gold ambient-animation right-[-10rem] top-[35rem]"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Main Page Content */}
      <ScrollToTop />
      <Navbar />
      <main key={location.pathname} className="page-enter flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
