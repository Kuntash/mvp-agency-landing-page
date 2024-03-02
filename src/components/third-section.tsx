import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "./ui/button"

export const ThirdSection = () => {
  return (
    <section className="relative flex flex-col gap-y-4" id="third-process">
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
        Understanding the Process
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
          <b>Functional Requirements:&nbsp;&nbsp;</b>
          Initiate a detailed discussion about your idea. Receive a
          complimentary, no-obligation functional requirements document
          outlining core features.
        </motion.p>
        <motion.p
          className="text-p leading-relaxed"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <b>Its Coding Time:&nbsp;&nbsp;</b>
          Progress through the development stages with regular milestone
          updates. Access a preview link to your evolving website at every step.
        </motion.p>
        <motion.p
          className="text-p leading-relaxed"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <b>Launch Day:&nbsp;&nbsp;</b>
          We handle the deployment of your MVP, landing page, and blog on your
          chosen cloud service. Seamless configuration of your domains ensures a
          smooth launch.
        </motion.p>
      </div>
      <motion.div
        className="flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.0,
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
            className="w-full transition-all ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/50"
          >
            Book your consultation
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}
