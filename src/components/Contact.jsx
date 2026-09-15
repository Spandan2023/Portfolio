import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMail,
  FiMessageCircle,
  FiLayers,
} from "react-icons/fi";

const EMAIL = "spandanguhathakurta@gmail.com";

const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

const LINKEDIN_URL = "https://www.linkedin.com/in/spandan-guha-thakurta/";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#18181A] px-6 py-28 text-[#E4E4E7] sm:py-32 lg:px-10 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Subtle architectural grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Matte atmospheric accents */}
      <div className="pointer-events-none absolute -left-48 top-1/3 h-[500px] w-[500px] rounded-full bg-[#8C2131]/[0.055] blur-[160px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-[#C1A673]/[0.025] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =================================================
            SECTION LABEL
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center justify-center gap-4"
        >
          <span className="h-px w-10 bg-[#8C2131]" />

          <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C1A673]">
            <FiLayers size={12} strokeWidth={1.5} />
            Let's talk
          </span>

          <span className="h-px w-10 bg-[#8C2131]" />
        </motion.div>

        {/* =================================================
            MAIN CTA PANEL
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative overflow-hidden border border-white/[0.09] bg-[#242427] shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]"
        >
          {/* Architectural top border */}
          <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-[#8C2131] via-[#8C2131] to-[#C1A673]" />

          {/* Corner details */}
          <div className="absolute left-6 top-6 h-8 w-8 border-l border-t border-[#C1A673]/20" />

          <div className="absolute bottom-6 right-6 h-8 w-8 border-b border-r border-[#8C2131]/30" />

          <div className="relative px-6 py-16 text-center sm:px-12 md:px-20 md:py-24 lg:px-28">
            {/* Small label */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mb-7 text-[10px] font-medium uppercase tracking-[0.3em] text-[#71717A]"
            >
              Have something worth building?
            </motion.p>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              className="font-space mx-auto max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.035em] text-[#E4E4E7] sm:text-6xl md:text-7xl lg:text-[5.2rem]"
            >
              Let's turn an idea
              <br />
              <span className="text-[#8C2131]">into something real.</span>
            </motion.h2>

            {/* Divider */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="mx-auto mt-9 h-px bg-[#C1A673]/50"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.45,
                duration: 0.6,
              }}
              className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#A1A1AA] md:text-lg"
            >
              Whether you're looking for someone to build, collaborate, solve a
              problem, or simply exchange ideas about technology and digital
              products, I'd be glad to hear from you.
            </motion.p>

            {/* =================================================
                ACTIONS
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
              className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              {/* Email CTA */}
              <a
                href={GMAIL_COMPOSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-[210px] items-center justify-center gap-3 bg-[#8C2131] px-7 py-4 text-sm font-semibold text-[#F4F4F5] transition-all duration-300 hover:-translate-y-1 hover:bg-[#9D293B] hover:shadow-[0_14px_35px_rgba(140,33,49,0.22)]"
              >
                <FiMail size={18} strokeWidth={1.6} />
                Send me an email
                <FiArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              {/* LinkedIn CTA */}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-[210px] items-center justify-center gap-3 border border-[#C1A673]/35 bg-transparent px-7 py-4 text-sm font-semibold text-[#E4E4E7] transition-all duration-300 hover:-translate-y-1 hover:border-[#C1A673] hover:bg-[#C1A673]/[0.06]"
              >
                <FiMessageCircle
                  size={18}
                  strokeWidth={1.5}
                  className="text-[#C1A673]"
                />
                Connect on LinkedIn
                <FiArrowUpRight
                  size={17}
                  className="text-[#C1A673] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>

            {/* =================================================
                AVAILABILITY
            ================================================== */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.8,
              }}
              className="mt-11 flex items-center justify-center gap-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8C2131] opacity-40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8C2131]" />
              </span>

              <span className="text-xs tracking-wide text-[#71717A]">
                Open to opportunities, collaborations & interesting problems
              </span>
            </motion.div>
          </div>

          {/* =================================================
              BOTTOM METADATA
          ================================================== */}

          <div className="flex flex-col justify-between gap-3 border-t border-white/[0.08] px-6 py-5 sm:flex-row sm:items-center sm:px-8">
            <span className="text-[9px] uppercase tracking-[0.28em] text-[#52525B]">
              Spandan Guha Thakurta
            </span>

            <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-[#52525B]">
              <span>Available for conversations</span>

              <span className="h-1 w-1 rounded-full bg-[#C1A673]" />
            </div>
          </div>
        </motion.div>

        {/* =================================================
            FINAL LINE
        ================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            duration: 0.6,
          }}
          className="mt-10 text-center"
        >
          <span className="font-space text-sm text-[#52525B]">
            Technology <span className="mx-2 text-[#8C2131]">×</span>
            Ideas <span className="mx-2 text-[#C1A673]">×</span>
            Execution
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
