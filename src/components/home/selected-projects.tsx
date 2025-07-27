"use client"

import { ArrowUpRightIcon, LightbulbIcon } from "lucide-react"
import { motion, useInView } from "motion/react"
import { useTranslations } from "next-intl"
import { useRef } from "react"

import Link from "@/components/link"
import { BlurImage } from "@/components/ui/blur-image"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/utils/cn"

const variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
}

// Mock projects data - you can replace this with your actual projects
const MOCK_PROJECTS = [
  {
    slug: "portfolio",
    name: "Personal Portfolio",
    description: "A modern portfolio built with Next.js and TypeScript",
    cover: "/assets/images/logo/A-black.png",
  },
  {
    slug: "project-2",
    name: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React and Node.js",
    cover: "/assets/images/logo/A-white.png",
  },
]

type CardProps = {
  project: typeof MOCK_PROJECTS[0]
}

const SelectedProjects = () => {
  const projectsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(projectsRef, { once: true, margin: "-100px" })
  const t = useTranslations()

  return (
    <motion.div
      initial='initial'
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      ref={projectsRef}
      transition={{
        duration: 0.5,
      }}
      className='relative my-24'
    >
      <motion.h2
        className='text-center text-3xl font-semibold'
        initial={{
          y: 30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {t("homepage.selectedProjects.title")}
      </motion.h2>
      <motion.div
        className='mt-12 grid gap-4 md:grid-cols-2'
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {MOCK_PROJECTS.map((project) => (
          <Card key={project.slug} project={project} />
        ))}
      </motion.div>
      <div className='my-8 flex items-center justify-center'>
        <Link
          href='/projects'
          className={cn(
            buttonVariants({
              variant: "outline",
            }),
            "rounded-xl",
          )}
        >
          {t("homepage.selectedProjects.more")}
        </Link>
      </div>
    </motion.div>
  )
}

const Card = (props: CardProps) => {
  const { project } = props
  const { slug, name, description, cover } = project
  const t = useTranslations()

  return (
    <Link
      key={slug}
      href={`/projects/${slug}`}
      className='shadow-feature-card group relative rounded-xl p-2'
    >
      <div className='flex items-center justify-between p-4'>
        <div className='flex items-center gap-3'>
          <LightbulbIcon className='size-[18px]' />
          <h2>{t("homepage.selectedProjects.card")}</h2>
        </div>
        <ArrowUpRightIcon className='size-[18px] opacity-0 transition-opacity group-hover:opacity-100' />
      </div>
      <BlurImage
        width={1280}
        height={832}
        src={cover}
        alt={description}
        className='rounded-lg'
      />
      <div className='absolute bottom-6 left-7 flex flex-col transition-[left] ease-out group-hover:left-[30px]'>
        <h3 className='text-2xl font-semibold text-white'>{name}</h3>
        <p className='dark:text-muted-foreground mt-2 text-zinc-100'>{description}</p>
      </div>
    </Link>
  )
}

export default SelectedProjects
