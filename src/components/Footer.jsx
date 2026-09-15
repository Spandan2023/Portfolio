import {
  FiArrowUpRight,
  FiArrowUp,
  FiHeart,
} from "react-icons/fi";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

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
      className="relative overflow-hidden border-t border-white/[0.07] bg-[#18181A] text-[#E4E4E7]"
    >
      {/* =====================================================
          BACKGROUND ARCHITECTURE
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Fine vertical architectural line */}
      <div className="pointer-events-none absolute left-[8%] top-0 h-full w-px bg-white/[0.025]" />
      <div className="pointer-events-none absolute right-[8%] top-0 h-full w-px bg-white/[0.025]" />

      {/* Restrained atmospheric accent */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#8C2131]/[0.025] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">

        {/* =====================================================
            TOP LABEL
        ====================================================== */}

        <div className="mb-14 flex items-center gap-4">
          <span className="h-px w-8 bg-[#8C2131]" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#71717A]">
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

                <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#52525B]">
                  Portfolio
                </span>

                <span className="h-px w-8 bg-[#C1A673]/50 transition-all duration-500 group-hover:w-12 group-hover:bg-[#8C2131]" />
              </div>

              <div className="mt-4 font-space text-4xl font-semibold tracking-[-0.045em] text-[#E4E4E7] transition-colors duration-300 group-hover:text-white sm:text-5xl">
                SPANDAN
                <span className="text-[#8C2131] transition-colors duration-300 group-hover:text-[#C1A673]">
                  .
                </span>
              </div>
            </button>

            <p className="mt-7 max-w-md text-sm leading-7 text-[#71717A]">
              Building at the intersection of technology, AI, and business —
              with curiosity, intention, and a bias toward creating.
            </p>

            {/* Social buttons */}

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
                      border-white/[0.08]
                      bg-[#242427]
                      text-[#71717A]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#8C2131]/60
                      hover:bg-[#8C2131]/[0.06]
                      hover:text-[#C1A673]
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
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#52525B]">
                Navigate
              </span>

              <span className="h-px flex-1 bg-white/[0.06]" />
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
                    text-[#71717A]
                    transition-colors
                    duration-300
                    hover:text-[#E4E4E7]
                  "
                >
                  <span className="font-mono text-[9px] text-[#3F3F46] transition-colors duration-300 group-hover:text-[#8C2131]">
                    0{index + 1}
                  </span>

                  <span className="relative">
                    {link.name}

                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C1A673] transition-all duration-300 group-hover:w-full" />
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
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#52525B]">
                Connect
              </span>

              <span className="h-px flex-1 bg-white/[0.06]" />
            </div>

            <p className="max-w-xs text-sm leading-6 text-[#71717A]">
              Have an idea, opportunity, or simply want to talk technology?
            </p>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-3
                border-b
                border-[#C1A673]/40
                pb-2
                text-sm
                font-medium
                text-[#E4E4E7]
                transition-colors
                duration-300
                hover:border-[#8C2131]
                hover:text-[#C1A673]
              "
            >
              Start a conversation

              <FiArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            {/* Availability */}

            <div className="mt-8 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8C2131]/40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8C2131]" />
              </span>

              <span className="text-[10px] uppercase tracking-[0.18em] text-[#52525B]">
                Open to opportunities
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            LARGE PHILOSOPHY LINE
        ====================================================== */}

        <div className="mt-20 border-y border-white/[0.06] py-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <p className="font-space text-lg tracking-[-0.02em] text-[#A1A1AA]">
              Build.
              <span className="mx-2 text-[#8C2131]">Learn.</span>
              Create.
            </p>

            <p className="text-[10px] uppercase tracking-[0.22em] text-[#3F3F46]">
              Keep moving forward.
            </p>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}

          <p className="text-[10px] text-[#52525B]">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#71717A]">
              Spandan Guha Thakurta
            </span>
            . All rights reserved.
          </p>

          {/* Built with */}

          <p className="flex items-center gap-2 text-[10px] text-[#52525B]">
            Designed & built with

            <FiHeart
              size={12}
              className="text-[#C1A673]"
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
              text-[#71717A]
              transition-colors
              duration-300
              hover:text-[#E4E4E7]
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
                border-white/[0.08]
                bg-[#242427]
                transition-all
                duration-300
                group-hover:-translate-y-1
                group-hover:border-[#C1A673]/50
              "
            >
              <FiArrowUp
                size={14}
                className="text-[#C1A673]"
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;