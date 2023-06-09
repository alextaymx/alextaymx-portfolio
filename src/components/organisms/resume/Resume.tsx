import React from "react"
import { personJsonLd } from "@/lib/config/jsonLd"

type Props = {}

function Resume(props: Props) {
  const name = personJsonLd.name
  return (
    <div className="h-[600px] md:h-[30cm] md:w-[20cm]">
      <iframe
        className="h-full w-full"
        src="/assets/pdfs/Alex_Tay Mao Xiang_Resume_14-04-2023-01-24-35.pdf#view=fitH"
        title={`${name} Resume`}
        height="100%"
        width="100%"
        // frameBorder="0"
      ></iframe>
    </div>
  )
}

export default Resume
