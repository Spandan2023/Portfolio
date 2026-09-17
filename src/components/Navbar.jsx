import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  FiArrowUpRight,
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
} from "react-icons/fi";

import { FaGithub, FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const GITHUB_URL = "https://github.com/Spandan2023";

const WHATSAPP_MESSAGE =
  "Hi Spandan, I came across your portfolio and would like to connect with you.";

const WHATSAPP_URL = `https://wa.me/918910711972?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

function Navbar({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* =========================
     SCROLL DETECTION
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================
     LOCK BODY ON MOBILE MENU
  ========================= */

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =========================
     NAVIGATION
  ========================= */

  const handleNavClick = (href) => {
    setMobileOpen(false);

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* =========================
     EXTERNAL LINKS
  ========================= */

  const openExternal = (url) => {
    setMobileOpen(false);

    window.open(url, "_blank", "noopener,noreferrer");
  };

  /* =========================
     THEME TOGGLE
  ========================= */

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  const isDark = theme === "dark";

  return (
    <header
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full
        transition-all
        duration-500

        ${
          scrolled
            ? `
              border-b
              border-zinc-900/[0.08]
              bg-white/90
              shadow-[0_8px_30px_rgba(0,0,0,0.05)]
              backdrop-blur-xl
              dark:border-white/[0.08]
              dark:bg-matte-charcoal/90
              dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)]
            `
            : "bg-transparent"
        }
      `}
    >
      <nav
        className="
          mx-auto
          flex
          h-[76px]
          max-w-7xl
          items-center
          justify-between
          px-6
          sm:px-8
          lg:px-10
        "
      >
        {/* =========================
            LOGO
        ========================= */}

        <button
          onClick={() => handleNavClick("#home")}
          className="group relative shrink-0 text-left"
          aria-label="Go to homepage"
        >
          <div className="flex items-center gap-3">
            <span
              className="
                font-space
                text-[22px]
                font-semibold
                tracking-[-0.04em]
                text-zinc-800
                transition-colors
                duration-300
                group-hover:text-regal-crimson
                dark:text-ash-white
                dark:group-hover:text-champagne-gold
              "
            >
              SPANDAN
              <span className="text-regal-crimson">.</span>
            </span>

            <span
              className="
                hidden
                h-px
                w-7
                bg-regal-crimson
                opacity-60
                transition-all
                duration-500
                group-hover:w-11
                group-hover:opacity-100
                sm:block
              "
            />
          </div>

          <span
            className="
              absolute
              -right-3
              -top-1
              hidden
              font-mono
              text-[7px]
              text-zinc-400
              dark:text-zinc-600
              sm:block
            "
          >
            01
          </span>
        </button>

        {/* =========================
            DESKTOP NAVIGATION
        ========================= */}

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="
                group
                relative
                flex
                items-center
                gap-2
                text-sm
                text-zinc-500
                transition-colors
                duration-300
                hover:text-zinc-800
                dark:text-zinc-500
                dark:hover:text-ash-white
              "
            >
              <span
                className="
                  font-mono
                  text-[8px]
                  text-zinc-400
                  transition-colors
                  duration-300
                  group-hover:text-regal-crimson
                  dark:text-zinc-600
                "
              >
                0{index + 1}
              </span>

              <span className="relative">
                {link.name}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-px
                    w-0
                    bg-champagne-gold
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </span>
            </button>
          ))}
        </div>

        {/* =========================
            DESKTOP ACTIONS
        ========================= */}

        <div className="hidden items-center gap-2.5 lg:flex">

          {/* THEME TOGGLE */}

          <button
            type="button"
            onClick={toggleTheme}
            className="
              group
              flex
              h-10
              w-10
              items-center
              justify-center
              border
              border-zinc-900/[0.10]
              bg-white
              text-zinc-600
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-champagne-gold
              hover:text-regal-crimson
              dark:border-white/[0.08]
              dark:bg-matte-surface
              dark:text-zinc-400
              dark:hover:border-champagne-gold
              dark:hover:text-champagne-gold
            "
            aria-label={
              isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={
              isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.span
                  key="sun"
                  initial={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.7,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <FiSun size={16} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.7,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMoon size={16} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* GITHUB */}

          <button
            type="button"
            onClick={() => openExternal(GITHUB_URL)}
            className="
              group
              flex
              items-center
              gap-2
              border
              border-zinc-900/[0.10]
              bg-white
              px-4
              py-2.5
              text-xs
              font-medium
              text-zinc-500
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-regal-crimson
              hover:text-zinc-800
              dark:border-white/[0.08]
              dark:bg-matte-surface
              dark:text-zinc-400
              dark:hover:border-regal-crimson
              dark:hover:text-ash-white
            "
            aria-label="Open GitHub profile"
          >
            <FaGithub
              size={14}
              className="
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />

            <span>GitHub</span>
          </button>

          {/* WHATSAPP */}

          <button
            type="button"
            onClick={() => openExternal(WHATSAPP_URL)}
            className="
              group
              flex
              items-center
              gap-2.5
              bg-regal-crimson
              px-5
              py-2.5
              text-xs
              font-semibold
              text-white
              shadow-[0_8px_24px_rgba(140,33,49,0.18)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#741b29]
              hover:shadow-[0_12px_30px_rgba(140,33,49,0.24)]
            "
            aria-label="Connect on WhatsApp"
          >
            <FaWhatsapp size={15} />

            <span>Let's Connect</span>

            <FiArrowUpRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </button>
        </div>

        {/* =========================
            MOBILE ACTIONS
        ========================= */}

        <div className="flex items-center gap-2 lg:hidden">

          {/* MOBILE THEME */}

          <button
            type="button"
            onClick={toggleTheme}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              border
              border-zinc-900/[0.10]
              bg-white
              text-zinc-600
              transition-all
              duration-300
              hover:border-champagne-gold
              hover:text-regal-crimson
              dark:border-white/[0.08]
              dark:bg-matte-surface
              dark:text-zinc-400
              dark:hover:border-champagne-gold
              dark:hover:text-champagne-gold
            "
            aria-label={
              isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.span
                  key="mobile-sun"
                  initial={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.7,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <FiSun size={17} />
                </motion.span>
              ) : (
                <motion.span
                  key="mobile-moon"
                  initial={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.7,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMoon size={17} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* MOBILE MENU */}

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              border
              border-zinc-900/[0.10]
              bg-white
              text-zinc-600
              transition-all
              duration-300
              hover:border-regal-crimson
              hover:text-regal-crimson
              dark:border-white/[0.08]
              dark:bg-matte-surface
              dark:text-zinc-400
              dark:hover:border-regal-crimson
              dark:hover:text-regal-crimson
            "
            aria-label={
              mobileOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <FiX size={20} />
            ) : (
              <FiMenu size={20} />
            )}
          </button>
        </div>
      </nav>

      {/* =========================
          MOBILE MENU
      ========================= */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="
              overflow-hidden
              border-t
              border-zinc-900/[0.08]
              bg-white/95
              backdrop-blur-xl
              dark:border-white/[0.08]
              dark:bg-matte-charcoal/95
              lg:hidden
            "
          >
            <div className="mx-auto max-w-7xl px-6 py-7 sm:px-8">

              {/* MOBILE HEADER */}

              <div className="mb-7 flex items-center justify-between">
                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-zinc-400
                    dark:text-zinc-600
                  "
                >
                  Navigation
                </span>

                <span
                  className="
                    font-mono
                    text-[9px]
                    text-zinc-400
                    dark:text-zinc-600
                  "
                >
                  SP / 2026
                </span>
              </div>

              {/* LINKS */}

              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.045,
                      duration: 0.3,
                    }}
                    onClick={() => handleNavClick(link.href)}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      border-b
                      border-zinc-900/[0.06]
                      py-4
                      text-left
                      dark:border-white/[0.06]
                    "
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="
                          font-mono
                          text-[9px]
                          text-zinc-400
                          transition-colors
                          duration-300
                          group-hover:text-regal-crimson
                          dark:text-zinc-600
                        "
                      >
                        0{index + 1}
                      </span>

                      <span
                        className="
                          text-base
                          font-medium
                          text-zinc-600
                          transition-colors
                          duration-300
                          group-hover:text-zinc-900
                          dark:text-zinc-400
                          dark:group-hover:text-ash-white
                        "
                      >
                        {link.name}
                      </span>
                    </div>

                    <FiArrowUpRight
                      size={16}
                      className="
                        text-zinc-400
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-regal-crimson
                        dark:text-zinc-600
                      "
                    />
                  </motion.button>
                ))}
              </div>

              {/* DIVIDER */}

              <div className="my-7 h-px bg-zinc-900/[0.08] dark:bg-white/[0.07]" />

              {/* MOBILE ACTIONS */}

              <div className="grid gap-3 sm:grid-cols-2">

                {/* GITHUB */}

                <button
                  type="button"
                  onClick={() => openExternal(GITHUB_URL)}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    border
                    border-zinc-900/[0.09]
                    bg-zinc-50
                    px-5
                    py-4
                    text-sm
                    font-medium
                    text-zinc-800
                    transition-all
                    duration-300
                    hover:border-regal-crimson
                    dark:border-white/[0.08]
                    dark:bg-matte-surface
                    dark:text-ash-white
                  "
                >
                  <span className="flex items-center gap-3">
                    <FaGithub
                      size={17}
                      className="text-zinc-500 dark:text-zinc-400"
                    />

                    GitHub
                  </span>

                  <FiArrowUpRight
                    size={17}
                    className="
                      text-zinc-400
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </button>

                {/* WHATSAPP */}

                <button
                  type="button"
                  onClick={() => openExternal(WHATSAPP_URL)}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    bg-regal-crimson
                    px-5
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#741b29]
                  "
                >
                  <span className="flex items-center gap-3">
                    <FaWhatsapp size={17} />

                    Let's Connect
                  </span>

                  <FiArrowUpRight
                    size={17}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </button>
              </div>

              {/* AVAILABILITY */}

              <div className="mt-6 flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-regal-crimson
                      opacity-40
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2
                      w-2
                      rounded-full
                      bg-regal-crimson
                    "
                  />
                </span>

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-zinc-400
                    dark:text-zinc-600
                  "
                >
                  Open to opportunities
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;