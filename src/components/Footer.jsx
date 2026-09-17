import {
  FiArrowUpRight,
  FiArrowUp,
  FiHeart,
} from "react-icons/fi";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const WHATSAPP_MESSAGE =
  "Hi Spandan, I came across your portfolio and would like to connect with you.";

const WHATSAPP_URL = `https://wa.me/918910711972?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Spandan2023",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/spandan-guha-thakurta/",
    icon: FaLinkedin,
  },
];

function Footer() {
  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="
        relative
        overflow-hidden
        border-t
        border-zinc-900/[0.08]
        bg-zinc-50
        text-zinc-800
        transition-colors
        duration-500
        dark:border-white/[0.08]
        dark:bg-matte-charcoal
        dark:text-ash-white
      "
    >
      {/* =====================================================
          BACKGROUND ARCHITECTURE
      ====================================================== */}

      {/* Light grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-70
          dark:hidden
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(39,39,42,0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(39,39,42,0.045) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Dark grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          hidden
          opacity-70
          dark:block
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.018) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.018) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Fine vertical architectural lines */}

      <div className="pointer-events-none absolute left-[8%] top-0 h-full w-px bg-zinc-900/[0.035] dark:bg-white/[0.025]" />

      <div className="pointer-events-none absolute right-[8%] top-0 h-full w-px bg-zinc-900/[0.035] dark:bg-white/[0.025]" />

      {/* Restrained atmospheric accent */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          left-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-regal-crimson/[0.035]
          blur-[130px]
          dark:bg-regal-crimson/[0.07]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">

        {/* =====================================================
            TOP LABEL
        ====================================================== */}

        <div className="mb-14 flex items-center gap-4">
          <span className="h-px w-8 bg-regal-crimson" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-zinc-500 dark:text-zinc-500">
            End of page
          </span>
        </div>

        {/* =====================================================
            MAIN FOOTER GRID
        ====================================================== */}

        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* =================================================
              BRAND / CLOSING STATEMENT
          ================================================== */}

          <div className="max-w-xl">
            <button
              onClick={() => scrollToSection("#home")}
              className="group text-left"
              aria-label="Return to homepage"
            >
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-400 dark:text-zinc-600">
                  Portfolio
                </span>

                <span className="h-px w-8 bg-champagne-gold opacity-50 transition-all duration-500 group-hover:w-12 group-hover:bg-regal-crimson" />
              </div>

              <div
                className="
                  mt-4
                  font-space
                  text-4xl
                  font-semibold
                  tracking-[-0.045em]
                  text-zinc-800
                  transition-colors
                  duration-300
                  group-hover:text-zinc-950
                  dark:text-ash-white
                  dark:group-hover:text-white
                  sm:text-5xl
                "
              >
                SPANDAN
                <span className="text-regal-crimson transition-colors duration-300 group-hover:text-champagne-gold">
                  .
                </span>
              </div>
            </button>

            <p
              className="
                mt-7
                max-w-md
                text-sm
                leading-7
                text-zinc-500
                transition-colors
                duration-500
                dark:text-zinc-500
              "
            >
              Building at the intersection of technology, AI, and business —
              with curiosity, intention, and a bias toward creating.
            </p>

            {/* =================================================
                SOCIAL BUTTONS
            ================================================== */}

            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Spandan's ${social.name}`}
                    title={`Visit Spandan's ${social.name}`}
                    className="
                      group
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      border
                      border-zinc-900/[0.10]
                      bg-white
                      text-zinc-500
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-regal-crimson
                      hover:bg-regal-crimson/[0.05]
                      hover:text-regal-crimson
                      dark:border-white/[0.08]
                      dark:bg-matte-surface
                      dark:text-zinc-500
                      dark:hover:border-regal-crimson
                      dark:hover:bg-regal-crimson/[0.08]
                      dark:hover:text-champagne-gold
                    "
                  >
                    <Icon
                      size={17}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================== */}

          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600">
                Navigate
              </span>

              <span className="h-px flex-1 bg-zinc-900/[0.08] dark:bg-white/[0.07]" />
            </div>

            <nav
              aria-label="Footer navigation"
              className="grid grid-cols-2 gap-x-8 gap-y-4"
            >
              {footerLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    text-left
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

                  <span className="relative">
                    {link.name}

                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-champagne-gold transition-all duration-300 group-hover:w-full" />
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* =================================================
              CONNECT
          ================================================== */}

          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600">
                Connect
              </span>

              <span className="h-px flex-1 bg-zinc-900/[0.08] dark:bg-white/[0.07]" />
            </div>

            <p
              className="
                max-w-xs
                text-sm
                leading-6
                text-zinc-500
                transition-colors
                duration-500
                dark:text-zinc-500
              "
            >
              Have an idea, opportunity, or simply want to talk technology?
            </p>

            {/* =================================================
                WHATSAPP CTA
            ================================================== */}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Spandan on WhatsApp"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-3
                border-b
                border-champagne-gold/40
                pb-2
                text-sm
                font-medium
                text-zinc-800
                transition-colors
                duration-300
                hover:border-regal-crimson
                hover:text-regal-crimson
                dark:text-ash-white
                dark:hover:text-champagne-gold
              "
            >
              <FaWhatsapp
                size={15}
                className="
                  text-champagne-gold
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              Start a conversation

              <FiArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>

            {/* Availability */}

            <div className="mt-8 flex items-center gap-3">
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

                <span className="relative inline-flex h-2 w-2 rounded-full bg-regal-crimson" />
              </span>

              <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600">
                Open to opportunities
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            LARGE PHILOSOPHY LINE
        ====================================================== */}

        <div className="mt-20 border-y border-zinc-900/[0.08] py-8 transition-colors duration-500 dark:border-white/[0.08]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-space text-lg tracking-[-0.02em] text-zinc-600 dark:text-ash-muted">
              Build.
              <span className="mx-2 text-regal-crimson">Learn.</span>
              Create.
            </p>

            <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-400 dark:text-zinc-600">
              Keep moving forward.
            </p>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}

          <p className="text-[10px] text-zinc-400 dark:text-zinc-600">
            © {new Date().getFullYear()}{" "}
            <span className="text-zinc-500 dark:text-zinc-500">
              Spandan Guha Thakurta
            </span>
            . All rights reserved.
          </p>

          {/* Built with */}

          <p className="flex items-center gap-2 text-[10px] text-zinc-400 dark:text-zinc-600">
            Designed & built with

            <FiHeart
              size={12}
              className="text-champagne-gold"
            />

            using React.
          </p>

          {/* Back to top */}

          <button
            onClick={() => scrollToSection("#home")}
            aria-label="Back to top"
            className="
              group
              flex
              items-center
              gap-3
              self-start
              text-[10px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-zinc-500
              transition-colors
              duration-300
              hover:text-zinc-800
              dark:text-zinc-500
              dark:hover:text-ash-white
              sm:self-auto
            "
          >
            Back to top

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                border
                border-zinc-900/[0.10]
                bg-white
                transition-all
                duration-300
                group-hover:-translate-y-1
                group-hover:border-champagne-gold
                dark:border-white/[0.08]
                dark:bg-matte-surface
              "
            >
              <FiArrowUp
                size={14}
                className="text-champagne-gold"
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;