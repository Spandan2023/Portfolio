import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiBookOpen,
  FiLayers,
  FiUsers,
} from "react-icons/fi";

const experiences = [
  {
    type: "Professional Experience",
    role: "Virtual AIML Intern",
    company: "IBM",
    period: "Internship",
    description:
      "Worked on analysing conversational interactions and contributing to AI-driven workflows, with a focus on understanding user interactions and maintaining quality in conversational systems.",
    highlights: [
      "Analysed conversational interactions",
      "Worked within AI-driven workflows",
      "Focused on quality and user experience",
    ],
  },

  {
    type: "Education",
    role: "Master of Business Administration",
    company: "Manipal University Jaipur",
    period: "Currently Pursuing",
    description:
      "Developing a stronger understanding of business, management, strategy, and organisational decision-making alongside a technical foundation.",
    highlights: [
      "Business & management",
      "Strategy & decision-making",
      "Technology × business perspective",
    ],
  },

  {
    type: "Professional Experience",
    role: "Virtual Customer Associate",
    company: "Amazon",
    period: "Professional Experience",
    description:
      "Worked in a virtual customer-support environment, handling customer interactions while following structured processes and maintaining service quality.",
    highlights: [
      "Handled customer interactions",
      "Followed structured service workflows",
      "Focused on customer experience",
    ],
  },

  {
    type: "Leadership",
    role: "Convenor",
    company: "Foveon — Techno Main Salt Lake",
    period: "Leadership Experience",
    description:
      "Leading and coordinating the official production club across photography, design, technology, content, promotion, and team management.",
    highlights: [
      "Leading a multi-disciplinary team",
      "Coordinating creative & technical workflows",
      "Managing collaborations and operations",
    ],
  },

  {
    type: "Education",
    role: "Bachelor of Computer Applications",
    company: "Techno India",
    period: "Completed",
    description:
      "Built a foundation in programming, software development, computer science concepts, and practical technology projects.",
    highlights: [
      "Programming fundamentals",
      "Software development",
      "Technical problem-solving",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
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

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-70
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
          backgroundSize: "80px 80px",
        }}
      />

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
          backgroundSize: "80px 80px",
        }}
      />

      <div className="pointer-events-none absolute left-[7%] top-0 h-full w-px bg-zinc-900/[0.035] dark:bg-white/[0.025]" />

      <div className="pointer-events-none absolute right-[7%] top-0 h-full w-px bg-zinc-900/[0.035] dark:bg-white/[0.025]" />

      <div
        className="
          pointer-events-none
          absolute
          -left-64
          top-1/4
          h-[550px]
          w-[550px]
          rounded-full
          bg-regal-crimson/[0.035]
          blur-[170px]
          dark:bg-regal-crimson/[0.07]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-64
          bottom-1/4
          h-[550px]
          w-[550px]
          rounded-full
          bg-champagne-gold/[0.025]
          blur-[170px]
          dark:bg-champagne-gold/[0.035]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-regal-crimson" />

            <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-champagne-gold">
              <FiLayers size={12} strokeWidth={1.5} />
              The journey so far
            </span>
          </div>

          <h2
            className="
              font-space
              max-w-4xl
              text-4xl
              font-semibold
              leading-[1.05]
              tracking-[-0.03em]
              text-zinc-800
              transition-colors
              duration-500
              dark:text-ash-white
              sm:text-5xl
              md:text-6xl
            "
          >
            Experiences that shaped
            <br />

            <span className="text-regal-crimson">
              how I think and build.
            </span>
          </h2>

          <p
            className="
              mt-7
              max-w-2xl
              text-base
              leading-8
              text-zinc-600
              transition-colors
              duration-500
              dark:text-ash-muted
              md:text-lg
            "
          >
            From technology and AI to leadership and business, each
            experience has added another layer to how I approach problems,
            products, and people.
          </p>
        </motion.div>

        {/* =================================================
            TIMELINE
        ================================================== */}

        <div className="relative">

          {/* Desktop timeline */}

          <div
            className="
              absolute
              bottom-0
              left-[23px]
              top-0
              hidden
              w-px
              bg-gradient-to-b
              from-champagne-gold
              via-regal-crimson
              to-zinc-300
              dark:to-zinc-700
              md:block
            "
          />

          <div className="space-y-8 md:space-y-10">
            {experiences.map((item, index) => (
              <ExperienceItem
                key={`${item.role}-${index}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ item, index }) {
  const Icon =
    item.type === "Education"
      ? FiBookOpen
      : item.type === "Leadership"
        ? FiUsers
        : FiBriefcase;

  const isCrimson = index % 2 === 0;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className="relative md:pl-20"
    >
      {/* =================================================
          TIMELINE NODE
      ================================================== */}

      <div
        className={`
          absolute
          left-0
          top-8
          hidden
          h-12
          w-12
          items-center
          justify-center
          border
          bg-zinc-50
          transition-colors
          duration-500
          dark:bg-matte-charcoal
          md:flex
          ${
            isCrimson
              ? "border-regal-crimson text-regal-crimson"
              : "border-champagne-gold text-champagne-gold"
          }
        `}
      >
        <Icon size={19} strokeWidth={1.5} />
      </div>

      {/* =================================================
          EXPERIENCE CARD
      ================================================== */}

      <motion.div
        whileHover={{
          y: -4,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          group
          relative
          overflow-hidden
          border
          border-zinc-900/[0.09]
          bg-white
          shadow-[0_15px_45px_rgba(39,39,42,0.055)]
          transition-colors
          duration-500
          dark:border-white/[0.08]
          dark:bg-matte-surface
          dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]
        "
      >
        {/* Accent strip */}

        <div
          className={`absolute bottom-0 left-0 top-0 w-[2px] ${
            isCrimson
              ? "bg-regal-crimson"
              : "bg-champagne-gold"
          }`}
        />

        <div className="relative p-7 sm:p-9">

          {/* =================================================
              TOP META
          ================================================== */}

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isCrimson
                      ? "bg-regal-crimson"
                      : "bg-champagne-gold"
                  }`}
                />

                <span
                  className={`
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    ${
                      isCrimson
                        ? "text-regal-crimson"
                        : "text-champagne-gold"
                    }
                  `}
                >
                  {item.type}
                </span>
              </div>

              <h3
                className="
                  font-space
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-zinc-800
                  transition-colors
                  duration-500
                  dark:text-ash-white
                  sm:text-3xl
                "
              >
                {item.role}
              </h3>

              <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-zinc-500
                  transition-colors
                  duration-500
                  dark:text-zinc-500
                "
              >
                <FiBriefcase
                  size={15}
                  strokeWidth={1.5}
                />

                <span>{item.company}</span>
              </div>
            </div>

            {/* Period */}

            <span
              className={`
                w-fit
                border
                px-3
                py-2
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                ${
                  isCrimson
                    ? "border-regal-crimson/40 bg-regal-crimson/[0.06] text-regal-crimson dark:border-regal-crimson dark:bg-regal-crimson/[0.08]"
                    : "border-champagne-gold/40 bg-champagne-gold/[0.06] text-[#8F753F] dark:border-champagne-gold dark:bg-champagne-gold/[0.07] dark:text-champagne-gold"
                }
              `}
            >
              {item.period}
            </span>
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="
              mt-7
              max-w-3xl
              text-sm
              leading-7
              text-zinc-600
              transition-colors
              duration-500
              dark:text-ash-muted
              sm:text-base
            "
          >
            {item.description}
          </p>

          {/* =================================================
              HIGHLIGHTS
          ================================================== */}

          <div className="mt-7 grid gap-2 sm:grid-cols-3">
            {item.highlights.map((highlight) => (
              <div
                key={highlight}
                className="
                  flex
                  items-start
                  gap-3
                  border
                  border-zinc-900/[0.08]
                  bg-zinc-50
                  px-4
                  py-3.5
                  transition-colors
                  duration-500
                  dark:border-white/[0.06]
                  dark:bg-matte-charcoal
                "
              >
                <span
                  className={`
                    mt-1.5
                    h-1
                    w-1
                    shrink-0
                    rounded-full
                    ${
                      isCrimson
                        ? "bg-regal-crimson"
                        : "bg-champagne-gold"
                    }
                  `}
                />

                <span
                  className="
                    text-xs
                    leading-5
                    text-zinc-600
                    transition-colors
                    duration-500
                    dark:text-ash-muted
                  "
                >
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          {/* =================================================
              BOTTOM BAR
          ================================================== */}

          <div
            className="
              mt-8
              flex
              items-center
              gap-4
              border-t
              border-zinc-900/[0.08]
              pt-5
              transition-colors
              duration-500
              dark:border-white/[0.07]
            "
          >
            <span
              className={`
                font-space
                text-[10px]
                font-semibold
                tracking-[0.25em]
                ${
                  isCrimson
                    ? "text-regal-crimson"
                    : "text-champagne-gold"
                }
              `}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="h-px flex-1 bg-zinc-900/[0.08] dark:bg-white/[0.06]" />

            <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
              {item.type}
            </span>

            {/* Decorative arrow — not a CTA */}

            <FiArrowUpRight
              size={15}
              strokeWidth={1.5}
              className={`
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                ${
                  isCrimson
                    ? "text-regal-crimson"
                    : "text-champagne-gold"
                }
              `}
            />
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default Experience;