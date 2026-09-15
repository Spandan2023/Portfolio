import { motion } from "framer-motion";

function SkillCard({ skill, index }) {
  if (!skill) return null;

  const Icon = skill.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        y: -7,
      }}
      className="
        group
        relative
        min-h-[430px]
        overflow-hidden
        border
        border-white/[0.08]
        bg-[#242427]
        p-7
        transition-all
        duration-500
        hover:border-white/[0.13]
        sm:p-8
      "
    >
      {/* =====================================================
          ARCHITECTURAL ACCENTS
      ====================================================== */}

      {/* Left accent */}

      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-[2px]
          bg-[#8C2131]
          transition-all
          duration-500
          group-hover:w-[3px]
        "
      />

      {/* Top-right index */}

      <span className="absolute right-6 top-5 font-mono text-[9px] tracking-[0.15em] text-[#3F3F46]">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Corner detail */}

      <span className="pointer-events-none absolute right-0 top-0 h-8 w-8 border-r border-t border-[#C1A673]/20 transition-colors duration-500 group-hover:border-[#C1A673]/45" />

      <span className="pointer-events-none absolute bottom-0 left-0 h-8 w-8 border-b border-l border-[#8C2131]/20 transition-colors duration-500 group-hover:border-[#8C2131]/45" />

      {/* =====================================================
          SUBTLE ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-56
          w-56
          rounded-full
          bg-[#8C2131]/[0.025]
          blur-[90px]
          transition-all
          duration-700
          group-hover:bg-[#8C2131]/[0.05]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-24
          h-52
          w-52
          rounded-full
          bg-[#C1A673]/[0.018]
          blur-[90px]
          transition-all
          duration-700
          group-hover:bg-[#C1A673]/[0.035]
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 flex h-full flex-col">

        {/* =================================================
            ICON
        ================================================== */}

        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            relative
            mb-7
            flex
            h-[72px]
            w-[72px]
            items-center
            justify-center
            border
            border-[#C1A673]/25
            bg-[#1E1E20]
            text-[#C1A673]
            transition-all
            duration-500
            group-hover:border-[#C1A673]/50
            group-hover:bg-[#C1A673]/[0.04]
          "
        >
          {/* Inner frame */}

          <div className="absolute inset-2 border border-white/[0.04]" />

          {/* Corner marker */}

          <span className="absolute -right-[1px] -top-[1px] h-3 w-3 border-r border-t border-[#8C2131]/60" />

          {Icon && (
            <Icon
              size={34}
              strokeWidth={1.6}
              className="relative z-10"
            />
          )}
        </motion.div>

        {/* =================================================
            CATEGORY
        ================================================== */}

        <div className="flex items-center gap-3">

          <span className="h-px w-6 bg-[#8C2131]" />

          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#C1A673]">
            {skill.category}
          </p>

        </div>

        {/* =================================================
            TITLE
        ================================================== */}

        <h3
          className="
            mt-3
            font-space
            text-2xl
            font-semibold
            tracking-[-0.03em]
            text-[#E4E4E7]
            transition-colors
            duration-300
            group-hover:text-white
          "
        >
          {skill.name}
        </h3>

        {/* =================================================
            DESCRIPTION
        ================================================== */}

        <p className="mt-4 text-sm leading-7 text-[#71717A]">
          {skill.description}
        </p>

        {/* =================================================
            PROFICIENCY
        ================================================== */}

        <div className="mt-auto pt-8">

          {/* Label */}

          <div className="mb-3 flex items-end justify-between">

            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#52525B]">
              Proficiency
            </span>

            <span className="font-space text-lg font-semibold text-[#C1A673]">
              {skill.level}
              <span className="ml-0.5 text-xs text-[#52525B]">
                %
              </span>
            </span>

          </div>

          {/* Progress */}

          <div className="relative h-[3px] w-full bg-white/[0.06]">

            {/* Tick marks */}

            <div className="pointer-events-none absolute inset-0 flex justify-between">
              <span className="h-full w-px bg-white/[0.06]" />
              <span className="h-full w-px bg-white/[0.06]" />
              <span className="h-full w-px bg-white/[0.06]" />
              <span className="h-full w-px bg-white/[0.06]" />
              <span className="h-full w-px bg-white/[0.06]" />
            </div>

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: `${skill.level}%`,
              }}
              transition={{
                duration: 1.1,
                delay: 0.2 + index * 0.08,
                ease: "easeOut",
              }}
              className="
                relative
                z-10
                h-full
                bg-[#8C2131]
              "
            />

          </div>

          {/* =================================================
              BOTTOM LABEL
          ================================================== */}

          <div className="mt-7 flex items-center gap-3">

            <span className="h-px flex-1 bg-white/[0.06]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#52525B]">
              {skill.shortName}
            </span>

            <span className="h-px flex-1 bg-white/[0.06]" />

          </div>

        </div>
      </div>
    </motion.article>
  );
}

export default SkillCard;