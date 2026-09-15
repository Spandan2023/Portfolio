import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiServer,
  FiCpu,
  FiLayers,
} from "react-icons/fi";

import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiJavascript,
} from "react-icons/si";

function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const technologies = [
    {
      name: "React",
      icon: FaReact,
      level: "Advanced",
      value: "88%",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      level: "Advanced",
      value: "84%",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      level: "Strong",
      value: "78%",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      level: "Strong",
      value: "82%",
    },
  ];

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-[#18181A]
        px-6
        pt-24
        text-[#E4E4E7]
        sm:px-8
        lg:px-10
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Architectural grid */}

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

      {/* Vertical architectural lines */}

      <div className="pointer-events-none absolute left-[7%] top-0 h-full w-px bg-white/[0.025]" />

      <div className="pointer-events-none absolute right-[7%] top-0 h-full w-px bg-white/[0.025]" />

      {/* Restrained crimson atmosphere */}

      <motion.div
        animate={{
          opacity: [0.025, 0.045, 0.025],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/4
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#8C2131]
          blur-[150px]
        "
      />

      <motion.div
        animate={{
          opacity: [0.015, 0.035, 0.015],
          scale: [1.05, 1, 1.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#C1A673]
          blur-[170px]
        "
      />

      {/* Horizontal divider */}

      <div className="pointer-events-none absolute left-0 top-[52%] hidden h-px w-full bg-white/[0.025] lg:block" />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-16
          py-16
          lg:grid-cols-[1.08fr_0.92fr]
          lg:gap-20
          lg:py-20
        "
      >

        {/* =================================================
            LEFT — INTRODUCTION
        ================================================== */}

        <div>

          {/* Eyebrow */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-[#8C2131]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C1A673]">
              Full-Stack Developer
            </span>
          </motion.div>

          {/* Main heading */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              max-w-4xl
              font-space
              text-5xl
              font-semibold
              leading-[0.98]
              tracking-[-0.055em]
              text-[#E4E4E7]
              sm:text-6xl
              md:text-7xl
              lg:text-[5.6rem]
            "
          >
            Hi, I'm{" "}
            <span className="text-[#8C2131]">
              Spandan.
            </span>
          </motion.h1>

          {/* Main positioning */}

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="
              mt-7
              max-w-3xl
              font-space
              text-3xl
              font-medium
              leading-[1.12]
              tracking-[-0.035em]
              text-[#A1A1AA]
              sm:text-4xl
              md:text-5xl
            "
          >
            I build at the intersection of{" "}
            <span className="text-[#E4E4E7]">
              technology
            </span>{" "}
            <span className="text-[#8C2131]">×</span>{" "}
            <span className="text-[#E4E4E7]">
              AI
            </span>{" "}
            <span className="text-[#C1A673]">×</span>{" "}
            <span className="text-[#E4E4E7]">
              business.
            </span>
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="
              mt-8
              max-w-2xl
              text-base
              leading-8
              text-[#71717A]
              md:text-lg
            "
          >
            I build full-stack web applications and AI-powered
            products, turning ideas into practical digital
            experiences. My focus is on modern JavaScript,
            backend development, databases, and continuously
            expanding my capabilities in AI.
          </motion.p>

          {/* =================================================
              SKILL STRIP
          ================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-3"
          >
            {[
              "MERN Stack",
              "REST APIs",
              "AI / ML",
              "MongoDB",
              "Git & GitHub",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.55 + index * 0.08,
                }}
                className="flex items-center gap-2"
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    index % 2 === 0
                      ? "bg-[#8C2131]"
                      : "bg-[#C1A673]"
                  }`}
                />

                <span className="text-xs text-[#71717A]">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* =================================================
              ACTIONS
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.75,
            }}
            className="mt-10 flex flex-wrap gap-4"
          >

            {/* Primary */}

            <button
              onClick={scrollToProjects}
              className="
                group
                flex
                items-center
                gap-4
                bg-[#8C2131]
                px-6
                py-4
                text-sm
                font-semibold
                text-[#F4F4F5]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#9D2638]
                hover:shadow-[0_14px_35px_rgba(140,33,49,0.2)]
              "
            >
              Explore My Work

              <FiArrowDown
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-y-1
                "
              />
            </button>

            {/* Secondary */}

            <button
              onClick={scrollToContact}
              className="
                group
                flex
                items-center
                gap-4
                border
                border-[#C1A673]/35
                bg-transparent
                px-6
                py-4
                text-sm
                font-semibold
                text-[#E4E4E7]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#C1A673]
                hover:bg-[#C1A673]/[0.05]
              "
            >
              Let's Connect

              <FiArrowUpRight
                size={17}
                className="
                  text-[#C1A673]
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </button>

          </motion.div>
        </div>

        {/* =================================================
            RIGHT — TECHNICAL PROFILE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="relative flex items-center justify-center"
        >

          {/* =================================================
              ARCHITECTURAL FRAME
          ================================================== */}

          <div className="relative w-full max-w-[500px]">

            {/* Top coordinates */}

            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#3F3F46]">
                01 / Developer Profile
              </span>

              <span className="font-mono text-[9px] text-[#52525B]">
                2026
              </span>
            </div>

            {/* Main card */}

            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                overflow-hidden
                border
                border-white/[0.08]
                bg-[#242427]
                shadow-[0_30px_80px_rgba(0,0,0,0.28)]
              "
            >

              {/* Card header */}

              <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4">
                <div className="flex items-center gap-3">

                  <div className="flex h-8 w-8 items-center justify-center border border-[#8C2131]/30 bg-[#8C2131]/[0.06]">
                    <FiCode
                      size={15}
                      className="text-[#8C2131]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-[#E4E4E7]">
                      Technical Stack
                    </p>

                    <p className="mt-0.5 text-[9px] uppercase tracking-[0.16em] text-[#52525B]">
                      Current focus
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8C2131]" />

                  <span className="text-[9px] uppercase tracking-[0.15em] text-[#71717A]">
                    Active
                  </span>
                </div>
              </div>

              {/* Card content */}

              <div className="p-6 sm:p-7">

                {/* Identity */}

                <div className="border-l-2 border-[#8C2131] pl-5">

                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#52525B]">
                    role
                  </p>

                  <h3 className="mt-2 font-space text-2xl font-semibold tracking-[-0.03em] text-[#E4E4E7]">
                    Full-Stack Developer
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#71717A]">
                    Web applications · APIs · AI-powered products
                  </p>

                </div>

                {/* Stack */}

                <div className="mt-8">

                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#52525B]">
                      Core Stack
                    </span>

                    <span className="font-mono text-[9px] text-[#3F3F46]">
                      04
                    </span>
                  </div>

                  <div className="space-y-5">
                    {technologies.map((tech, index) => {
                      const Icon = tech.icon;

                      return (
                        <motion.div
                          key={tech.name}
                          initial={{
                            opacity: 0,
                            x: 15,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: 0.9 + index * 0.12,
                          }}
                        >
                          <div className="mb-2.5 flex items-center justify-between">

                            <div className="flex items-center gap-3">

                              <Icon
                                size={15}
                                className="text-[#C1A673]"
                              />

                              <span className="text-xs font-medium text-[#A1A1AA]">
                                {tech.name}
                              </span>

                            </div>

                            <span className="font-mono text-[9px] uppercase tracking-wider text-[#52525B]">
                              {tech.level}
                            </span>

                          </div>

                          <div className="h-[2px] w-full bg-white/[0.06]">
                            <motion.div
                              initial={{
                                width: 0,
                              }}
                              animate={{
                                width: tech.value,
                              }}
                              transition={{
                                duration: 1.2,
                                delay: 1 + index * 0.12,
                                ease: "easeOut",
                              }}
                              className="h-full bg-[#8C2131]"
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Development status */}

                <div className="mt-8 border-t border-white/[0.07] pt-5">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <FiGitBranch
                        size={14}
                        className="text-[#C1A673]"
                      />

                      <div>
                        <span className="font-mono text-[10px] text-[#71717A]">
                          main
                        </span>

                        <span className="mx-2 text-[#3F3F46]">
                          /
                        </span>

                        <span className="font-mono text-[10px] text-[#52525B]">
                          building
                        </span>
                      </div>

                    </div>

                    <motion.span
                      animate={{
                        opacity: [1, 0.35, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-[#8C2131]"
                    />

                  </div>
                </div>

              </div>
            </motion.div>

            {/* =================================================
                BOTTOM METADATA
            ================================================== */}

            <div className="mt-4 grid grid-cols-3 border-t border-white/[0.06]">

              <div className="border-r border-white/[0.06] py-4 pr-4">
                <div className="mb-2 flex items-center gap-2">
                  <FiLayers
                    size={12}
                    className="text-[#C1A673]"
                  />

                  <span className="text-[9px] uppercase tracking-[0.15em] text-[#52525B]">
                    Stack
                  </span>
                </div>

                <p className="text-xs text-[#71717A]">
                  MERN
                </p>
              </div>

              <div className="border-r border-white/[0.06] px-4 py-4">
                <div className="mb-2 flex items-center gap-2">
                  <FiServer
                    size={12}
                    className="text-[#C1A673]"
                  />

                  <span className="text-[9px] uppercase tracking-[0.15em] text-[#52525B]">
                    Backend
                  </span>
                </div>

                <p className="text-xs text-[#71717A]">
                  Node.js
                </p>
              </div>

              <div className="py-4 pl-4">
                <div className="mb-2 flex items-center gap-2">
                  <FiCpu
                    size={12}
                    className="text-[#C1A673]"
                  />

                  <span className="text-[9px] uppercase tracking-[0.15em] text-[#52525B]">
                    Focus
                  </span>
                </div>

                <p className="text-xs text-[#71717A]">
                  AI / ML
                </p>
              </div>

            </div>

            {/* Corner accents */}

            <span className="absolute -left-1 -top-1 h-5 w-5 border-l border-t border-[#C1A673]/40" />

            <span className="absolute -bottom-1 -right-1 h-5 w-5 border-b border-r border-[#8C2131]/40" />

          </div>
        </motion.div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.4,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-3
          md:flex
        "
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#52525B]">
          Scroll to explore
        </span>

        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="text-[#C1A673]"
        >
          <FiArrowDown size={15} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;