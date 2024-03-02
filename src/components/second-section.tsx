import React from "react"
import { motion } from "framer-motion"

const SecondSection = () => {
  return (
    <section className="relative flex flex-col gap-y-4" id="second-proposal">
      <motion.h3
        className="text-h3 font-bold tracking-tight leading-relaxed w-full"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        What You Receive
      </motion.h3>

      <div className="flex flex-col gap-y-4">
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
          <b>Marketable Landing Page:&nbsp;&nbsp;</b>
          Elevate your presence with a compelling landing page designed to
          resonate with your MVP. Leverage engaging&nbsp;
          <span className="bg-clip-text bg-gradient-to-br from-primary to-accent text-transparent font-bold italic ">
            ANIMATIONS
          </span>
          &nbsp;to drive user engagement.
        </motion.p>
        <motion.p
          className="text-p leading-relaxed"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.0,
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <b>Modern Web Application:&nbsp;&nbsp;</b>
          Transform your concept into a high-performing, user-friendly, and
          scalable web application. Opt for our customizable component library
          or bring your own designs to life.
        </motion.p>
        <motion.p
          className="text-p leading-relaxed"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <b>SEO-Ready Blog:&nbsp;&nbsp;</b>
          Enhance your online visibility with an SEO-configured blog. Fully
          adaptable with your preferred CMS or simple markdown.
        </motion.p>
        <motion.p
          className="text-p leading-relaxed"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.4,
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <b>Additional Services ( Available for a Fee ):&nbsp;&nbsp;</b>
          Tailor your MVP with additional services like newsletters, custom
          forms, or other features not included above. ( Pricing may vary ).
        </motion.p>
      </div>
    </section>
  )
}

export default SecondSection
