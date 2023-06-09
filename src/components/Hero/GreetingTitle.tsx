import React from "react"
import { personJsonLd } from "@/lib/config/jsonLd"
import WaveEmoji from "../Icon/WaveEmoji"

type Props = {}

function GreetingTitle(props: Props) {
  return (
    <h1 className="text-4xl font-bold text-black">
      Hey, I&apos;m {personJsonLd.name} <WaveEmoji />
    </h1>
  )
}

export default GreetingTitle
