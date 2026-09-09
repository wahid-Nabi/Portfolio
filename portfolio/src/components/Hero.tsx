import React from 'react'
import { motion } from 'framer-motion'
import { HelixChronoMatrix } from './ui/helix-chrono-matrix'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section id="home" className="relative isolate flex min-h-[calc(78vh-64px)] items-center overflow-hidden border-b border-slate-800 px-6 py-20 md:px-12 lg:px-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_45%,rgba(34,211,238,0.12),transparent_34%),var(--page-bg)]" />
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 text-left lg:grid-cols-[1.1fr_0.9fr] lg:gap-4"
      >
        <motion.div variants={itemVariants} className="max-w-3xl">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">Software Engineer</p>

        <motion.h1
          variants={itemVariants}
          className="max-w-4xl text-[clamp(3.5rem,9vw,8rem)] font-black leading-[0.86] tracking-[-0.07em] text-slate-50"
        >
          Waheed<span className="block text-slate-400">Nabi</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-10 max-w-xl text-base leading-7 text-slate-300 md:text-lg"
        >
          Software Engineer with 3+ years of experience in C#, .NET Core, Web APIs, SQL Server, and React, with a strong focus on enterprise application development and database optimization.
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <motion.a href="#projects" variants={itemVariants} className="inline-flex items-center gap-4 border-b border-cyan-400 pb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-100 transition-colors hover:text-cyan-400">
            View projects <span aria-hidden="true" className="text-lg">→</span>
          </motion.a>
          <motion.a href="/Wahid-Nabi-CV.pdf" download="Wahid-Nabi-CV.pdf" variants={itemVariants} className="inline-flex items-center gap-3 rounded-full border border-slate-600 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 transition-colors hover:border-cyan-400 hover:text-cyan-400">
            Download CV <span aria-hidden="true">↓</span>
          </motion.a>
        </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 0.78, scale: 1 }} transition={{ duration: 1.1, delay: 0.15 }} className="relative -mr-16 h-[22rem] min-w-0 lg:-mr-28 lg:h-[32rem]">
          <HelixChronoMatrix headline="NABI" className="h-full w-full" />
        </motion.div>
      </motion.div>
      <a href="#projects" className="absolute bottom-8 left-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500 hover:text-cyan-400 md:left-12 lg:left-20">Scroll to work ↓</a>
    </section>
  )
}

export default Hero
