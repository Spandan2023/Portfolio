import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  FiArrowLeft,
  FiArrowRight,
  FiCpu,
} from "react-icons/fi";

import { skills } from "../data/skills";
import SkillCard from "./SkillCard";

function Skills() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const skillsPerPage = 3;

  const totalPages = Math.ceil(
    skills.length / skillsPerPage
  );

  const getCurrentSkills = () => {
    const start = currentPage * skillsPerPage;

    return skills.slice(
      start,
      start + skillsPerPage
    );
  };

  const nextSkills = () => {
    setDirection(1);

    setCurrentPage((prev) =>
      prev === totalPages - 1
        ? 0
        : prev + 1
    );
  };

  const previousSkills = () => {
    setDirection(-1);

    setCurrentPage((prev) =>
      prev === 0
        ? totalPages - 1
        : prev - 1
    );
  };

  const goToPage = (page) => {
    if (page === currentPage) return;

    setDirection(
      page > currentPage ? 1 : -1
    );

    setCurrentPage(page);
  };

  const visibleSkills = getCurrentSkills();

  return (
    <section
      id="skills"
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

      {/* Vertical architectural lines */}

      <div className="pointer-events-none absolute left-[7%] top-0 h-full w-px bg-white/[0.025]" />

      <div className="pointer-events-none absolute right-[7%] top-0 h-full w-px bg-white/[0.025]" />

      {/* Restrained atmosphere */}

      <motion.div
        animate={{
          opacity: [0.02, 0.035, 0.02],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[-12%]
          top-[20%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#8C2131]
          blur-[150px]
        "
      />

      <motion.div
        animate={{
          opacity: [0.012, 0.025, 0.012],
          scale: [1.04, 1, 1.04],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[5%]
          right-[-10%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#C1A673]
          blur-[160px]
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mb-16"
        >

          {/* Eyebrow */}

          <div className="mb-6 flex items-center gap-4">

            <span className="h-px w-10 bg-[#8C2131]" />

            <div className="flex items-center gap-2">

              <FiCpu
                size={13}
                className="text-[#C1A673]"
              />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C1A673]">
                Technical Arsenal
              </span>

            </div>

          </div>

          {/* Heading */}

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
            Skills I use to{" "}
            <span className="text-[#8C2131]">
              bring ideas to life.
            </span>
          </h2>

          {/* Description */}

          <div className="mt-6 flex max-w-3xl items-start gap-4">

            <span className="mt-2 hidden h-px w-6 bg-[#C1A673]/50 sm:block" />

            <p className="text-sm leading-7 text-[#71717A] md:text-[15px]">
              A growing technical toolkit spanning full-stack
              development, artificial intelligence, design,
              and modern digital products.
            </p>

          </div>

        </motion.div>

        {/* =================================================
            CAROUSEL
        ================================================== */}

        <div className="relative flex items-center gap-5 lg:gap-8">

          {/* =================================================
              PREVIOUS
          ================================================== */}

          <button
            onClick={previousSkills}
            className="
              group
              hidden
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              border
              border-white/[0.08]
              bg-[#242427]
              text-[#71717A]
              transition-all
              duration-300
              hover:-translate-x-1
              hover:border-[#C1A673]/40
              hover:text-[#C1A673]
              lg:flex
            "
            aria-label="Previous skills"
          >
            <FiArrowLeft
              size={19}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </button>

          {/* =================================================
              CARDS
          ================================================== */}

          <div className="relative min-h-[430px] flex-1 overflow-hidden">

            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.div
                key={currentPage}
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 70 : -70,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -70 : 70,
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
                className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
              >
                {visibleSkills.map(
                  (skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={index}
                    />
                  )
                )}
              </motion.div>
            </AnimatePresence>

          </div>

          {/* =================================================
              NEXT
          ================================================== */}

          <button
            onClick={nextSkills}
            className="
              group
              hidden
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              border
              border-white/[0.08]
              bg-[#242427]
              text-[#71717A]
              transition-all
              duration-300
              hover:translate-x-1
              hover:border-[#8C2131]/50
              hover:text-[#8C2131]
              lg:flex
            "
            aria-label="Next skills"
          >
            <FiArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

        </div>

        {/* =================================================
            MOBILE CONTROLS
        ================================================== */}

        <div className="mt-8 flex items-center justify-between lg:hidden">

          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#52525B]">
            Swipe / Navigate
          </span>

          <div className="flex items-center gap-2">

            <button
              onClick={previousSkills}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                border
                border-white/[0.08]
                bg-[#242427]
                text-[#C1A673]
                transition-all
                duration-300
                active:scale-95
              "
              aria-label="Previous skills"
            >
              <FiArrowLeft size={17} />
            </button>

            <button
              onClick={nextSkills}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                border
                border-white/[0.08]
                bg-[#242427]
                text-[#8C2131]
                transition-all
                duration-300
                active:scale-95
              "
              aria-label="Next skills"
            >
              <FiArrowRight size={17} />
            </button>

          </div>
        </div>

        {/* =================================================
            PAGE INFORMATION
        ================================================== */}

        <div className="mt-10 flex items-center justify-center gap-4">

          <span className="font-mono text-[10px] text-[#8C2131]">
            {String(currentPage + 1).padStart(2, "0")}
          </span>

          <span className="h-px w-8 bg-white/[0.07]" />

          <span className="font-mono text-[10px] text-[#52525B]">
            {String(totalPages).padStart(2, "0")}
          </span>

        </div>

        {/* =================================================
            PAGE INDICATORS
        ================================================== */}

        <div className="mt-5 flex justify-center gap-2">

          {Array.from({
            length: totalPages,
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              aria-label={`View skill group ${index + 1}`}
              aria-current={
                index === currentPage
                  ? "page"
                  : undefined
              }
              className={`
                relative
                h-[3px]
                overflow-hidden
                transition-all
                duration-500
                ${
                  index === currentPage
                    ? "w-10 bg-[#8C2131]"
                    : "w-3 bg-white/[0.10] hover:bg-white/[0.22]"
                }
              `}
            >
              {index === currentPage && (
                <motion.span
                  layoutId="activeSkillIndicator"
                  className="absolute inset-0 bg-[#C1A673]"
                  transition={{
                    duration: 0.35,
                  }}
                />
              )}
            </button>
          ))}

        </div>

        {/* =================================================
            BOTTOM META
        ================================================== */}

        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.06] pt-5 sm:flex-row sm:items-center sm:justify-between">

          <span className="text-[9px] uppercase tracking-[0.22em] text-[#3F3F46]">
            Continuous learning
          </span>

          <span className="font-mono text-[9px] text-[#3F3F46]">
            STACK / DEVELOP / EVOLVE
          </span>

        </div>

      </div>
    </section>
  );
}

export default Skills;