import Link from "next/link"
import React from "react"
import { personJsonLd } from "@/lib/config/jsonLd"

type Props = {}

function HeaderLogo(props: Props) {
  return (
    <Link href="/" className="logo flex items-center justify-center gap-1" aria-label="Homepage">
      <span> &lt;</span>
      <span className="logo-name">{personJsonLd.name}</span>
      <span>/&gt;</span>
    </Link>
  )
}

export default HeaderLogo
