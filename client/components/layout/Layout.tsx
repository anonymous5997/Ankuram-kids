import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "@/components/branding/SplashScreen";
import AwardModal from "@/components/branding/AwardModal";

const navModel = [
  {
    label: "About Us",
    to: "/about",
    submenu: [
      { label: "Ankuram Kids Preschool", to: "/about" },
      { label: "Life at Ankuram", to: "/life-at-ankuram" },
      { label: "Leadership Team", to: "/leadership-team" },
      { label: "Corporate Tie-ups", to: "/corporate-tieups" },
    ],
  },
  { label: "Curriculum", to: "/curriculum" },
  { label: "Onsite Daycare", to: "/onsite-daycare" },
  {
    label: "Admissions",
    to: "/admissions",
    submenu: [
      { label: "Admission Details", to: "/admissions" },
      { label: "Centre Locator", to: "/centre-locator" },
      { label: "FAQ's", to: "/faqs" },
    ],
  },
  { label: "Franchise", to: "/franchise" },
  { label: "NTT Training", to: "/ntt-training" },
  { label: "Contact Us", to: "/contact" },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [awardOpen, setAwardOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const force = params.get("splash") === "1";
    const seen = localStorage.getItem("ankuram_splash_shown");
    if (force || !seen) {
      setShowSplash(true);
      const id = setTimeout(() => {
        setShowSplash(false);
        if (!force) localStorage.setItem("ankuram_splash_shown", "1");
      }, 2200);
      return () => clearTimeout(id);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const forceAward = params.get("award") === "1";
    const shown = sessionStorage.getItem("ankuram_award_shown");
    if ((location.pathname === "/" && !shown) || forceAward) {
      const id = setTimeout(() => setAwardOpen(true), 600);
      return () => clearTimeout(id);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {showSplash && <SplashScreen />}
      {awardOpen && (
        <AwardModal
          open={awardOpen}
          onClose={() => {
            setAwardOpen(false);
            sessionStorage.setItem("ankuram_award_shown", "1");
          }}
          imageSrc=""
        />
      )}
      <header
        className={`sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-border transition-shadow ${scrolled ? "shadow-sm" : "shadow-none"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-3"
              aria-label="Go to home"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fca48bdd83f664eed8f79c5ce34142229%2Fd3d4d84ad92947b08a3d91411fd8a979?format=webp&width=220"
                alt="Ankuram Kids"
                className="h-10 md:h-12 w-auto logo-glow"
              />
            </Link>
            <nav className="hidden lg:flex items-center gap-2">
              {navModel.map((item) => (
                <div key={item.label} className="relative group">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `nav-link px-3 py-2 rounded-full text-[15px] font-semibold transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-slate-100"
                      }`
                    }
                  >
                    <span className="uppercase tracking-wide">
                      {item.label}
                    </span>
                    {item.submenu && (
                      <svg
                        className="ml-1 inline-block h-3 w-3 opacity-70"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                      </svg>
                    )}
                  </NavLink>
                  {item.submenu && (
                    <div className="absolute left-0 top-full hidden min-w-[240px] translate-y-1 rounded-xl border border-border bg-white p-2 shadow-xl group-hover:block">
                      {item.submenu.map((s) => (
                        <NavLink
                          key={s.to}
                          to={s.to}
                          className={({ isActive }) =>
                            `block rounded-md px-4 py-2 text-sm ${isActive ? "bg-primary/10 text-primary" : "hover:bg-slate-100"}`
                          }
                        >
                          {s.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <Link to="/admissions" className="btn-gradient text-sm font-bold">
                Apply Now
              </Link>
              <button
                className="lg:hidden inline-flex items-center justify-center rounded-full p-2 hover:bg-slate-100"
                aria-label="Toggle Menu"
                onClick={() => setMobileOpen((v) => !v)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0 6.75c0-.414.336-.75.75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm.75 6a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5H4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          {mobileOpen && (
            <div className="lg:hidden pb-3 grid gap-2">
              {navModel.map((n) => (
                <div key={n.label} className="">
                  <NavLink
                    to={n.to}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-lg text-sm font-semibold ${isActive ? "bg-primary/10 text-primary" : "hover:bg-slate-100"}`
                    }
                  >
                    {n.label}
                  </NavLink>
                  {n.submenu && (
                    <div className="ml-3 mt-1 grid gap-1">
                      {n.submenu.map((s) => (
                        <NavLink
                          key={s.to}
                          to={s.to}
                          className={({ isActive }) =>
                            `block px-3 py-1.5 rounded-md text-sm ${isActive ? "bg-primary/10 text-primary" : "hover:bg-slate-100"}`
                          }
                        >
                          {s.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </header>
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
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
                <div className="text-xs text-slate-500">
                  Where Little Minds Grow Big Dreams
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Premium preschool in Odisha with modern facilities, playful
              learning, and expert educators.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-2">Quick Links</div>
            <ul className="space-y-2 text-sm">
              {navModel.slice(0, 6).map((n) => (
                <li key={n.to}>
                  <Link className="hover:text-primary" to={n.to}>
                    {n.label}
                  </Link>
                </li>
              ))}
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
            <Link to="/admissions" className="btn-gradient inline-block">
              Apply Now
            </Link>
            <div className="mt-3 text-xs text-slate-500">
              NTT Training • Franchise Opportunities
            </div>
          </div>
        </div>
        <div className="border-t border-border py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} ANKURAM KIDS. All rights reserved.
        </div>
      </footer>

      <Link
        to="/admissions"
        className="fixed bottom-5 right-5 btn-gradient shadow-xl text-sm font-bold animate-[float_6s_ease-in-out_infinite]"
      >
        Apply Now
      </Link>
    </div>
  );
}
