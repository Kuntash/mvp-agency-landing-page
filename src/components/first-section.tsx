import React from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import Link from "next/link"

export const FirstSection = () => {
  return (
    <header className="relative flex flex-col gap-y-4 w-full" id="first-header">
      <div className="w-full">
        <motion.div
          className="h-[4px] bg-primary"
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "90%" }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
        />

        <motion.h2
          className="text-h2 font-bold tracking-tight leading-relaxed"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0,
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          Empower Your&nbsp;
          <span className="bg-clip-text bg-gradient-to-br from-primary to-accent text-transparent  ">
            MVP
          </span>
          <br />
          Idea.
        </motion.h2>
      </div>
      <motion.p
        className="text-p leading-relaxed"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        Embark on turning your passion-fueled idea into a market-ready MVP in
        just weeks with our cost effective and seamless development. Experience
        our commitment to rapid development.
      </motion.p>

      {/* CTA Buttons */}

      <motion.div
        className="flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <Link
          href="https://tally.so/r/mR5Q6J"
          target="_blank"
          className="flex-1 sm:flex-none"
        >
          <Button
            variant="default"
            className="w-full transition-all ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/50"
          >
            Share your idea
          </Button>
        </Link>

        <Link
          href="https://cal.com/kunga-tashi/mvp-idea-discussion"
          target="_blank"
          className="flex-1 sm:flex-none"
        >
          <Button
            variant="secondary"
            className="w-full flex-1 sm:flex-none transition-all ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/50"
          >
            Book your consultation
          </Button>
        </Link>
      </motion.div>
    </header>
  )
}
