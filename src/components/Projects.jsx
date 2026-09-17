import { motion } from "framer-motion";

import {
  FiArrowRight,
  FiLayers,
} from "react-icons/fi";

import { FaGithub } from "react-icons/fa";

import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const GITHUB_URL = "https://github.com/Spandan2023";

function Projects() {
  return (
    <section
      id="projects"
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
        sm:px-8
        lg:px-10
        lg:py-32
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

      {/* Architectural vertical lines */}

      <div className="pointer-events-none absolute left-[7%] top-0 h-full w-px bg-zinc-900/[0.035] dark:bg-white/[0.025]" />

      <div className="pointer-events-none absolute right-[7%] top-0 h-full w-px bg-zinc-900/[0.035] dark:bg-white/[0.025]" />

      {/* =====================================================
          RESTRAINED ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-12%]
          top-[18%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-regal-crimson/[0.025]
          blur-[150px]
          dark:bg-regal-crimson/[0.06]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[5%]
          right-[-10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-champagne-gold/[0.025]
          blur-[170px]
          dark:bg-champagne-gold/[0.035]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            mb-16
            grid
            gap-8
            lg:grid-cols-[1.25fr_0.75fr]
            lg:items-end
          "
        >
          {/* Heading */}

          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-regal-crimson" />

              <div className="flex items-center gap-2">
                <FiLayers
                  size={13}
                  className="text-champagne-gold"
                />

                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-champagne-gold
                  "
                >
                  Selected Work
                </span>
              </div>
            </div>

            <h2
              className="
                max-w-4xl
                font-space
                text-4xl
                font-semibold
                leading-[1.05]
                tracking-[-0.045em]
                text-zinc-800
                transition-colors
                duration-500
                dark:text-ash-white
                sm:text-5xl
                md:text-6xl
              "
            >
              Things I've built from{" "}
              <span className="text-regal-crimson">
                idea
              </span>{" "}
              to reality.
            </h2>
          </div>

          {/* Description */}

          <div className="lg:pb-1">
            <div className="mb-4 flex items-center gap-3">
              <span
                className="
                  font-mono
                  text-[9px]
                  text-zinc-400
                  dark:text-zinc-600
                "
              >
                02
              </span>

              <span className="h-px w-8 bg-zinc-900/[0.08] dark:bg-white/[0.07]" />
            </div>

            <p
              className="
                max-w-md
                text-sm
                leading-7
                text-zinc-500
                transition-colors
                duration-500
                dark:text-zinc-500
                md:text-[15px]
              "
            >
              A selection of applications built to solve
              practical problems, explore ideas, and create
              useful digital experiences.
            </p>
          </div>
        </motion.div>

        {/* =================================================
            PROJECT GRID
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          {/* Grid label */}

          <div className="mb-6 flex items-center gap-4">
            <span
              className="
                font-mono
                text-[9px]
                text-zinc-400
                dark:text-zinc-600
              "
            >
              01
            </span>

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-zinc-400
                dark:text-zinc-600
              "
            >
              Projects
            </span>

            <div className="h-px flex-1 bg-zinc-900/[0.08] dark:bg-white/[0.07]" />

            <span
              className="
                font-mono
                text-[9px]
                text-zinc-400
                dark:text-zinc-600
              "
            >
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          {/* =================================================
              ALL PROJECTS
          ================================================== */}

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* =================================================
            GITHUB CTA
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mt-16 flex justify-center"
        >
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore Spandan's GitHub profile"
            className="
              group
              inline-flex
              items-center
              gap-4
              border
              border-champagne-gold/30
              bg-white
              px-6
              py-4
              text-sm
              font-semibold
              text-zinc-800
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-champagne-gold
              hover:bg-champagne-gold/[0.06]
              dark:bg-matte-surface
              dark:text-ash-white
              dark:hover:bg-champagne-gold/[0.05]
            "
          >
            <FaGithub
              size={17}
              className="
                text-champagne-gold
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />

            <span>
              Explore More on GitHub
            </span>

            <FiArrowRight
              size={17}
              className="
                text-champagne-gold
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>
        </motion.div>

        {/* =================================================
            CLOSING META
        ================================================== */}

        <div
          className="
            mt-14
            flex
            flex-col
            gap-3
            border-t
            border-zinc-900/[0.08]
            pt-5
            transition-colors
            duration-500
            dark:border-white/[0.07]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.22em]
              text-zinc-400
              dark:text-zinc-600
            "
          >
            From concept to deployment
          </span>

          <span
            className="
              font-mono
              text-[9px]
              text-zinc-400
              dark:text-zinc-600
            "
          >
            PROJECTS / 2026
          </span>
        </div>
      </div>
    </section>
  );
}

export default Projects;