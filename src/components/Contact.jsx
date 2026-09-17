import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMail,
  FiLayers,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const EMAIL = "spandanguhathakurta@gmail.com";

const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

const WHATSAPP_MESSAGE =
  "Hi Spandan, I came across your portfolio and would like to connect with you.";

const WHATSAPP_URL = `https://wa.me/918910711972?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-zinc-50
        px-6
        py-28
        text-zinc-800
        transition-colors
        duration-500
        dark:bg-matte-charcoal
        dark:text-ash-white
        sm:py-32
        lg:px-10
        lg:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Architectural grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-70
          dark:opacity-40
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(39,39,42,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(39,39,42,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Dark-mode grid overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          hidden
          opacity-40
          dark:block
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(228,228,231,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(228,228,231,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Architectural vertical lines */}
      <div
        className="
          pointer-events-none
          absolute
          left-[7%]
          top-0
          h-full
          w-px
          bg-zinc-300
          dark:bg-zinc-700
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[7%]
          top-0
          h-full
          w-px
          bg-zinc-300
          dark:bg-zinc-700
        "
      />

      {/* Matte atmospheric accents */}
      <div
        className="
          pointer-events-none
          absolute
          -left-48
          top-1/3
          h-[500px]
          w-[500px]
          rounded-full
          bg-regal-crimson/5
          blur-[160px]
          dark:bg-regal-crimson/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-48
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-champagne-gold/5
          blur-[150px]
          dark:bg-champagne-gold/10
        "
      />

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
          <span className="h-px w-10 bg-regal-crimson" />

          <span
            className="
              flex
              items-center
              gap-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-champagne-gold
            "
          >
            <FiLayers size={12} strokeWidth={1.5} />
            Let's talk
          </span>

          <span className="h-px w-10 bg-regal-crimson" />
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
          className="
            relative
            overflow-hidden
            border
            border-zinc-800
            bg-white
            shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]
            transition-colors
            duration-500
            dark:border-zinc-600
            dark:bg-matte-surface
            dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
          "
        >
          {/* Architectural top border */}
          <div className="absolute left-0 top-0 h-[2px] w-full bg-regal-crimson" />

          {/* Corner details */}
          <div
            className="
              absolute
              left-6
              top-6
              h-8
              w-8
              border-l
              border-t
              border-champagne-gold
              opacity-40
              dark:opacity-30
            "
          />

          <div
            className="
              absolute
              bottom-6
              right-6
              h-8
              w-8
              border-b
              border-r
              border-regal-crimson
              opacity-50
              dark:opacity-40
            "
          />

          <div
            className="
              relative
              px-6
              py-16
              text-center
              sm:px-12
              md:px-20
              md:py-24
              lg:px-28
            "
          >
            {/* Small label */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="
                mb-7
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-zinc-500
                dark:text-zinc-400
              "
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
              className="
                mx-auto
                max-w-4xl
                font-space
                text-5xl
                font-semibold
                leading-[1.02]
                tracking-[-0.035em]
                text-zinc-800
                transition-colors
                duration-500
                dark:text-ash-white
                sm:text-6xl
                md:text-7xl
                lg:text-[5.2rem]
              "
            >
              Let's turn an idea
              <br />
              <span className="text-regal-crimson">
                into something real.
              </span>
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
              className="
                mx-auto
                mt-9
                h-px
                bg-champagne-gold
                opacity-60
              "
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
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-base
                leading-8
                text-zinc-600
                transition-colors
                duration-500
                dark:text-zinc-300
                md:text-lg
              "
            >
              Whether you're looking for someone to build, collaborate, solve
              a problem, or simply exchange ideas about technology and digital
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
              className="
                mt-11
                flex
                flex-col
                items-center
                justify-center
                gap-4
                sm:flex-row
              "
            >
              {/* =================================================
                  CTA 01 — EMAIL
              ================================================== */}

              <a
                href={GMAIL_COMPOSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send Spandan an email"
                className="
                  group
                  flex
                  min-w-[210px]
                  items-center
                  justify-center
                  gap-3
                  bg-regal-crimson
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#741b29]
                  hover:shadow-[0_14px_35px_rgba(140,33,49,0.25)]
                "
              >
                <FiMail size={18} strokeWidth={1.6} />

                <span>Send me an email</span>

                <FiArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>

              {/* =================================================
                  CTA 02 — WHATSAPP
              ================================================== */}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Spandan on WhatsApp"
                className="
                  group
                  flex
                  min-w-[210px]
                  items-center
                  justify-center
                  gap-3
                  border
                  border-champagne-gold/50
                  bg-transparent
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-zinc-800
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-champagne-gold
                  hover:bg-champagne-gold/10
                  dark:text-ash-white
                  dark:hover:bg-champagne-gold/10
                "
              >
                <FaWhatsapp
                  size={18}
                  className="
                    text-champagne-gold
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <span>Chat on WhatsApp</span>

                <FiArrowUpRight
                  size={17}
                  className="
                    text-champagne-gold
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
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
                  text-xs
                  tracking-wide
                  text-zinc-500
                  dark:text-zinc-400
                "
              >
                Open to opportunities, collaborations & interesting problems
              </span>
            </motion.div>
          </div>

          {/* =================================================
              BOTTOM METADATA
          ================================================== */}

          <div
            className="
              flex
              flex-col
              justify-between
              gap-3
              border-t
              border-zinc-200
              px-6
              py-5
              transition-colors
              duration-500
              dark:border-zinc-700
              sm:flex-row
              sm:items-center
              sm:px-8
            "
          >
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-zinc-500
                dark:text-zinc-500
              "
            >
              Spandan Guha Thakurta
            </span>

            <div
              className="
                flex
                items-center
                gap-3
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-zinc-500
                dark:text-zinc-500
              "
            >
              <span>Available for conversations</span>

              <span className="h-1 w-1 rounded-full bg-champagne-gold" />
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
          <span
            className="
              font-space
              text-sm
              text-zinc-500
              dark:text-zinc-500
            "
          >
            Technology{" "}
            <span className="mx-2 text-regal-crimson">×</span>
            Ideas{" "}
            <span className="mx-2 text-champagne-gold">×</span>
            Execution
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;