import { motion } from "framer-motion";

import {
  FiArrowUpRight,
  FiCode,
  FiExternalLink,
  FiLayers,
} from "react-icons/fi";

function ProjectCard({ project, index }) {
  const isLive = project.status === "Live";
  const isDevelopment = project.status === "In Development";
  const isCompleted = project.status === "Completed";

  const statusLabel = isLive
    ? "Deployed"
    : isDevelopment
    ? "In Development"
    : isCompleted
    ? "Completed"
    : project.status;

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
        border-zinc-900/[0.09]
        bg-white
        transition-colors
        duration-500
        hover:border-zinc-900/[0.16]
        dark:border-white/[0.08]
        dark:bg-matte-surface
        dark:hover:border-white/[0.15]
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
              ? "bg-regal-crimson"
              : "bg-champagne-gold opacity-50"
          }
          group-hover:w-[3px]
        `}
      />

      {/* Top-right number */}

      <div
        className="
          pointer-events-none
          absolute
          right-6
          top-5
          font-mono
          text-[9px]
          tracking-[0.15em]
          text-zinc-400
          dark:text-zinc-600
        "
      >
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
          bg-regal-crimson/[0.025]
          blur-[90px]
          transition-opacity
          duration-500
          group-hover:opacity-100
          dark:bg-regal-crimson/[0.06]
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
                className="text-champagne-gold"
              />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-zinc-500
                  dark:text-zinc-500
                "
              >
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
                text-zinc-800
                transition-colors
                duration-300
                group-hover:text-zinc-950
                dark:text-ash-white
                dark:group-hover:text-white
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
                isLive
                  ? `
                    border-regal-crimson
                    bg-regal-crimson/[0.05]
                    text-regal-crimson
                    dark:bg-regal-crimson/[0.10]
                    dark:text-champagne-gold
                  `
                  : isDevelopment
                  ? `
                    border-champagne-gold
                    bg-champagne-gold/[0.08]
                    text-zinc-700
                    dark:bg-champagne-gold/[0.08]
                    dark:text-champagne-gold
                  `
                  : `
                    border-zinc-900/[0.09]
                    bg-zinc-100
                    text-zinc-500
                    dark:border-white/[0.08]
                    dark:bg-white/[0.03]
                    dark:text-zinc-500
                  `
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
            text-zinc-500
            transition-colors
            duration-500
            dark:text-zinc-500
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
            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-zinc-400
                dark:text-zinc-600
              "
            >
              Stack
            </span>

            <span className="h-px w-8 bg-zinc-900/[0.08] dark:bg-white/[0.07]" />
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                title={tech}
                className="
                  border
                  border-zinc-900/[0.08]
                  bg-zinc-100/70
                  px-3
                  py-2
                  text-[10px]
                  font-medium
                  text-zinc-600
                  transition-all
                  duration-300
                  hover:border-champagne-gold
                  hover:text-zinc-800
                  dark:border-white/[0.07]
                  dark:bg-white/[0.025]
                  dark:text-zinc-400
                  dark:hover:border-champagne-gold
                  dark:hover:text-ash-white
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

        <div
          className="
            mt-9
            flex
            flex-col
            gap-5
            border-t
            border-zinc-900/[0.08]
            pt-6
            transition-colors
            duration-500
            dark:border-white/[0.07]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

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
                  text-zinc-500
                  transition-colors
                  duration-300
                  hover:text-zinc-800
                  dark:text-zinc-500
                  dark:hover:text-ash-white
                "
              >
                <FiCode
                  size={16}
                  className="text-champagne-gold"
                />

                <span>Code</span>

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
                  text-zinc-500
                  transition-colors
                  duration-300
                  hover:text-zinc-800
                  dark:text-zinc-500
                  dark:hover:text-ash-white
                "
              >
                <FiExternalLink
                  size={15}
                  className="text-champagne-gold"
                />

                <span>Live Demo</span>

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
                    ? "bg-regal-crimson"
                    : isDevelopment
                    ? "bg-champagne-gold"
                    : "bg-zinc-400 dark:bg-zinc-600"
                }
              `}
            />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-zinc-400
                dark:text-zinc-600
              "
            >
              {statusLabel}
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          CORNER DETAILS
      ====================================================== */}

      <span
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-8
          w-8
          border-b
          border-r
          border-champagne-gold
          opacity-20
          transition-opacity
          duration-500
          group-hover:opacity-45
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-8
          w-8
          border-l
          border-t
          border-regal-crimson
          opacity-20
          transition-opacity
          duration-500
          group-hover:opacity-50
        "
      />
    </motion.article>
  );
}

export default ProjectCard;