import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  FiArrowUpRight,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { FaGithub } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const GITHUB_URL = "https://github.com/Spandan2023";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/spandan-guha-thakurta/";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  // Prevent page scrolling while mobile navigation is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href) => {
    setMobileOpen(false);

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const openExternal = (url) => {
    setMobileOpen(false);
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
            ? "border-b border-white/[0.07] bg-[#18181A]/90 backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">

        {/* =================================================
            LOGO
        ================================================== */}

        <button
          onClick={() => handleNavClick("#home")}
          className="group relative shrink-0 text-left"
          aria-label="Go to homepage"
        >
          <div className="flex items-center gap-3">

            <span className="font-space text-[22px] font-semibold tracking-[-0.04em] text-[#E4E4E7] transition-colors duration-300 group-hover:text-white">
              SPANDAN
              <span className="text-[#8C2131] transition-colors duration-300 group-hover:text-[#C1A673]">
                .
              </span>
            </span>

            <span className="hidden h-px w-7 bg-[#C1A673]/45 transition-all duration-500 group-hover:w-11 group-hover:bg-[#8C2131] sm:block" />
          </div>

          {/* Small index marker */}

          <span className="absolute -right-3 -top-1 hidden font-mono text-[7px] text-[#52525B] sm:block">
            01
          </span>
        </button>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="group relative flex items-center gap-2 text-sm text-[#71717A] transition-colors duration-300 hover:text-[#E4E4E7]"
            >
              <span className="font-mono text-[8px] text-[#3F3F46] transition-colors duration-300 group-hover:text-[#8C2131]">
                0{index + 1}
              </span>

              <span className="relative">
                {link.name}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#C1A673] transition-all duration-300 group-hover:w-full" />
              </span>
            </button>
          ))}
        </div>

        {/* =================================================
            DESKTOP ACTIONS
        ================================================== */}

        <div className="hidden items-center gap-3 lg:flex">

          {/* GitHub */}

          <button
            onClick={() => openExternal(GITHUB_URL)}
            className="
              group
              flex
              items-center
              gap-2.5
              border
              border-white/[0.08]
              bg-[#242427]
              px-4
              py-2.5
              text-xs
              font-medium
              text-[#A1A1AA]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[#C1A673]/35
              hover:text-[#E4E4E7]
            "
            aria-label="Open GitHub profile"
          >
            <FaGithub
              size={15}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            <span>GitHub</span>
          </button>

          {/* LinkedIn / Connect */}

          <button
            onClick={() => openExternal(LINKEDIN_URL)}
            className="
              group
              flex
              items-center
              gap-3
              bg-[#8C2131]
              px-5
              py-2.5
              text-xs
              font-semibold
              text-[#F4F4F5]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#9A2637]
              hover:shadow-[0_10px_28px_rgba(140,33,49,0.18)]
            "
            aria-label="Connect on LinkedIn"
          >
            <span>Let's Connect</span>

            <FiArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </div>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            border
            border-white/[0.08]
            bg-[#242427]/80
            text-[#A1A1AA]
            transition-all
            duration-300
            hover:border-[#C1A673]/35
            hover:text-[#E4E4E7]
            lg:hidden
          "
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <FiX size={21} />
          ) : (
            <FiMenu size={21} />
          )}
        </button>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

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
              border-white/[0.07]
              bg-[#18181A]/[0.98]
              backdrop-blur-xl
              lg:hidden
            "
          >
            <div className="mx-auto max-w-7xl px-6 py-7 sm:px-8">

              {/* Mobile header */}

              <div className="mb-7 flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#52525B]">
                  Navigation
                </span>

                <span className="font-mono text-[9px] text-[#3F3F46]">
                  SP / 2026
                </span>
              </div>

              {/* Links */}

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
                      border-white/[0.05]
                      py-4
                      text-left
                    "
                  >
                    <div className="flex items-center gap-4">

                      <span className="font-mono text-[9px] text-[#3F3F46] transition-colors duration-300 group-hover:text-[#8C2131]">
                        0{index + 1}
                      </span>

                      <span className="text-base font-medium text-[#A1A1AA] transition-colors duration-300 group-hover:text-[#E4E4E7]">
                        {link.name}
                      </span>

                    </div>

                    <FiArrowUpRight
                      size={16}
                      className="text-[#52525B] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C1A673]"
                    />
                  </motion.button>
                ))}
              </div>

              {/* Divider */}

              <div className="my-7 h-px bg-white/[0.07]" />

              {/* Mobile Actions */}

              <div className="grid gap-3 sm:grid-cols-2">

                <button
                  onClick={() => openExternal(GITHUB_URL)}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    border
                    border-white/[0.08]
                    bg-[#242427]
                    px-5
                    py-4
                    text-sm
                    font-medium
                    text-[#E4E4E7]
                    transition-all
                    duration-300
                    hover:border-[#C1A673]/35
                  "
                >
                  <span className="flex items-center gap-3">
                    <FaGithub
                      size={17}
                      className="text-[#A1A1AA]"
                    />

                    GitHub
                  </span>

                  <FiArrowUpRight
                    size={17}
                    className="text-[#52525B] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>

                <button
                  onClick={() => openExternal(LINKEDIN_URL)}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    bg-[#8C2131]
                    px-5
                    py-4
                    text-sm
                    font-semibold
                    text-[#F4F4F5]
                    transition-all
                    duration-300
                    hover:bg-[#9A2637]
                  "
                >
                  <span>
                    Let's Connect
                  </span>

                  <FiArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>

              </div>

              {/* Mobile availability */}

              <div className="mt-6 flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8C2131]/40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8C2131]" />
                </span>

                <span className="text-[9px] uppercase tracking-[0.2em] text-[#52525B]">
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