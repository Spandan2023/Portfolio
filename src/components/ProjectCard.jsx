import { motion } from "framer-motion";

import {
  FiArrowUpRight,
  FiCode,
  FiExternalLink,
  FiLayers,
} from "react-icons/fi";

function ProjectCard({ project, index }) {
  const isLive = project.status === "Live";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        relative
        overflow-hidden
        border
        border-white/[0.08]
        bg-[#242427]
        transition-colors
        duration-500
        hover:border-white/[0.13]
      "
    >
      {/* =====================================================
          ARCHITECTURAL ACCENT
      ====================================================== */}

      <div
        className={`
          absolute
          left-0
          top-0
          h-full
          w-[2px]
          transition-all
          duration-500
          ${
            isLive
              ? "bg-[#8C2131]"
              : "bg-[#C1A673]/50"
          }
          group-hover:w-[3px]
        `}
      />

      {/* Top-right number */}

      <div className="pointer-events-none absolute right-6 top-5 font-mono text-[9px] tracking-[0.15em] text-[#3F3F46]">
        0{index + 1}
      </div>

      {/* =====================================================
          SUBTLE BACKGROUND DETAIL
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-56
          w-56
          rounded-full
          bg-[#8C2131]/[0.025]
          blur-[90px]
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 p-7 pl-8 sm:p-8 sm:pl-9">

        {/* =================================================
            HEADER
        ================================================== */}

        <div className="flex items-start justify-between gap-6">

          <div className="min-w-0">

            {/* Category */}

            <div className="mb-5 flex items-center gap-3">

              <FiLayers
                size={14}
                className="text-[#C1A673]"
              />

              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#71717A]">
                {project.category}
              </span>

            </div>

            {/* Title */}

            <h3
              className="
                font-space
                text-3xl
                font-semibold
                tracking-[-0.04em]
                text-[#E4E4E7]
                transition-colors
                duration-300
                group-hover:text-white
                sm:text-4xl
              "
            >
              {project.title}
            </h3>

          </div>

          {/* =================================================
              STATUS
          ================================================== */}

          <span
            className={`
              mt-1
              shrink-0
              border
              px-3
              py-1.5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.16em]
              ${
                project.status === "Live"
                  ? "border-[#8C2131]/35 bg-[#8C2131]/[0.06] text-[#C1A673]"
                  : project.status === "In Development"
                  ? "border-[#C1A673]/25 bg-[#C1A673]/[0.04] text-[#C1A673]"
                  : "border-white/[0.08] bg-white/[0.025] text-[#71717A]"
              }
            `}
          >
            {project.status}
          </span>

        </div>

        {/* =================================================
            DESCRIPTION
        ================================================== */}

        <p
          className="
            mt-7
            max-w-2xl
            text-sm
            leading-7
            text-[#71717A]
            sm:text-[15px]
          "
        >
          {project.description}
        </p>

        {/* =================================================
            TECHNOLOGY STACK
        ================================================== */}

        <div className="mt-7">

          <div className="mb-3 flex items-center gap-3">

            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#52525B]">
              Stack
            </span>

            <span className="h-px w-8 bg-white/[0.07]" />

          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                title={tech}
                className="
                  border
                  border-white/[0.07]
                  bg-[#1E1E20]
                  px-3
                  py-2
                  text-[10px]
                  font-medium
                  text-[#A1A1AA]
                  transition-all
                  duration-300
                  hover:border-[#C1A673]/30
                  hover:text-[#E4E4E7]
                "
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* =================================================
            BOTTOM ACTION AREA
        ================================================== */}

        <div className="mt-9 flex flex-col gap-5 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Links */}

          <div className="flex items-center gap-6">

            {/* GitHub */}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                className="
                  group/link
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-medium
                  text-[#71717A]
                  transition-colors
                  duration-300
                  hover:text-[#E4E4E7]
                "
              >
                <FiCode
                  size={16}
                  className="text-[#C1A673]"
                />

                <span>
                  Code
                </span>

                <FiArrowUpRight
                  size={13}
                  className="
                    transition-transform
                    duration-300
                    group-hover/link:-translate-y-0.5
                    group-hover/link:translate-x-0.5
                  "
                />
              </a>
            )}

            {/* Live Demo */}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo`}
                className="
                  group/link
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-medium
                  text-[#71717A]
                  transition-colors
                  duration-300
                  hover:text-[#E4E4E7]
                "
              >
                <FiExternalLink
                  size={15}
                  className="text-[#C1A673]"
                />

                <span>
                  Live Demo
                </span>

                <FiArrowUpRight
                  size={13}
                  className="
                    transition-transform
                    duration-300
                    group-hover/link:-translate-y-0.5
                    group-hover/link:translate-x-0.5
                  "
                />
              </a>
            )}

          </div>

          {/* Status indicator */}

          <div className="flex items-center gap-2">

            <span
              className={`
                h-1.5
                w-1.5
                rounded-full
                ${
                  isLive
                    ? "bg-[#8C2131]"
                    : "bg-[#C1A673]/60"
                }
              `}
            />

            <span className="text-[9px] uppercase tracking-[0.18em] text-[#52525B]">
              {isLive ? "Deployed" : "Building"}
            </span>

          </div>

        </div>
      </div>

      {/* =====================================================
          CORNER DETAILS
      ====================================================== */}

      <span className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b border-r border-[#C1A673]/20 transition-colors duration-500 group-hover:border-[#C1A673]/45" />

      <span className="pointer-events-none absolute left-0 top-0 h-8 w-8 border-l border-t border-[#8C2131]/20 transition-colors duration-500 group-hover:border-[#8C2131]/50" />
    </motion.article>
  );
}

export default ProjectCard;