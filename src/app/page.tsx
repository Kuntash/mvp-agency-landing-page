"use client"

import { FirstSection } from "@/components/first-section"
import SecondSection from "@/components/second-section"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="max-w-[800px] py-10 px-4 w-full min-h-screen flex flex-col gap-y-16 sm:gap-y-20">
      <FirstSection />
      <SecondSection />
    </main>
  )
}
