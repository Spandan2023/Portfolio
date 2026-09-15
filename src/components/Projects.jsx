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
        bg-[#18181A]
        px-6
        py-28
        text-[#E4E4E7]
        sm:px-8
        lg:px-10
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND ARCHITECTURE
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.014]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="pointer-events-none absolute left-[7%] top-0 h-full w-px bg-white/[0.025]" />

      <div className="pointer-events-none absolute right-[7%] top-0 h-full w-px bg-white/[0.025]" />

      {/* Restrained atmosphere */}

      <div className="pointer-events-none absolute left-[-12%] top-[18%] h-[450px] w-[450px] rounded-full bg-[#8C2131]/[0.025] blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[5%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#C1A673]/[0.018] blur-[170px]" />

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
              <span className="h-px w-10 bg-[#8C2131]" />

              <div className="flex items-center gap-2">
                <FiLayers
                  size={13}
                  className="text-[#C1A673]"
                />

                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C1A673]">
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
                text-[#E4E4E7]
                sm:text-5xl
                md:text-6xl
              "
            >
              Things I've built from{" "}
              <span className="text-[#8C2131]">
                idea
              </span>{" "}
              to reality.
            </h2>
          </div>

          {/* Description */}

          <div className="lg:pb-1">
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-[9px] text-[#3F3F46]">
                02
              </span>

              <span className="h-px w-8 bg-white/[0.08]" />
            </div>

            <p className="max-w-md text-sm leading-7 text-[#71717A] md:text-[15px]">
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
            <span className="font-mono text-[9px] text-[#3F3F46]">
              01
            </span>

            <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#52525B]">
              Projects
            </span>

            <div className="h-px flex-1 bg-white/[0.07]" />

            <span className="font-mono text-[9px] text-[#3F3F46]">
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
            className="
              group
              inline-flex
              items-center
              gap-4
              border
              border-[#C1A673]/30
              bg-[#242427]
              px-6
              py-4
              text-sm
              font-semibold
              text-[#E4E4E7]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#C1A673]/60
              hover:bg-[#C1A673]/[0.04]
            "
          >
            <FaGithub
              size={17}
              className="text-[#C1A673] transition-transform duration-300 group-hover:scale-110"
            />

            <span>
              Explore More on GitHub
            </span>

            <FiArrowRight
              size={17}
              className="
                text-[#C1A673]
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

        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.06] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[9px] uppercase tracking-[0.22em] text-[#3F3F46]">
            From concept to deployment
          </span>

          <span className="font-mono text-[9px] text-[#3F3F46]">
            PROJECTS / 2026
          </span>
        </div>
      </div>
    </section>
  );
}

export default Projects;