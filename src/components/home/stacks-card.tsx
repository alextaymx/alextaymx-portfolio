"use client"

import {
  SiCloudflare,
  SiCss,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGooglecloud,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMarkdown,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRadixui,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVitest,
} from "@icons-pack/react-simple-icons"
import { ZapIcon } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Marquee } from "@/components/ui/marquee"
import AwsCloudLogoSvg from "@/public/assets/images/logo/AWS-Cloud-logo_32.svg"
import AwsCloudLogoDarkSvg from "@/public/assets/images/logo/AWS-Cloud-logo_32_Dark.svg"

const StacksCard = () => {
  const t = useTranslations()

  return (
    <div className='flex overflow-hidden flex-col gap-2 p-4 h-60 rounded-xl shadow-feature-card lg:p-6'>
      <div className='flex gap-2 items-center'>
        <ZapIcon className='size-[18px]' />
        <h2 className='text-sm'>{t("homepage.about-me.stacks")}</h2>
      </div>
      <Marquee gap='20px' className='py-4' fade pauseOnHover>
        <SiHtml5 className='size-10' />
        <SiCss className='size-10' />
        <SiJavascript className='size-10' />
        <SiTypescript className='size-10' />
        <SiFigma className='size-10' />
        <SiTailwindcss className='size-10' />
        <SiNextdotjs className='size-10' />
        <SiReact className='size-10' />
        <SiPython className='size-10' />
        <SiPostgresql className='size-10' />
        <SiRadixui className='size-10' />
      </Marquee>
      <Marquee gap='20px' className='py-4' reverse fade pauseOnHover>
        <Image draggable="false" src={AwsCloudLogoSvg} alt='AWS Cloud Logo' className='size-10 select-none' />
        <SiFlutter className='size-10' />
        <SiDocker className='size-10' />
        <SiFirebase className='size-10' />
        <SiGit className='size-10' />
        <SiVite className='size-10' />
        <SiGraphql className='size-10' />
        <SiCloudflare className='size-10' />
        <SiMarkdown className='size-10' />
        <SiVitest className='size-10' />
        <SiNodedotjs className='size-10' />
      </Marquee>
    </div>
  )
}

export default StacksCard
