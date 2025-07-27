"use client"

import { ArrowUpRightIcon, FileTextIcon } from "lucide-react"
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

// Mock articles data - you can replace this with your actual articles
const MOCK_ARTICLES = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    description: "Learn how to build modern web applications with Next.js",
    cover: "/assets/images/logo/A-black.png",
    date: "2024-01-15",
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices",
    description: "Essential TypeScript patterns for better code quality",
    cover: "/assets/images/logo/A-white.png",
    date: "2024-01-10",
  },
]

type CardProps = {
  article: typeof MOCK_ARTICLES[0]
}

const LatestArticles = () => {
  const articlesRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(articlesRef, { once: true, margin: "-100px" })
  const t = useTranslations()

  return (
    <motion.div
      initial='initial'
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      ref={articlesRef}
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
        {t("homepage.latest-articles.title")}
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
        {MOCK_ARTICLES.map((article) => (
          <Card key={article.slug} article={article} />
        ))}
      </motion.div>
      <div className='my-8 flex items-center justify-center'>
        <Link
          href='/blog'
          className={cn(
            buttonVariants({
              variant: "outline",
            }),
            "rounded-xl",
          )}
        >
          {t("homepage.latest-articles.more")}
        </Link>
      </div>
    </motion.div>
  )
}

const Card = (props: CardProps) => {
  const { article } = props
  const { slug, title, description, cover, date } = article
  const t = useTranslations()

  return (
    <Link
      key={slug}
      href={`/blog/${slug}`}
      className='shadow-feature-card group relative rounded-xl p-2'
    >
      <div className='flex items-center justify-between p-4'>
        <div className='flex items-center gap-3'>
          <FileTextIcon className='size-[18px]' />
          <h2>{t("homepage.latest-articles.card")}</h2>
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
        <h3 className='text-2xl font-semibold text-white'>{title}</h3>
        <p className='dark:text-muted-foreground mt-2 text-zinc-100'>{description}</p>
        <p className='dark:text-muted-foreground mt-1 text-sm text-zinc-200'>{date}</p>
      </div>
    </Link>
  )
}

export default LatestArticles
