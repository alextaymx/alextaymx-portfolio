"use client"

// import { StarIcon } from "lucide-react"
import NowPlaying from "@/components/layout/now-playing"
import Link from "@/components/link"
import { linkVariants } from "@/components/ui/link"
import { useTranslations } from "@/i18n/client"

import { FOOTER_LINKS , hasSpotify } from "@/lib/constants"

const Footer = () => {
  const t = useTranslations()

  return (
    <footer className='bg-background/30 shadow-xs relative mx-auto mb-6 flex w-full max-w-5xl flex-col rounded-2xl p-8 saturate-100 backdrop-blur-[10px]'>
      {hasSpotify && <NowPlaying />}
      <div className='mt-12 grid grid-cols-2 sm:grid-cols-3'>
        {FOOTER_LINKS.map((list) => (
          <div key={list.id} className='mb-10 flex flex-col items-start gap-4 pr-4'>
            {list.links.map((link) => {
              const { href, key } = link

              return (
                <Link key={href} href={href} className={linkVariants({ variant: "muted" })}>
                  {t(`layout.${key}`)}
                </Link>
              )
            })}
          </div>
        ))}
      </div>
      <div className='mt-20 flex items-center justify-between text-sm'>
        <div>&copy; {new Date().getFullYear()} Alex Tay</div>
        {/* <Link
          href='https://git.new/alextaymx-portfolio'
          className='flex items-center justify-center overflow-hidden rounded-md border'
        >
          <div className='bg-muted flex h-8 items-center gap-2 border-r px-2'>
            <StarIcon className='size-4' />
            <span className='font-medium'>Star</span>
          </div>
          <div className='bg-background flex h-8 items-center px-3'>
            {status === "pending" && "--"}
            {status === "error" && t("common.error")}
            {status === "success" &&
              Intl.NumberFormat("en", {
                notation: "compact",
                minimumFractionDigits: 0,
                maximumFractionDigits: 1,
              }).format(data.repoStars)}
          </div>
        </Link> */}
      </div>
    </footer>
  )
}

export default Footer
