import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "@/components/branding/SplashScreen";

const navItems = [
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/co-curricular", label: "Co-curricular" },
  { to: "/facilities", label: "Facilities" },
  { to: "/life-at-ankuram", label: "Life at Ankuram" },
  { to: "/admissions", label: "Admissions" },
  { to: "/ntt-training", label: "NTT Training" },
  { to: "/franchise", label: "Franchise" },
  { to: "/media-gallery", label: "Media" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const seen = localStorage.getItem("ankuram_splash_shown");
    if (!seen) {
      setShowSplash(true);
      const id = setTimeout(() => {
        setShowSplash(false);
        localStorage.setItem("ankuram_splash_shown", "1");
      }, 2600);
      return () => clearTimeout(id);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {showSplash && <SplashScreen />}
      <header className={`sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-border transition-shadow ${scrolled ? "shadow-sm" : "shadow-none"}`}>
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src="https://cdn.builder.io/api/v1/image/assets%2Fca48bdd83f664eed8f79c5ce34142229%2Fd3d4d84ad92947b08a3d91411fd8a979?format=webp&width=220" alt="Ankuram Kids" className="h-10 md:h-12 w-auto logo-glow" />
              <div className="leading-tight">
                <div className="text-lg font-extrabold font-display tracking-tight">ANKURAM KIDS</div>
                <div className="text-[11px] text-slate-500">A unit of Ekagrata Shiksha Foundation</div>
              </div>
            </Link>
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
                      isActive ? "bg-primary/10 text-primary" : "hover:bg-slate-100"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <Link to="/admissions" className="btn-gradient text-sm font-bold">Apply Now</Link>
              <button
                className="lg:hidden inline-flex items-center justify-center rounded-full p-2 hover:bg-slate-100"
                aria-label="Toggle Menu"
                onClick={() => setMobileOpen((v) => !v)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0 6.75c0-.414.336-.75.75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm.75 6a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5H4.5Z" clipRule="evenodd" /></svg>
              </button>
            </div>
          </div>
          {mobileOpen && (
            <div className="lg:hidden pb-3 flex flex-wrap gap-2">
              {navItems.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
                      isActive ? "bg-primary/10 text-primary" : "hover:bg-slate-100"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </header>
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="mt-16 bg-slate-50 border-t border-border">
        <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="/ankuram-favicon.svg" className="h-10 w-10" />
              <div>
                <div className="font-extrabold font-display">ANKURAM KIDS</div>
                <div className="text-xs text-slate-500">Where Little Minds Grow Big Dreams</div>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-600">Premium preschool in Odisha with modern facilities, playful learning, and expert educators.</p>
          </div>
          <div>
            <div className="font-semibold mb-2">Quick Links</div>
            <ul className="space-y-2 text-sm">
              {navItems.slice(0,6).map(n => (<li key={n.to}><Link className="hover:text-primary" to={n.to}>{n.label}</Link></li>))}
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Get in touch</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>info@ankuramkids.com</li>
              <li>+91-00000-00000</li>
              <li>Odisha, India</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Apply</div>
            <Link to="/admissions" className="btn-gradient inline-block">Apply Now</Link>
            <div className="mt-3 text-xs text-slate-500">NTT Training • Franchise Opportunities</div>
          </div>
        </div>
        <div className="border-t border-border py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} ANKURAM KIDS. All rights reserved.</div>
      </footer>

      <Link to="/admissions" className="fixed bottom-5 right-5 btn-gradient shadow-xl text-sm font-bold animate-[float_6s_ease-in-out_infinite]">Apply Now</Link>
    </div>
  );
}
