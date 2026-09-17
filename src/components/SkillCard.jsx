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
        border-zinc-900/[0.09]
        bg-white
        p-7
        transition-all
        duration-500
        hover:border-zinc-900/[0.16]
        dark:border-white/[0.08]
        dark:bg-matte-surface
        dark:hover:border-white/[0.15]
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
          bg-regal-crimson
          transition-all
          duration-500
          group-hover:w-[3px]
        "
      />

      {/* Top-right index */}

      <span
        className="
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
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Corner detail */}

      <span
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-8
          w-8
          border-r
          border-t
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
          bottom-0
          left-0
          h-8
          w-8
          border-b
          border-l
          border-regal-crimson
          opacity-20
          transition-opacity
          duration-500
          group-hover:opacity-45
        "
      />

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
          bg-regal-crimson/[0.025]
          blur-[90px]
          transition-opacity
          duration-700
          group-hover:opacity-100
          dark:bg-regal-crimson/[0.06]
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
          bg-champagne-gold/[0.025]
          blur-[90px]
          transition-opacity
          duration-700
          group-hover:opacity-100
          dark:bg-champagne-gold/[0.035]
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
            border-champagne-gold/25
            bg-zinc-100
            text-champagne-gold
            transition-all
            duration-500
            group-hover:border-champagne-gold/50
            group-hover:bg-champagne-gold/[0.06]
            dark:bg-white/[0.025]
            dark:group-hover:bg-champagne-gold/[0.05]
          "
        >
          {/* Inner frame */}

          <div
            className="
              absolute
              inset-2
              border
              border-zinc-900/[0.07]
              dark:border-white/[0.06]
            "
          />

          {/* Corner marker */}

          <span
            className="
              absolute
              -right-[1px]
              -top-[1px]
              h-3
              w-3
              border-r
              border-t
              border-regal-crimson
              opacity-60
            "
          />

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
          <span className="h-px w-6 bg-regal-crimson" />

          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-champagne-gold
            "
          >
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
            text-zinc-800
            transition-colors
            duration-300
            group-hover:text-zinc-950
            dark:text-ash-white
            dark:group-hover:text-white
          "
        >
          {skill.name}
        </h3>

        {/* =================================================
            DESCRIPTION
        ================================================== */}

        <p
          className="
            mt-4
            text-sm
            leading-7
            text-zinc-500
            transition-colors
            duration-500
            dark:text-zinc-500
          "
        >
          {skill.description}
        </p>

        {/* =================================================
            PROFICIENCY
        ================================================== */}

        <div className="mt-auto pt-8">

          {/* Label */}

          <div className="mb-3 flex items-end justify-between">
            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-zinc-400
                dark:text-zinc-600
              "
            >
              Proficiency
            </span>

            <span
              className="
                font-space
                text-lg
                font-semibold
                text-champagne-gold
              "
            >
              {skill.level}

              <span className="ml-0.5 text-xs text-zinc-400 dark:text-zinc-600">
                %
              </span>
            </span>
          </div>

          {/* Progress */}

          <div
            className="
              relative
              h-[3px]
              w-full
              bg-zinc-200
              dark:bg-white/[0.07]
            "
          >
            {/* Tick marks */}

            <div className="pointer-events-none absolute inset-0 flex justify-between">
              <span className="h-full w-px bg-zinc-300 dark:bg-white/[0.08]" />
              <span className="h-full w-px bg-zinc-300 dark:bg-white/[0.08]" />
              <span className="h-full w-px bg-zinc-300 dark:bg-white/[0.08]" />
              <span className="h-full w-px bg-zinc-300 dark:bg-white/[0.08]" />
              <span className="h-full w-px bg-zinc-300 dark:bg-white/[0.08]" />
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
                bg-regal-crimson
              "
            />
          </div>

          {/* =================================================
              BOTTOM LABEL
          ================================================== */}

          <div className="mt-7 flex items-center gap-3">
            <span className="h-px flex-1 bg-zinc-900/[0.08] dark:bg-white/[0.07]" />

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
              {skill.shortName}
            </span>

            <span className="h-px flex-1 bg-zinc-900/[0.08] dark:bg-white/[0.07]" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default SkillCard;