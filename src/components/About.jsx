import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const focusAreas = [
  {
    number: "01",
    title: "Building",
    description:
      "Full-stack applications that turn ideas into useful, polished digital products.",
    icon: Code2,
    accent: "crimson",
  },
  {
    number: "02",
    title: "Exploring",
    description:
      "Artificial intelligence, machine learning, and practical AI-driven applications.",
    icon: BrainCircuit,
    accent: "gold",
  },
  {
    number: "03",
    title: "Thinking",
    description:
      "Business, strategy, and management alongside a strong technical foundation.",
    icon: GraduationCap,
    accent: "crimson",
  },
];

function About() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#18181A] px-6 py-28 text-[#E4E4E7] sm:py-32 lg:px-10 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND TEXTURE
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Subtle atmospheric light */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#8C2131]/[0.07] blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#C1A673]/[0.035] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20 max-w-5xl"
        >
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-[#8C2131]" />

            <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C1A673]">
              <Sparkles size={13} strokeWidth={1.5} />
              About Spandan
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-space text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#E4E4E7] sm:text-5xl md:text-6xl lg:text-[4.4rem]">
            I don't just learn technology.
            <br />

            <span className="text-[#8C2131]">
              I think about what to build with it.
            </span>
          </h2>

          {/* Editorial divider */}
          <div className="mt-10 flex items-center gap-5">
            <span className="h-px w-20 bg-[#C1A673]/40" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#71717A]">
              Technology · Intelligence · Strategy
            </span>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-24">

          {/* =================================================
              LEFT — PERSONAL STORY
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {/* Intro label */}
            <div className="mb-8 flex items-center gap-3">
              <span className="font-mono text-xs text-[#8C2131]">
                01
              </span>

              <span className="h-px w-8 bg-[#8C2131]/50" />

              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#71717A]">
                The person behind the code
              </span>
            </div>

            <div className="space-y-7 text-[16px] leading-8 text-[#A1A1AA] md:text-[17px]">

              <p>
                I'm{" "}
                <span className="font-medium text-[#E4E4E7]">
                  Spandan
                </span>
                , a developer with a strong interest in building digital
                products that combine technology, creativity, and practical
                thinking.
              </p>

              <p>
                My journey sits at an interesting intersection. I enjoy
                working across full-stack web development and AI while
                developing a broader understanding of business, strategy,
                and how technology can create meaningful outcomes.
              </p>

              <p>
                What I enjoy most is the process of taking an idea from
                something abstract and turning it into something people can
                actually use — designing the experience, writing the code,
                solving the inevitable problems, and refining the result.
              </p>

              <p>
                I'm currently focused on becoming a stronger developer,
                building increasingly meaningful projects, and finding
                opportunities where technology and business thinking can
                work together.
              </p>
            </div>

            {/* CTA */}
            <motion.button
              onClick={scrollToProjects}
              whileHover={{
                y: -3,
                backgroundColor: "#8C2131",
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group mt-11 flex items-center gap-4 border border-[#8C2131] bg-[#8C2131]/10 px-6 py-4 text-sm font-semibold text-[#E4E4E7] transition-all duration-300 hover:shadow-[0_12px_35px_rgba(140,33,49,0.18)]"
            >
              Explore what I've built

              <span className="flex h-7 w-7 items-center justify-center border border-[#C1A673]/40">
                <ArrowUpRight
                  size={15}
                  className="text-[#C1A673] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </motion.button>
          </motion.div>

          {/* =================================================
              RIGHT — DIRECTION CARD
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="relative"
          >
            {/* Outer architectural frame */}
            <div className="absolute -inset-3 border border-[#C1A673]/[0.07]" />

            <div className="relative overflow-hidden border border-white/[0.09] bg-[#242427] shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]">

              {/* Top accent */}
              <div className="h-[2px] w-full bg-gradient-to-r from-[#8C2131] via-[#8C2131] to-[#C1A673]" />

              {/* Card header */}
              <div className="flex items-start justify-between border-b border-white/[0.08] p-7 sm:p-8">

                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8C2131]" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#71717A]">
                      Current direction
                    </span>
                  </div>

                  <h3 className="font-space text-2xl font-semibold tracking-tight text-[#E4E4E7] sm:text-3xl">
                    Building the next chapter.
                  </h3>
                </div>

                <div className="hidden h-11 w-11 items-center justify-center border border-[#C1A673]/20 bg-[#C1A673]/[0.05] text-[#C1A673] sm:flex">
                  <BriefcaseBusiness
                    size={19}
                    strokeWidth={1.4}
                  />
                </div>
              </div>

              {/* Focus areas */}
              <div className="p-5 sm:p-7">
                <div className="mb-5 px-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#52525B]">
                    Areas of focus
                  </span>
                </div>

                <div className="space-y-3">
                  {focusAreas.map((area, index) => {
                    const Icon = area.icon;
                    const isGold = area.accent === "gold";

                    return (
                      <motion.div
                        key={area.title}
                        initial={{
                          opacity: 0,
                          y: 18,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: 0.15 + index * 0.1,
                          duration: 0.55,
                        }}
                        whileHover={{
                          x: 5,
                        }}
                        className="group relative overflow-hidden border border-white/[0.07] bg-[#1E1E20] p-5 transition-all duration-300 hover:border-white/[0.14]"
                      >
                        {/* Hover accent */}
                        <div
                          className={`absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100 ${
                            isGold
                              ? "bg-[#C1A673]"
                              : "bg-[#8C2131]"
                          }`}
                        />

                        <div className="flex gap-4">

                          {/* Number */}
                          <div className="flex w-7 shrink-0 flex-col items-center">
                            <span
                              className={`font-mono text-[10px] ${
                                isGold
                                  ? "text-[#C1A673]"
                                  : "text-[#8C2131]"
                              }`}
                            >
                              {area.number}
                            </span>

                            <span className="mt-3 h-full w-px bg-white/[0.07]" />
                          </div>

                          {/* Icon */}
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center border ${
                              isGold
                                ? "border-[#C1A673]/20 bg-[#C1A673]/[0.05] text-[#C1A673]"
                                : "border-[#8C2131]/25 bg-[#8C2131]/[0.07] text-[#B84959]"
                            }`}
                          >
                            <Icon
                              size={19}
                              strokeWidth={1.4}
                            />
                          </div>

                          {/* Content */}
                          <div className="min-w-0">
                            <h4 className="font-space text-lg font-semibold text-[#E4E4E7]">
                              {area.title}
                            </h4>

                            <p className="mt-1.5 text-sm leading-6 text-[#71717A]">
                              {area.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom philosophy */}
              <div className="border-t border-white/[0.08] px-7 py-6 sm:px-8">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#71717A]">
                    Philosophy
                  </span>

                  <span className="h-1 w-1 rounded-full bg-[#8C2131]" />

                  <span className="font-space text-sm text-[#A1A1AA]">
                    Build with purpose.
                  </span>

                  <span className="h-1 w-1 rounded-full bg-[#C1A673]" />

                  <span className="font-space text-sm text-[#A1A1AA]">
                    Learn continuously.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 border-t border-white/[0.08] pt-7"
        >
          <div className="flex flex-col justify-between gap-4 text-xs sm:flex-row sm:items-center">
            <span className="uppercase tracking-[0.25em] text-[#52525B]">
              Spandan Guha Thakurta
            </span>

            <span className="font-space text-[#71717A]">
              Technology{" "}
              <span className="mx-2 text-[#8C2131]">×</span>
              Intelligence{" "}
              <span className="mx-2 text-[#C1A673]">×</span>
              Strategy
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;