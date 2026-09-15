import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Sparkles,
} from "lucide-react";


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
      className="relative overflow-hidden bg-[#18181A] px-6 py-28 text-[#E4E4E7] sm:py-32 lg:px-10 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

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

      <div className="pointer-events-none absolute -left-64 top-1/4 h-[550px] w-[550px] rounded-full bg-[#8C2131]/[0.045] blur-[170px]" />

      <div className="pointer-events-none absolute -right-64 bottom-1/4 h-[550px] w-[550px] rounded-full bg-[#C1A673]/[0.025] blur-[170px]" />

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
            <span className="h-px w-10 bg-[#8C2131]" />

            <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C1A673]">
              <Sparkles size={12} strokeWidth={1.5} />
              The journey so far
            </span>
          </div>

          <h2 className="font-space max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#E4E4E7] sm:text-5xl md:text-6xl">
            Experiences that shaped
            <br />

            <span className="text-[#8C2131]">
              how I think and build.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#A1A1AA] md:text-lg">
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
          <div className="absolute bottom-0 left-[23px] top-0 hidden w-px bg-gradient-to-b from-[#8C2131] via-white/[0.08] to-[#C1A673]/40 md:block" />

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
      ? GraduationCap
      : item.type === "Leadership"
      ? Building2
      : BriefcaseBusiness;

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
        className={`absolute left-0 top-8 hidden h-12 w-12 items-center justify-center border bg-[#18181A] md:flex ${
          isCrimson
            ? "border-[#8C2131]/60 text-[#A92B3E]"
            : "border-[#C1A673]/45 text-[#C1A673]"
        }`}
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
        className="group relative overflow-hidden border border-white/[0.09] bg-[#242427] shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]"
      >
        {/* Accent strip */}
        <div
          className={`absolute bottom-0 left-0 top-0 w-[2px] ${
            isCrimson ? "bg-[#8C2131]" : "bg-[#C1A673]"
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
                      ? "bg-[#8C2131]"
                      : "bg-[#C1A673]"
                  }`}
                />

                <span
                  className={`text-[9px] font-semibold uppercase tracking-[0.28em] ${
                    isCrimson
                      ? "text-[#A92B3E]"
                      : "text-[#C1A673]"
                  }`}
                >
                  {item.type}
                </span>
              </div>

              <h3 className="font-space text-2xl font-semibold tracking-tight text-[#E4E4E7] sm:text-3xl">
                {item.role}
              </h3>

              <div className="mt-3 flex items-center gap-2 text-sm text-[#71717A]">
                <Building2
                  size={15}
                  strokeWidth={1.5}
                />

                <span>{item.company}</span>
              </div>
            </div>

            {/* Period */}
            <span
              className={`w-fit border px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] ${
                isCrimson
                  ? "border-[#8C2131]/30 bg-[#8C2131]/[0.07] text-[#A92B3E]"
                  : "border-[#C1A673]/25 bg-[#C1A673]/[0.04] text-[#C1A673]"
              }`}
            >
              {item.period}
            </span>
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p className="mt-7 max-w-3xl text-sm leading-7 text-[#A1A1AA] sm:text-base">
            {item.description}
          </p>

          {/* =================================================
              HIGHLIGHTS
          ================================================== */}

          <div className="mt-7 grid gap-2 sm:grid-cols-3">
            {item.highlights.map((highlight, highlightIndex) => (
              <div
                key={highlight}
                className="flex items-start gap-3 border border-white/[0.065] bg-[#18181A]/40 px-4 py-3.5"
              >
                <span
                  className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${
                    isCrimson
                      ? "bg-[#8C2131]"
                      : "bg-[#C1A673]"
                  }`}
                />

                <span className="text-xs leading-5 text-[#A1A1AA]">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          {/* =================================================
              BOTTOM BAR
          ================================================== */}

          <div className="mt-8 flex items-center gap-4 border-t border-white/[0.07] pt-5">

            <span
              className={`font-space text-[10px] font-semibold tracking-[0.25em] ${
                isCrimson
                  ? "text-[#8C2131]"
                  : "text-[#C1A673]"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="h-px flex-1 bg-white/[0.06]" />

            <span className="text-[9px] uppercase tracking-[0.2em] text-[#52525B]">
              {item.type}
            </span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className={`transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                isCrimson
                  ? "text-[#8C2131]"
                  : "text-[#C1A673]"
              }`}
            />
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default Experience;