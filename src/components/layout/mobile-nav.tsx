"use client"

import { MenuIcon } from "lucide-react"
import { useTranslations } from "next-intl"

import Link from "@/components/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HEADER_LINKS } from "@/lib/config/headerLinks"

const MobileNav = () => {
  const t = useTranslations()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex size-9 items-center justify-center p-0 md:hidden"
          aria-label={t("layout.toggle-menu")}
          variant="ghost"
        >
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={20} className="min-w-40">
        {HEADER_LINKS.map((link, index) => (
          <DropdownMenuItem key={index} asChild>
            <Link href={link.href} className="flex items-center gap-4">
              {link.icon}
              <div>{link.text}</div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MobileNav
