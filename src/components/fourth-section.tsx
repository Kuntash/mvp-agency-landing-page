import React from "react"
import { motion } from "framer-motion"

export const FourthSection = () => {
  return (
    <section className="relative flex flex-col gap-y-4" id="third-pricing">
      <motion.h3
        className="text-h3 font-bold tracking-tight leading-relaxed w-full"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        Transparent Pricing
      </motion.h3>

      <div className="flex flex-col gap-y-4">
        <motion.p
          className="text-p leading-relaxed"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          Unlock the potential of your idea for just&nbsp;
          <b>$500</b>
          &nbsp;per MVP.
        </motion.p>
      </div>
    </section>
  )
}
