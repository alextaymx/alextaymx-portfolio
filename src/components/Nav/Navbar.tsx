"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { HEADER_LINKS } from "@/lib/config/headerLinks"
import { cx } from "@/lib/utils/cx"

type Props = {}

function Navbar(props: Props) {
  const pathname = usePathname()

  return (
    <ul className="hidden space-x-2 md:flex">
      {HEADER_LINKS.map((link) => (
        <li key={link.text}>
          <Link
            className={cx(
              "rounded px-3 py-2 text-sm font-medium transition-colors duration-150",
              {
                "text-accent-5 hover:bg-hover hover:text-accent-fg": link.href !== pathname,
              },
              {
                "bg-accent-2": link.href === pathname,
              }
            )}
            href={link.href}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Navbar
