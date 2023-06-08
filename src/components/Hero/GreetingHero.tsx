import { differenceInYears, formatDistanceToNowStrict } from "date-fns"
import Image from "next/image"
import React from "react"
import { personJsonLd } from "@/lib/config/jsonLd"
import profilePic from "@/public/assets/images/alex-avatar.jpg"
import GreetingTitle from "./GreetingTitle"

type Props = {}

function GreetingHero(props: Props) {
  const birthdate = new Date(personJsonLd.birthDate)
  const age = differenceInYears(new Date(), birthdate) // use date-fns to calculate age

  return (
    <section className="space-y-6 md:my-16">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-2">
        <div className="space-y-4 md:max-w-lg">
          <GreetingTitle />
          <h2 className="text-lg font-medium text-accent">
            {age} years old • {personJsonLd.jobTitle[0]} • {personJsonLd.jobTitle[1]}
          </h2>
          <p className="text-justify text-lg">{personJsonLd.bio}</p>
        </div>
        <Image
          src={profilePic}
          alt="alex-avatar"
          // className="rounded-full"
          loading="eager"
          priority
          className="max-w-full rounded-2xl object-cover md:h-56 md:w-56 lg:max-w-none "
        />
      </div>
      <div className="flex gap-6">
        {/* {HERO_LINKS.map((link) => (
          <a key={link.id} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        ))} */}
      </div>
    </section>
  )
}

export default GreetingHero
